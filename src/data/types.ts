export type EggCategory =
  | "signup"
  | "download"
  | "event"
  | "free"
  | "student"
  | "cloud"
  | "referral";

export type EggStatus = "fresh" | "ending" | "expired" | "unverified";
export type Confidence = "official" | "community" | "pending";
export type Region = "cn" | "global" | "both";

/** 一颗「鸡蛋」= 一个可以白拿的 Token / 额度 / 试用金。 */
export interface Egg {
  /** URL slug，全站唯一 */
  id: string;
  title: string;
  /** 提供方，与 providers 中的 id 对应 */
  providerId: string;
  category: EggCategory;
  /** 人类可读的面值，如「¥6 等值 Token」 */
  valueText: string;
  /** 归一化估值（人民币元）；null 表示无法折算 */
  valueCNY: number | null;
  /** 一句话说清这是什么 */
  summary: string;
  /** 领取步骤，按顺序 */
  steps: string[];
  /** 坑与注意事项 */
  notes: string[];
  /** 官方领取/活动页 */
  link: string;
  /** 门槛标签，如「需手机号」「需绑卡」 */
  requires: string[];
  /** 1 简单 · 2 中等 · 3 麻烦 */
  difficulty: 1 | 2 | 3;
  region: Region;
  /** 有效期说明，如「长期有效」 */
  duration: string;
  /** ISO 日期；null 表示长期或无明确截止 */
  expiresAt: string | null;
  status: EggStatus;
  /** 数据来源可信度 */
  confidence: Confidence;
  /** 我们最后一次核验的日期 */
  verifiedAt: string | null;
  /** 上架日期，用于「今日上新」 */
  addedAt: string;
  tags: string[];
  /** 今日精选 */
  featured?: boolean;
}

export interface Provider {
  id: string;
  name: string;
  /** 一句话介绍 */
  blurb: string;
  homepage: string;
  region: Region;
}

export interface Digest {
  /** ISO 日期 */
  date: string;
  title: string;
  items: string[];
}
