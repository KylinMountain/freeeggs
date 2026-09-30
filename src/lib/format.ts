function parseDay(iso: string): Date {
  return new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
}

/** 2026-09-30 -> "2026-09-30"，short -> "09-30" */
export function fmtDate(iso: string | null, short = false): string {
  if (!iso) return "—";
  const d = parseDay(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return short ? `${m}-${day}` : `${d.getFullYear()}-${m}-${day}`;
}

/** 今天与某天相差多少天（正数 = 过去） */
export function dayDiff(iso: string, today: Date = new Date()): number {
  const a = parseDay(iso).getTime();
  const b = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  return Math.round((b - a) / 86_400_000);
}

/** 相对日期：今天 / 昨天 / 3 天前 / 2 周前 */
export function relDay(iso: string | null, today: Date = new Date()): string {
  if (!iso) return "未核验";
  const d = dayDiff(iso, today);
  if (d <= 0) return "今天";
  if (d === 1) return "昨天";
  if (d < 7) return `${d} 天前`;
  if (d < 30) return `${Math.floor(d / 7)} 周前`;
  if (d < 365) return `${Math.floor(d / 30)} 个月前`;
  return fmtDate(iso, true);
}

/** 距离截止还有几天；null 表示无截止 */
export function daysLeft(expiresAt: string | null, today: Date = new Date()): number | null {
  if (!expiresAt) return null;
  return -dayDiff(expiresAt, today);
}

export function prettyCNY(n: number | null): string {
  if (n == null) return "—";
  return `¥${n % 1 === 0 ? n : n.toFixed(2)}`;
}
