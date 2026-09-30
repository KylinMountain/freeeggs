#!/usr/bin/env node
/**
 * 数据体检：在构建前跑一遍，防止一条写错的记录把整站搞坏。
 * 用法：pnpm run check
 * 依赖 Node >= 22.12（原生支持 import .ts）
 */
import { EGGS } from "../src/data/eggs.ts";
import { PROVIDERS } from "../src/data/providers.ts";

const CATEGORIES = ["signup", "download", "event", "free", "student", "cloud", "referral"];
const STATUSES = ["fresh", "ending", "expired", "unverified"];
const CONFIDENCE = ["official", "community", "pending"];
const REGIONS = ["cn", "global", "both"];

const errors = [];
const warnings = [];
const providerIds = new Set(PROVIDERS.map((p) => p.id));
const seen = new Map();
const isDate = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));

for (const egg of EGGS) {
  const at = "[" + egg.id + "]";
  if (!egg.id) errors.push(at + " 缺少 id");
  if (seen.has(egg.id)) errors.push(at + " id 重复（另一条也在用）");
  seen.set(egg.id, egg);

  if (!providerIds.has(egg.providerId)) errors.push(at + " providerId 不存在：" + egg.providerId);
  if (!CATEGORIES.includes(egg.category)) errors.push(at + " category 非法：" + egg.category);
  if (!STATUSES.includes(egg.status)) errors.push(at + " status 非法：" + egg.status);
  if (!CONFIDENCE.includes(egg.confidence)) errors.push(at + " confidence 非法：" + egg.confidence);
  if (!REGIONS.includes(egg.region)) errors.push(at + " region 非法：" + egg.region);
  if (![1, 2, 3].includes(egg.difficulty)) errors.push(at + " difficulty 必须是 1/2/3");

  if (!egg.title || !egg.summary) errors.push(at + " title / summary 不能为空");
  if (!egg.valueText) errors.push(at + " valueText 不能为空");
  if (!Array.isArray(egg.steps)) errors.push(at + " steps 必须是数组");
  if (!Array.isArray(egg.notes)) errors.push(at + " notes 必须是数组");
  if (!egg.link || !/^https?:\/\//.test(egg.link)) errors.push(at + " link 必须是 http(s) 链接");
  if (egg.valueCNY !== null && typeof egg.valueCNY !== "number") errors.push(at + " valueCNY 必须是数字或 null");
  if (!isDate(egg.addedAt)) errors.push(at + " addedAt 必须是 YYYY-MM-DD");
  if (egg.verifiedAt !== null && !isDate(egg.verifiedAt)) errors.push(at + " verifiedAt 必须是 YYYY-MM-DD 或 null");
  if (egg.expiresAt !== null && !isDate(egg.expiresAt)) errors.push(at + " expiresAt 必须是 YYYY-MM-DD 或 null");

  // 逻辑一致性
  if (egg.verifiedAt && egg.confidence === "pending") {
    warnings.push(at + " 已核验但可信度仍是 pending");
  }
  if (!egg.verifiedAt && egg.status === "fresh") {
    warnings.push(at + " 状态是 fresh 但从未核验（考虑改成 unverified）");
  }
  if (egg.expiresAt && egg.status === "fresh" && Date.parse(egg.expiresAt) < Date.now()) {
    warnings.push(at + " expiresAt 已经过期，但状态还是 fresh");
  }
  if (egg.steps.length === 0 && egg.confidence === "official") {
    warnings.push(at + " 官方来源却没有写领取步骤");
  }
}

const usedProviders = new Set(EGGS.map((e) => e.providerId));
for (const p of PROVIDERS) {
  if (!usedProviders.has(p.id)) warnings.push("[provider] " + p.id + " 没有任何条目");
}

console.log("检查 " + EGGS.length + " 条目录 · " + PROVIDERS.length + " 个平台");
if (warnings.length) {
  console.log("\n提醒（" + warnings.length + "）:");
  for (const w of warnings) console.log("  ~ " + w);
}
if (errors.length) {
  console.error("\n错误（" + errors.length + "）:");
  for (const e of errors) console.error("  x " + e);
  console.error("\n数据体检不通过，已中止构建。");
  process.exit(1);
}
console.log("\n没问题，继续构建。");
