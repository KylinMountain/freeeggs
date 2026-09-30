import type { EggCategory, EggStatus, Confidence, Region } from "./types";

export const SITE = {
  name: "领鸡蛋",
  latin: "freeeggs",
  tagline: "一代人有一代人的鸡蛋要领",
  intro:
    "上一代人的鸡蛋在超市门口排队领，这一代人的鸡蛋在对话框里。今天能白拿的 Token、额度、试用金，我们都替你收好了。",
  description:
    "领鸡蛋 —— 每日更新的 AI 免费 Token / 额度 / 试用金情报站。汇总国内大模型平台与海外 API 的免费额度，标注领取门槛、截止时间与最后核验日期。",
  repo: "https://github.com/KylinMountain/freeeggs",
  issueNew: "https://github.com/KylinMountain/freeeggs/issues/new",
  // 可选：填上邮箱后，投稿页会多一个「邮件投稿」按钮
  email: "",
  license: "CC BY-NC 4.0",
} as const;

export const CATEGORIES: Record<EggCategory, { label: string; desc: string; icon: string }> = {
  signup:   { label: "注册礼",   desc: "新用户注册即送，门槛最低", icon: "🥚" },
  download: { label: "下载礼",   desc: "装上客户端或 App 就送",     icon: "📦" },
  event:    { label: "限时活动", desc: "有截止日期，手慢无",         icon: "⏳" },
  free:     { label: "常驻免费", desc: "长期免费额度，随用随取",     icon: "🌾" },
  student:  { label: "学生认证", desc: "在校生专属，额度最肥",       icon: "🎓" },
  cloud:    { label: "云试用金", desc: "云厂商试用金，可跑模型",     icon: "☁️" },
  referral: { label: "邀请返利", desc: "拉人一起领，双方都有",       icon: "🤝" },
};

export const STATUS_META: Record<EggStatus, { label: string; tone: string; hint: string }> = {
  fresh:      { label: "有效",   tone: "fresh",   hint: "最近核验可领" },
  ending:     { label: "快结束", tone: "ending",  hint: "临近截止，抓紧" },
  unverified: { label: "待核验", tone: "pending", hint: "社区提供，尚未核实" },
  expired:    { label: "已失效", tone: "expired", hint: "活动已结束或已改规则" },
};

export const DIFFICULTY: Record<number, { label: string; hint: string }> = {
  1: { label: "简单", hint: "几分钟搞定" },
  2: { label: "中等", hint: "要认证或绑卡" },
  3: { label: "麻烦", hint: "需外币卡 / 海外网络 / 人工审核" },
};

export const REGIONS: Record<Region, { label: string; hint: string }> = {
  cn:     { label: "中国大陆", hint: "手机号 + 实名即可" },
  global: { label: "海外",     hint: "需要海外网络与支付方式" },
  both:   { label: "全球",     hint: "国内外都能领" },
};

export const CONFIDENCE: Record<Confidence, { label: string; hint: string }> = {
  official:  { label: "官方公示", hint: "来自官方定价页或公告" },
  community: { label: "社区整理", hint: "来自社区反馈，可能已变动" },
  pending:   { label: "待核验",   hint: "线索尚未核实" },
};

/** 站点的「今天」——构建时取一次，全站共用，避免时区漂移。 */
export const TODAY = new Date();
