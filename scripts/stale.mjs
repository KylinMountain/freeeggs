#!/usr/bin/env node
/**
 * 今日该复核哪些蛋？
 *
 * 用法：
 *   pnpm run stale                  人看的清单
 *   pnpm run stale -- --markdown    生成 Markdown（CI 用它更新 issue）
 *   pnpm run stale -- --exit-code   有需要复核的就以退出码 1 结束
 *
 * 环境变量：
 *   MAX_AGE_DAYS   超过多少天算「太久没动」，默认 21
 *
 * 依赖 Node >= 22.12（原生支持 import .ts）
 */
import { EGGS } from "../src/data/eggs.ts";
import { PROVIDERS } from "../src/data/providers.ts";

const args = process.argv.slice(2);
const MARKDOWN = args.includes("--markdown");
const EXIT_CODE = args.includes("--exit-code");
const MAX_AGE_DAYS = Number(process.env.MAX_AGE_DAYS ?? 21);

const name = (id) => PROVIDERS.find((p) => p.id === id)?.name ?? id;
const today = new Date();
const days = (iso) => Math.round((today - new Date(iso + "T00:00:00")) / 86400000);

const never = EGGS.filter((e) => !e.verifiedAt);
const old = EGGS.filter((e) => e.verifiedAt && days(e.verifiedAt) > MAX_AGE_DAYS);
const expiredButLive = EGGS.filter(
  (e) => e.expiresAt && Date.parse(e.expiresAt) < today.getTime() && e.status !== "expired"
);
const endingSoon = EGGS.filter(
  (e) => e.expiresAt && e.status !== "expired" && days(e.expiresAt) > -30 && days(e.expiresAt) < 0
);

const sections = [
  { title: "从未核验", hint: "只有线索，没人确认过。要么去核实，要么一直挂「待核验」。", list: never },
  { title: `超过 ${MAX_AGE_DAYS} 天没复核`, hint: "厂商改规则不会通知我们。", list: old },
  { title: "截止日期已过，状态还挂着", hint: "要么改成 expired，要么确认活动延期了。", list: expiredButLive },
  { title: "一个月内到期", hint: "盯紧点，到期当天记得撤架或续期。", list: endingSoon },
];

const total = never.length + old.length + expiredButLive.length;

const line = (e) =>
  "- [ ] **" + e.title + "** — " + name(e.providerId) +
  " · " + (e.verifiedAt ? "上次核验 " + e.verifiedAt : "从未核验") +
  (e.expiresAt ? " · 截止 " + e.expiresAt : "") +
  " · [官方链接](" + e.link + ")";

if (MARKDOWN) {
  const out = [];
  out.push("# 🔍 复核清单（自动更新）");
  out.push("");
  out.push("> 由 \`pnpm run stale -- --markdown\` 生成，每天自动刷新。阈值 **" + MAX_AGE_DAYS + " 天**。");
  out.push("> 目录共 **" + EGGS.length + "** 条，本次需要处理 **" + total + "** 条。");
  out.push("");
  out.push("复核完请更新 \`src/data/eggs.ts\` 里的 \`verifiedAt\` / \`status\`，并往 \`src/data/digests.ts\` 补一条蛋报。");
  out.push("");
  for (const s of sections) {
    out.push("## " + s.title + "（" + s.list.length + "）");
    out.push("");
    out.push("_" + s.hint + "_");
    out.push("");
    if (s.list.length === 0) out.push("（无）");
    else for (const e of s.list) out.push(line(e));
    out.push("");
  }
  out.push("---");
  out.push("");
  out.push("_清单为空时可以关掉这个 issue；下次有新条目会自动重新打开或新建。_");
  process.stdout.write(out.join("\n") + "\n");
} else {
  console.log("领鸡蛋 · 复核清单   阈值 " + MAX_AGE_DAYS + " 天   共 " + EGGS.length + " 条\n");
  for (const s of sections) {
    console.log("● " + s.title + "（" + s.list.length + "）");
    console.log("  " + s.hint);
    if (s.list.length === 0) console.log("  （无）");
    else for (const e of s.list) console.log("  - " + e.title + "  [" + name(e.providerId) + " · " + (e.verifiedAt ?? "从未核验") + "]");
    console.log("");
  }
  console.log(total === 0 ? "今天没有要处理的，收工。\n" : "今天有 " + total + " 条要处理。\n");
  console.log("复核完记得更新 verifiedAt，并往 src/data/digests.ts 补一条蛋报。");
}

if (EXIT_CODE && total > 0) process.exit(1);
