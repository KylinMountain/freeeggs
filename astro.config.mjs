import { defineConfig } from 'astro/config';

// 领鸡蛋 freeeggs —— 每日更新的 AI 免费额度情报站
// 站点根地址只在 `site` 这一处配置，RSS / sitemap / canonical 都从它派生。
export default defineConfig({
  site: 'https://freeeggs.xiruistar.cn',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
