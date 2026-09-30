# 上线配置（一次性）

目标：**合并 PR → 自动构建 → rsync 到阿里云 → 线上更新**。

链路：

```
PR 合并到 main
   └─ GitHub Actions: deploy.yml
        ├─ pnpm install
        ├─ pnpm run build      ← 内含 check，坏数据直接拦下
        └─ rsync dist/  →  root@47.100.32.255:/var/www/freeeggs/
                                └─ nginx: freeeggs.xiruistar.cn
```

服务器上**不需要 Node**（构建全在 CI 完成），只需要 nginx 和目录。

---

## 1. DNS

在 xiruistar.cn 的 DNS 服务商加一条记录：

| 类型 | 主机记录 | 记录值 |
| --- | --- | --- |
| A | `freeeggs` | `47.100.32.255` |

验证（在**你自己电脑**上跑，这台开发机的 DNS 被沙箱劫持了，结果不可信）：

```bash
dig +short freeeggs.xiruistar.cn     # 应返回 47.100.32.255
```

> **备案**：`xiruistar.cn` 已经在这台机器上提供服务，属于已备案域名。
> 同域名的子域名通常不需要重新备案，但如果解析后 80 端口访问被拦，先查这个。

## 2. 服务器准备目录和 nginx

```bash
ssh aliyun

# 目录（与其它站点并列，不碰现有的 /var/www/xiruistar）
sudo mkdir -p /var/www/freeeggs
sudo chown -R root:root /var/www/freeeggs

# nginx 站点
sudo tee /etc/nginx/sites-available/freeeggs.conf > /dev/null < deploy/nginx-freeeggs.conf
sudo ln -sf /etc/nginx/sites-available/freeeggs.conf /etc/nginx/sites-enabled/freeeggs.conf
sudo nginx -t && sudo systemctl reload nginx

# 签证书（前提：DNS 已生效、80 端口可访问）
sudo certbot --nginx -d freeeggs.xiruistar.cn
```

把配置传到服务器的方式（在本地仓库根目录跑）：

```bash
scp deploy/nginx-freeeggs.conf aliyun:/tmp/freeeggs.conf
ssh aliyun 'sudo mv /tmp/freeeggs.conf /etc/nginx/sites-available/freeeggs.conf && sudo ln -sf /etc/nginx/sites-available/freeeggs.conf /etc/nginx/sites-enabled/freeeggs.conf && sudo nginx -t && sudo systemctl reload nginx'
```

## 3. 生成专用的部署密钥

**不要用你个人的 SSH key**。单独生成一把，只给它写站点的权限，随时可以吊销。

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy@freeeggs" -f ~/.ssh/freeeggs_deploy -N ""

# 把公钥装到服务器
ssh aliyun 'mkdir -p ~/.ssh && chmod 700 ~/.ssh'
cat ~/.ssh/freeeggs_deploy.pub | ssh aliyun 'cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys'

# 自测：应该能免密登录
ssh -i ~/.ssh/freeeggs_deploy root@47.100.32.255 'echo ok'
```

## 4. 配置 GitHub Secrets

`gh` 已经登录为 KylinMountain，直接跑：

```bash
gh secret set SSH_HOST      --body "47.100.32.255"          --repo KylinMountain/freeeggs
gh secret set SSH_USER      --body "root"                   --repo KylinMountain/freeeggs
gh secret set SSH_PORT      --body "22"                     --repo KylinMountain/freeeggs
gh secret set DEPLOY_PATH   --body "/var/www/freeeggs"      --repo KylinMountain/freeeggs
gh secret set SSH_PRIVATE_KEY --repo KylinMountain/freeeggs < ~/.ssh/freeeggs_deploy

gh secret list --repo KylinMountain/freeeggs
```

在配好之前，`deploy.yml` 会检测到 `SSH_HOST` 为空并**优雅跳过**，不会把 Actions 跑红。

## 5. 验证

```bash
gh workflow run deploy.yml --repo KylinMountain/freeeggs
gh run watch --repo KylinMountain/freeeggs

curl -I https://freeeggs.xiruistar.cn/
```

---

## 日常：合并一个 PR 会发生什么

1. 贡献者改 `src/data/eggs.ts`，提 PR
2. 你在 GitHub 上点 Merge
3. `deploy.yml` 自动触发 → 体检 → 构建 → rsync
4. 大约 1～2 分钟后线上更新（HTML 不缓存，刷新即可见）

内容维护不用碰服务器，也不用本地构建。

## 安全说明

- `rsync --delete` 会删除 `DEPLOY_PATH` 里多余的文件，所以 workflow 里加了防呆：路径为空或为 `/` 直接报错退出
- 部署密钥只用于 rsync 站点目录；如果哪天想收紧，可以改用非 root 用户 + 目录级的写权限
- 想更进一步：把 `SSH_HOST` 换成服务器 IP，配合 `authorized_keys` 里的 `from="..."` 限制来源

## 备选：不用服务器

纯静态产物，换托管商只要重新指 DNS：

- **Cloudflare Pages / Vercel / Netlify**：构建命令 `pnpm build`，输出目录 `dist`
- **GitHub Pages**：需要把 `astro.config.mjs` 的 `site` 改成 Pages 域名
