# 维护手册

这个站点的全部价值都压在一件事上：**读者能看出哪条是新鲜的，哪条没人管**。
所以维护流程的核心不是「多加几条」，而是「如实更新核验日期」。

## 每天 15 分钟

机器已经把「该看哪几条」算好了 —— 每天会自动更新一个复核 issue。

```bash
pnpm run stale          # 1. 看今天该复核哪些（和 issue 里一致）
# 2. 打开官方页面逐条确认，改动 src/data/eggs.ts
# 3. 往 src/data/digests.ts 顶部加一条今天的蛋报
pnpm run check          # 4. 体检
pnpm build              # 5. 构建（会自动再跑一次 check）
```

然后提交、推送到能自动部署的远端。issue 里的复选框勾完，可以关掉 —— 下次有新条目会自动重建。

### 自动复核 issue

`.github/workflows/reverify.yml`，每天 UTC 01:00（北京 09:00）跑。它维护**同一个** issue，标题固定为
`🔍 复核清单（自动更新）`，所以不会每天刷屏。里面分四类：

| 分类 | 含义 | 该怎么处理 |
| --- | --- | --- |
| 从未核验 | `verifiedAt: null` | 去试一遍；确认不了就让它继续挂着「待核验」 |
| 超过 N 天没复核 | 默认 21 天 | 打开官方页面确认规则是否变了 |
| 截止日期已过但没撤架 | `expiresAt` 过期且 `status` 不是 expired | 改成 `expired`，或确认活动延期了 |
| 一个月内到期 | `expiresAt` 在 30 天内 | 提前盯紧，到期当天撤架 |

调整阈值：改 workflow 里的 `MAX_AGE_DAYS`（或本地跑时给环境变量）。

### 复核一条时，要确认这四件事

1. **还能不能领** —— 活动入口是否还在，有没有改成仅限特定用户
2. **门槛变了没** —— 是否需要新增实名、绑卡、海外手机号
3. **额度变了没** —— 数值、有效期、是否改成「首月」而不是「永久」
4. **截止日期** —— 有明确日期就填 `expiresAt`，没有就写进 `duration`

确认完把 `verifiedAt` 改成今天。**没确认的不要改**。

## 加一条新蛋

在 `src/data/eggs.ts` 的 `EGGS` 数组里加一个对象。字段说明：

```ts
{
  id: "aliyun-bailian-newuser",   // URL slug，全站唯一，用英文短横线
  title: "阿里云百炼：每个模型 100 万 tokens",
  providerId: "aliyun",           // 必须在 providers.ts 里存在
  category: "signup",             // signup/download/event/free/student/cloud/referral
  valueText: "每个模型 100 万 tokens",  // 给人看的面值
  valueCNY: null,                 // 能折算成人民币才填数字，否则 null
  summary: "一句话说清这是什么。",
  steps: ["第一步", "第二步"],     // 领取步骤，按顺序
  notes: ["坑一", "坑二"],         // 注意事项，宁多勿少
  link: "https://官方活动地址",
  requires: ["实名认证"],          // 门槛标签
  difficulty: 2,                  // 1 简单 / 2 中等 / 3 麻烦
  region: "cn",                   // cn 中国大陆 / global 海外 / both
  duration: "领取后约 180 天",      // 有效期说明
  expiresAt: null,                // 有明确截止日才填 "YYYY-MM-DD"
  status: "fresh",                // fresh/ending/expired/unverified
  confidence: "official",         // official/community/pending
  verifiedAt: "2026-09-30",       // 你亲自确认过的日期；没确认写 null
  addedAt: "2026-09-27",          // 上架日期，驱动「近 3 天上新」
  tags: ["通义千问", "API"],
  featured: true,                 // 可选，进「今日精选」
}
```

### 三个字段怎么填，不要含糊

**`status`**

- `fresh` —— 最近核验过，还能领
- `ending` —— 有效，但截止日期在 30 天内
- `unverified` —— 只有线索，没核过
- `expired` —— 已失效。**不要删除条目**，留着能让人少白跑一趟

**`confidence`**

- `official` —— 官方定价页 / 公告里白纸黑字写的
- `community` —— 社区反馈、你实测过，但官方没明说
- `pending` —— 听说有，没验证

**`verifiedAt`** —— 只有真的打开过官方页面确认，才写日期。
`confidence: "pending"` 的条目 `verifiedAt` 必须是 `null`，否则 `pnpm check` 会提醒你自相矛盾。

## 收到投稿怎么处理

投稿有两条路：站上的 `/submit` 表单（生成结构化 issue 或一段 Markdown），以及 GitHub 的 issue 表单。处理顺序一样：

1. **先自己复现**。没能确认的一律标 `pending` + `verifiedAt: null`，并在蛋报里说明「有人报料，尚未核实」。
2. 复现成功再升 `community`，写当天日期。
3. 只有官方页面明确写了，才升 `official`。
4. 进蛋报时写明是**新增**、**复核**还是**规则变动** —— 这三种读者在意的程度不一样。

如果对方只给了截图没给链接，或者活动明显是「买课解锁」那一类，**不收**。

投稿多起来之后，如果想让访客不用 GitHub 账号也能提交，接一个 serverless function 调 GitHub API 建 issue 就行，
前端的表单字段和生成逻辑不用动。

## 边界

这个站点靠「不骗人」立身。因此：

- 不为了页面好看把 `pending` 写成 `fresh`
- 不删失效条目
- 不收录需要先花钱、先拉人头的伪福利
- 不写「手慢无」「最后一天」这类制造焦虑的话术，除非官方确实这么写

## 改词表 / 加分类

分类、门槛、地区、可信度的中文名与配色都在 `src/data/site.ts`。
加一个新分类时，记得同步 `scripts/check.mjs` 里的 `CATEGORIES` 白名单，否则体检会失败。

配色和排版变量在 `src/styles/egg.css` 顶部的 `:root` 里，深色模式是紧随其后的
`@media (prefers-color-scheme: dark)` 覆盖块。改配色优先改那一处。
