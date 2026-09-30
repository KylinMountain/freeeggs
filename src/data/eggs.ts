import type { Egg } from "./types";

/**
 * 鸡蛋目录（seed catalog）
 * ---------------------------------------------------------------
 * 每条都带 confidence / verifiedAt / status 三个字段：
 *   confidence  数据来源可信度（official 官方公示 / community 社区整理 / pending 待核验）
 *   verifiedAt  我们最后一次人工核验的日期；null 表示尚未核验
 *   status      当前状态（fresh 有效 / ending 快结束 / unverified 待核验 / expired 已失效）
 *
 * 每日更新流程：改动 -> 更新 verifiedAt -> pnpm build -> 部署。
 * 维护规范见仓库根目录 MAINTAINING.md。
 */
export const EGGS: Egg[] = [
  {
    "id": "deepseek-desktop",
    "title": "DeepSeek 桌面端下载礼",
    "providerId": "deepseek",
    "category": "download",
    "valueText": "¥6 等值 Token",
    "valueCNY": 6,
    "summary": "下载安装 DeepSeek 官方桌面客户端，登录后领取新人 Token 礼包。",
    "steps": [
      "到 DeepSeek 官网下载桌面客户端安装包",
      "用手机号登录客户端",
      "在客户端的新人活动入口点「领取」",
      "回到开放平台控制台确认额度已到账"
    ],
    "notes": [
      "同一手机号 / 同一设备一般只能领一次",
      "属于限时拉新活动，金额与规则随时可能调整，以客户端内实际展示为准"
    ],
    "link": "https://www.deepseek.com",
    "requires": [
      "手机号",
      "新用户"
    ],
    "difficulty": 1,
    "region": "cn",
    "duration": "限时活动，以客户端内展示为准",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-30",
    "addedAt": "2026-09-30",
    "tags": [
      "桌面端",
      "新用户",
      "限时",
      "本站缘起"
    ],
    "featured": true
  },
  {
    "id": "aliyun-bailian-newuser",
    "title": "阿里云百炼：每个模型 100 万 tokens",
    "providerId": "aliyun",
    "category": "signup",
    "valueText": "每个模型 100 万 tokens",
    "valueCNY": null,
    "summary": "开通百炼后，通义千问等模型逐个可领 100 万 tokens 免费额度，叠加起来是全网最肥的一份。",
    "steps": [
      "注册阿里云账号并完成实名认证",
      "在控制台开通「百炼」大模型服务",
      "进模型广场，对你想用的模型逐个点「领取免费额度」",
      "创建 API Key，按模型分别调用"
    ],
    "notes": [
      "免费额度通常有 180 天有效期，领了不用会作废",
      "各模型额度彼此独立，一个模型用完不影响别的",
      "超出免费额度会「用完即停」，不会偷偷扣费，但需要自己充值",
      "新上架的部分模型可能不参与活动"
    ],
    "link": "https://bailian.console.aliyun.com",
    "requires": [
      "阿里云账号",
      "实名认证"
    ],
    "difficulty": 2,
    "region": "cn",
    "duration": "领取后约 180 天",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "official",
    "verifiedAt": "2026-09-30",
    "addedAt": "2026-09-27",
    "tags": [
      "通义千问",
      "API",
      "额度大"
    ],
    "featured": true
  },
  {
    "id": "zhipu-flash-free",
    "title": "智谱 GLM Flash 档长期免费",
    "providerId": "zhipu",
    "category": "free",
    "valueText": "免费档模型不限量",
    "valueCNY": null,
    "summary": "GLM 的 Flash 轻量档长期免费开放，日常问答、批量改写完全够用。",
    "steps": [
      "注册智谱开放平台账号并实名",
      "在控制台创建 API Key",
      "调用 Flash 档模型名（免费模型不扣额度）"
    ],
    "notes": [
      "免费档有并发与速率限制，高峰期可能排队",
      "能力明显弱于旗舰模型，重要任务别省这点钱",
      "免费模型列表会随版本更新变动，以定价页为准"
    ],
    "link": "https://open.bigmodel.cn",
    "requires": [
      "手机号",
      "实名认证"
    ],
    "difficulty": 2,
    "region": "cn",
    "duration": "长期有效",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-30",
    "addedAt": "2026-09-25",
    "tags": [
      "GLM",
      "长期",
      "API"
    ],
    "featured": true
  },
  {
    "id": "zhipu-signup",
    "title": "智谱开放平台新用户赠送额度",
    "providerId": "zhipu",
    "category": "signup",
    "valueText": "新用户赠送 tokens",
    "valueCNY": null,
    "summary": "注册并实名后可领一份新人 Token 包，够跑通一整个项目的验证阶段。",
    "steps": [
      "注册智谱开放平台账号",
      "完成实名认证",
      "在「资源包 / 我的额度」页面领取新人礼"
    ],
    "notes": [
      "实名后额度才到账",
      "有有效期，注意别放到过期"
    ],
    "link": "https://open.bigmodel.cn",
    "requires": [
      "手机号",
      "实名认证"
    ],
    "difficulty": 2,
    "region": "cn",
    "duration": "以平台展示为准",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-30",
    "addedAt": "2026-09-25",
    "tags": [
      "GLM",
      "新用户"
    ]
  },
  {
    "id": "siliconflow-signup",
    "title": "硅基流动：注册送额度 + 小模型永久免费",
    "providerId": "siliconflow",
    "category": "signup",
    "valueText": "注册赠额度，部分模型长期免费",
    "valueCNY": null,
    "summary": "一个 Key 调上百个开源模型，注册送试用额度，另有若干小参数模型长期免费。",
    "steps": [
      "注册硅基流动账号",
      "在控制台领取新人赠送额度",
      "创建 API Key，模型名直接填开源模型 ID 即可调用"
    ],
    "notes": [
      "赠送额度金额历史上多次调整，以官网当前公示为准",
      "免费模型多为 7B 级别小模型，适合轻量任务",
      "同一实名信息重复注册一般不会重复发放"
    ],
    "link": "https://siliconflow.cn",
    "requires": [
      "手机号"
    ],
    "difficulty": 1,
    "region": "cn",
    "duration": "赠送额度有有效期",
    "expiresAt": null,
    "status": "unverified",
    "confidence": "pending",
    "verifiedAt": null,
    "addedAt": "2026-09-24",
    "tags": [
      "开源模型",
      "聚合",
      "API"
    ]
  },
  {
    "id": "volcengine-ark-newuser",
    "title": "火山方舟（豆包）新用户免费额度",
    "providerId": "volcengine",
    "category": "signup",
    "valueText": "每个模型 50 万 tokens",
    "valueCNY": null,
    "summary": "字节跳动豆包系列模型，开通方舟后每个模型可领一份免费 tokens。",
    "steps": [
      "注册火山引擎账号并实名",
      "开通「火山方舟」大模型服务",
      "在开通管理页逐个模型领取免费额度",
      "创建推理接入点并获取 API Key"
    ],
    "notes": [
      "需要在方舟里为模型创建「接入点」才能调用，比别家多一步",
      "免费额度分模型独立计算，有效期以页面为准"
    ],
    "link": "https://www.volcengine.com/product/ark",
    "requires": [
      "火山引擎账号",
      "实名认证"
    ],
    "difficulty": 2,
    "region": "cn",
    "duration": "以平台展示为准",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-29",
    "addedAt": "2026-09-23",
    "tags": [
      "豆包",
      "API",
      "新用户"
    ]
  },
  {
    "id": "tencent-hunyuan-newuser",
    "title": "腾讯混元新用户免费额度",
    "providerId": "tencent",
    "category": "signup",
    "valueText": "新用户赠送 tokens",
    "valueCNY": null,
    "summary": "腾讯云混元大模型，新用户开通即送一份调用额度，另有轻量档长期免费。",
    "steps": [
      "注册腾讯云账号并完成实名",
      "开通混元大模型服务",
      "在控制台领取新用户免费额度",
      "到访问管理里创建 API 密钥"
    ],
    "notes": [
      "腾讯云的密钥体系与 CAM 权限绑定较绕，第一次配要有点耐心"
    ],
    "link": "https://cloud.tencent.com/product/hunyuan",
    "requires": [
      "腾讯云账号",
      "实名认证"
    ],
    "difficulty": 3,
    "region": "cn",
    "duration": "以平台展示为准",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-28",
    "addedAt": "2026-09-22",
    "tags": [
      "混元",
      "API"
    ]
  },
  {
    "id": "baidu-qianfan-newuser",
    "title": "百度千帆新用户免费额度",
    "providerId": "baidu",
    "category": "signup",
    "valueText": "新用户赠送 tokens",
    "valueCNY": null,
    "summary": "文心一言系列，新用户可领免费调用额度，轻量档模型长期免费。",
    "steps": [
      "注册百度智能云账号并实名",
      "开通千帆大模型平台",
      "在计费管理里领取免费额度",
      "创建应用获取 API Key / Secret Key"
    ],
    "notes": [
      "鉴权用 API Key + Secret Key 换 access_token，和主流做法不一样"
    ],
    "link": "https://qianfan.cloud.baidu.com",
    "requires": [
      "百度智能云账号",
      "实名认证"
    ],
    "difficulty": 2,
    "region": "cn",
    "duration": "以平台展示为准",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-28",
    "addedAt": "2026-09-21",
    "tags": [
      "文心一言",
      "API"
    ]
  },
  {
    "id": "xfyun-spark-lite",
    "title": "讯飞星火 Lite 档永久免费",
    "providerId": "xfyun",
    "category": "free",
    "valueText": "Lite 档不限量",
    "valueCNY": null,
    "summary": "星火 Lite 档长期免费开放，注册实名后即可调用。",
    "steps": [
      "注册讯飞开放平台账号",
      "创建应用并领取星火免费额度",
      "在应用详情里拿到 APPID / APIKey / APISecret"
    ],
    "notes": [
      "鉴权需三者配套使用",
      "免费档限流明显，适合做原型"
    ],
    "link": "https://xinghuo.xfyun.cn",
    "requires": [
      "手机号",
      "实名认证"
    ],
    "difficulty": 2,
    "region": "cn",
    "duration": "长期有效",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-26",
    "addedAt": "2026-09-20",
    "tags": [
      "星火",
      "长期",
      "API"
    ]
  },
  {
    "id": "moonshot-newuser",
    "title": "Kimi 开放平台新用户额度",
    "providerId": "moonshot",
    "category": "signup",
    "valueText": "新用户赠送额度",
    "valueCNY": null,
    "summary": "月之暗面 Kimi 开放平台，注册并实名后赠送一份调用额度。",
    "steps": [
      "注册 Kimi 开放平台账号",
      "完成实名认证",
      "在账户余额页确认赠送额度已到账",
      "创建 API Key"
    ],
    "notes": [
      "实名后额度到账可能有延迟",
      "长上下文模型单价较高，注意别一次性烧完"
    ],
    "link": "https://platform.moonshot.cn",
    "requires": [
      "手机号",
      "实名认证"
    ],
    "difficulty": 2,
    "region": "cn",
    "duration": "以平台展示为准",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-26",
    "addedAt": "2026-09-19",
    "tags": [
      "Kimi",
      "长上下文"
    ]
  },
  {
    "id": "minimax-newuser",
    "title": "MiniMax 开放平台新用户礼",
    "providerId": "minimax",
    "category": "signup",
    "valueText": "新用户赠送额度",
    "valueCNY": null,
    "summary": "海螺系列模型开放平台，注册后赠送试用额度。",
    "steps": [
      "注册 MiniMax 开放平台",
      "完成实名",
      "领取新人试用额度",
      "创建 API Key"
    ],
    "notes": [
      "语音与视频生成能力是它的特色，额度消耗比文本快得多"
    ],
    "link": "https://platform.minimaxi.com",
    "requires": [
      "手机号",
      "实名认证"
    ],
    "difficulty": 2,
    "region": "cn",
    "duration": "以平台展示为准",
    "expiresAt": null,
    "status": "unverified",
    "confidence": "pending",
    "verifiedAt": null,
    "addedAt": "2026-09-18",
    "tags": [
      "海螺",
      "多模态"
    ]
  },
  {
    "id": "stepfun-newuser",
    "title": "阶跃星辰新用户额度",
    "providerId": "stepfun",
    "category": "signup",
    "valueText": "新用户赠送额度",
    "valueCNY": null,
    "summary": "Step 系列多模态模型，注册后赠送试用 tokens。",
    "steps": [
      "注册阶跃星辰开放平台",
      "完成实名认证",
      "领取新用户额度",
      "创建 API Key"
    ],
    "notes": [
      "部分多模态模型需单独申请开通"
    ],
    "link": "https://platform.stepfun.com",
    "requires": [
      "手机号",
      "实名认证"
    ],
    "difficulty": 2,
    "region": "cn",
    "duration": "以平台展示为准",
    "expiresAt": null,
    "status": "unverified",
    "confidence": "pending",
    "verifiedAt": null,
    "addedAt": "2026-09-18",
    "tags": [
      "多模态"
    ]
  },
  {
    "id": "baichuan-newuser",
    "title": "百川智能新用户额度",
    "providerId": "baichuan",
    "category": "signup",
    "valueText": "新用户赠送额度",
    "valueCNY": null,
    "summary": "Baichuan 系列模型平台，注册赠送试用额度。",
    "steps": [
      "注册百川开放平台",
      "完成实名认证",
      "领取新用户额度"
    ],
    "notes": [
      "平台政策变动较频繁，领之前先看定价页"
    ],
    "link": "https://platform.baichuan-ai.com",
    "requires": [
      "手机号",
      "实名认证"
    ],
    "difficulty": 2,
    "region": "cn",
    "duration": "以平台展示为准",
    "expiresAt": null,
    "status": "unverified",
    "confidence": "pending",
    "verifiedAt": null,
    "addedAt": "2026-09-17",
    "tags": []
  },
  {
    "id": "huawei-modelarts",
    "title": "华为云 ModelArts Studio 免费额度",
    "providerId": "hunyuan-hw",
    "category": "signup",
    "valueText": "新用户赠送 tokens",
    "valueCNY": null,
    "summary": "华为云大模型即服务平台，新用户可领免费推理额度，盘古与开源模型都有。",
    "steps": [
      "注册华为云账号并实名",
      "开通 ModelArts Studio",
      "在模型广场领取免费额度",
      "创建 API Key"
    ],
    "notes": [
      "华为云控制台层级较深，按文档走"
    ],
    "link": "https://www.huaweicloud.com/product/modelarts/studio.html",
    "requires": [
      "华为云账号",
      "实名认证"
    ],
    "difficulty": 3,
    "region": "cn",
    "duration": "以平台展示为准",
    "expiresAt": null,
    "status": "unverified",
    "confidence": "pending",
    "verifiedAt": null,
    "addedAt": "2026-09-16",
    "tags": [
      "盘古",
      "API"
    ]
  },
  {
    "id": "google-ai-studio-free",
    "title": "Google AI Studio 免费层",
    "providerId": "google",
    "category": "free",
    "valueText": "Gemini 免费层，按日限流",
    "valueCNY": null,
    "summary": "在 AI Studio 直接生成 API Key，Gemini 系列提供免费层，按分钟与每日请求数限流。",
    "steps": [
      "用 Google 账号登录 AI Studio",
      "点「Get API key」创建密钥",
      "按免费层限流调用，超出会返回 429"
    ],
    "notes": [
      "需要海外网络环境",
      "免费层的数据通常会被用于改进产品，别传敏感或商业数据",
      "各模型免费额度与限流随时调整，以官方定价页为准",
      "免费层调用失败先看是不是超了 RPM / RPD"
    ],
    "link": "https://aistudio.google.com",
    "requires": [
      "Google 账号",
      "海外网络"
    ],
    "difficulty": 2,
    "region": "global",
    "duration": "长期（限流随政策变动）",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "official",
    "verifiedAt": "2026-09-30",
    "addedAt": "2026-09-15",
    "tags": [
      "Gemini",
      "免费层",
      "限流"
    ],
    "featured": true
  },
  {
    "id": "groq-free-tier",
    "title": "Groq 免费层",
    "providerId": "groq",
    "category": "free",
    "valueText": "免费层，按日限流",
    "valueCNY": null,
    "summary": "自研 LPU 推理，开源模型速度快得离谱，注册即用免费层。",
    "steps": [
      "注册 Groq 账号",
      "在控制台创建 API Key",
      "按 OpenAI 兼容格式调用"
    ],
    "notes": [
      "需要海外网络",
      "速率限制按模型区分，超了要等窗口刷新",
      "上下文长度限制比同模型别家更紧"
    ],
    "link": "https://groq.com",
    "requires": [
      "Google/GitHub 账号",
      "海外网络"
    ],
    "difficulty": 2,
    "region": "global",
    "duration": "长期（限流）",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-29",
    "addedAt": "2026-09-14",
    "tags": [
      "极速推理",
      "免费层",
      "OpenAI 兼容"
    ]
  },
  {
    "id": "openrouter-free-models",
    "title": "OpenRouter 免费模型",
    "providerId": "openrouter",
    "category": "free",
    "valueText": "带 :free 后缀的模型免费调用",
    "valueCNY": null,
    "summary": "一个 Key 打通上百个模型，名字带 :free 的可以白嫖，适合做模型对比。",
    "steps": [
      "注册 OpenRouter 账号",
      "创建 API Key",
      "把模型名写成 xxx:free 调用"
    ],
    "notes": [
      "免费模型的免费额度有每日次数上限，用超了要充 $10 才能解锁更高配额",
      "免费路由不稳定，延迟和可用性都看运气",
      "会记录请求用于聚合统计，敏感内容别发"
    ],
    "link": "https://openrouter.ai",
    "requires": [
      "邮箱或 GitHub 账号",
      "海外网络"
    ],
    "difficulty": 2,
    "region": "global",
    "duration": "长期（每日限额）",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-29",
    "addedAt": "2026-09-13",
    "tags": [
      "聚合",
      "模型对比",
      "免费层"
    ]
  },
  {
    "id": "github-models-free",
    "title": "GitHub Models 免费额度",
    "providerId": "github",
    "category": "free",
    "valueText": "随账号免费调用多家模型",
    "valueCNY": null,
    "summary": "有 GitHub 账号就能在 Models 里调 OpenAI、Meta、Mistral 等模型，附赠一个 playground。",
    "steps": [
      "登录 GitHub",
      "进入 GitHub Models 页面",
      "创建 Personal Access Token（带 models 权限）",
      "用兼容端点调用"
    ],
    "notes": [
      "免费档限流较紧，适合试验不适合生产",
      "需要海外网络环境的可能性较高"
    ],
    "link": "https://github.com/marketplace/models",
    "requires": [
      "GitHub 账号"
    ],
    "difficulty": 2,
    "region": "global",
    "duration": "长期（限流）",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-28",
    "addedAt": "2026-09-12",
    "tags": [
      "GitHub",
      "免费层",
      "playground"
    ]
  },
  {
    "id": "cloudflare-workers-ai",
    "title": "Cloudflare Workers AI 每日免费额度",
    "providerId": "cloudflare",
    "category": "free",
    "valueText": "每日 10,000 Neurons",
    "valueCNY": null,
    "summary": "边缘推理，每天送固定算力单位，写 Worker 时顺手就能接上模型。",
    "steps": [
      "注册 Cloudflare 账号",
      "开通 Workers AI",
      "拿 Account ID 与 API Token",
      "通过 REST 或 Worker 绑定调用"
    ],
    "notes": [
      "计费单位是 Neurons，不同模型单次消耗不同",
      "免费额度每天刷新，用不完不累积"
    ],
    "link": "https://developers.cloudflare.com/workers-ai",
    "requires": [
      "Cloudflare 账号"
    ],
    "difficulty": 3,
    "region": "global",
    "duration": "每日刷新",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "community",
    "verifiedAt": "2026-09-27",
    "addedAt": "2026-09-11",
    "tags": [
      "边缘计算",
      "每日额度"
    ]
  },
  {
    "id": "cerebras-free",
    "title": "Cerebras 免费层",
    "providerId": "cerebras",
    "category": "free",
    "valueText": "免费层，每日限流",
    "valueCNY": null,
    "summary": "晶圆级芯片厂商的推理云，开源大模型推理速度第一梯队，注册送免费层。",
    "steps": [
      "注册 Cerebras Cloud 账号",
      "创建 API Key",
      "按 OpenAI 兼容格式调用"
    ],
    "notes": [
      "需要海外网络",
      "免费层限流与可选模型数量会变"
    ],
    "link": "https://cloud.cerebras.ai",
    "requires": [
      "邮箱账号",
      "海外网络"
    ],
    "difficulty": 2,
    "region": "global",
    "duration": "长期（限流）",
    "expiresAt": null,
    "status": "unverified",
    "confidence": "pending",
    "verifiedAt": null,
    "addedAt": "2026-09-10",
    "tags": [
      "极速推理",
      "免费层"
    ]
  },
  {
    "id": "nvidia-nim-credits",
    "title": "NVIDIA NIM 注册送 credits",
    "providerId": "nvidia",
    "category": "signup",
    "valueText": "注册赠送推理 credits",
    "valueCNY": null,
    "summary": "build.nvidia.com 上可以直接试用各家开源模型，注册送一笔推理积分。",
    "steps": [
      "注册 NVIDIA 开发者账号",
      "进入 build.nvidia.com 选模型",
      "生成 API Key 调用"
    ],
    "notes": [
      "积分用完就得自己接自己的 GPU 或付费",
      "部分模型有地区限制"
    ],
    "link": "https://build.nvidia.com",
    "requires": [
      "NVIDIA 账号"
    ],
    "difficulty": 2,
    "region": "global",
    "duration": "以平台展示为准",
    "expiresAt": null,
    "status": "unverified",
    "confidence": "pending",
    "verifiedAt": null,
    "addedAt": "2026-09-09",
    "tags": [
      "NIM",
      "开源模型"
    ]
  },
  {
    "id": "mistral-free-tier",
    "title": "Mistral 免费实验层",
    "providerId": "mistral",
    "category": "free",
    "valueText": "免费实验层按秒限流",
    "valueCNY": null,
    "summary": "法国开源模型公司，La Plateforme 提供免费实验层，欧洲模型里最好上手的一家。",
    "steps": [
      "注册 Mistral 账号",
      "在 La Plateforme 创建 API Key",
      "调用并接受免费层限流"
    ],
    "notes": [
      "免费层需要手机号验证",
      "限流按每秒请求数计算",
      "数据默认用于训练，可在设置里关闭"
    ],
    "link": "https://console.mistral.ai",
    "requires": [
      "手机号",
      "海外网络"
    ],
    "difficulty": 3,
    "region": "global",
    "duration": "长期（限流）",
    "expiresAt": null,
    "status": "unverified",
    "confidence": "pending",
    "verifiedAt": null,
    "addedAt": "2026-09-08",
    "tags": [
      "开源模型",
      "免费层"
    ]
  },
  {
    "id": "github-student-pack",
    "title": "GitHub Student Developer Pack",
    "providerId": "github",
    "category": "student",
    "valueText": "数十项开发者服务免费",
    "valueCNY": null,
    "summary": "在校生认证一次，Copilot、云服务、域名、CI 额度打包白送，是学生党最大的一份鸡蛋。",
    "steps": [
      "准备学校邮箱或学生证照片",
      "到 GitHub Education 提交学生认证",
      "通过后在 Pack 页面逐个领取权益",
      "注意每项权益的单独有效期"
    ],
    "notes": [
      "认证通常几天内出结果，材料不清晰会被打回",
      "部分权益需要绑定支付方式才会激活",
      "毕业或失去学生身份后权益会陆续失效"
    ],
    "link": "https://education.github.com/pack",
    "requires": [
      "在校学生身份",
      "学校邮箱或学生证"
    ],
    "difficulty": 3,
    "region": "global",
    "duration": "在校期间有效",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "official",
    "verifiedAt": "2026-09-30",
    "addedAt": "2026-09-07",
    "tags": [
      "学生",
      "Copilot",
      "大礼包"
    ],
    "featured": true
  },
  {
    "id": "azure-for-students",
    "title": "Azure for Students：$100 试用金",
    "providerId": "azure",
    "category": "student",
    "valueText": "$100 等值云资源",
    "valueCNY": 720,
    "summary": "在校生免信用卡即可开 $100 额度，可以拿来跑 GPU 或部署推理服务。",
    "steps": [
      "用学校邮箱注册 Azure for Students",
      "完成学生身份验证",
      "领取 $100 额度",
      "在 AI Foundry 里部署模型"
    ],
    "notes": [
      "一年有效，可续期",
      "部分区域与机型不在免费范围内，创建资源前先看价格页",
      "额度用完不会自动扣费，但需要自己盯着"
    ],
    "link": "https://azure.microsoft.com/free/students/",
    "requires": [
      "在校学生身份",
      "学校邮箱"
    ],
    "difficulty": 3,
    "region": "global",
    "duration": "12 个月，可续",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "official",
    "verifiedAt": "2026-09-30",
    "addedAt": "2026-09-06",
    "tags": [
      "学生",
      "GPU",
      "云资源"
    ]
  },
  {
    "id": "gcp-free-trial",
    "title": "Google Cloud 新用户 $300 试用金",
    "providerId": "gcloud",
    "category": "cloud",
    "valueText": "$300 等值云资源",
    "valueCNY": 2160,
    "summary": "GCP 新用户送 $300，90 天内有效，Vertex AI 上的 Gemini 也能用它跑。",
    "steps": [
      "注册 Google Cloud 账号",
      "绑定一张信用卡（不会自动扣费）",
      "领取 $300 试用额度",
      "在 Vertex AI 里启用模型"
    ],
    "notes": [
      "必须绑卡，虽然官方说明不会自动扣费",
      "90 天到期后余额作废，别囤着不用",
      "账户一旦升级为付费账户就不能再回试用状态"
    ],
    "link": "https://cloud.google.com/free",
    "requires": [
      "Google 账号",
      "信用卡",
      "海外网络"
    ],
    "difficulty": 3,
    "region": "global",
    "duration": "90 天",
    "expiresAt": null,
    "status": "fresh",
    "confidence": "official",
    "verifiedAt": "2026-09-30",
    "addedAt": "2026-09-05",
    "tags": [
      "云资源",
      "Vertex AI",
      "需绑卡"
    ]
  },
  {
    "id": "aliyun-campus",
    "title": "阿里云高校计划",
    "providerId": "aliyun",
    "category": "student",
    "valueText": "学生专属免费算力与课程",
    "valueCNY": null,
    "summary": "国内学生认证后领取免费算力额度与实验资源，是境内学生党最省事的入口。",
    "steps": [
      "注册阿里云并完成学生认证",
      "进入高校计划页面",
      "领取算力与百炼相关权益"
    ],
    "notes": [
      "权益按批次发放，错过批次要等下一期",
      "需要学信网可验证的学生身份"
    ],
    "link": "https://developer.aliyun.com/plan/student",
    "requires": [
      "在校学生身份",
      "实名认证"
    ],
    "difficulty": 3,
    "region": "cn",
    "duration": "按批次",
    "expiresAt": null,
    "status": "unverified",
    "confidence": "pending",
    "verifiedAt": null,
    "addedAt": "2026-09-04",
    "tags": [
      "学生",
      "算力"
    ]
  },
  {
    "id": "referral-roundup",
    "title": "各家邀请返利汇总",
    "providerId": "siliconflow",
    "category": "referral",
    "valueText": "双方各得额度",
    "valueCNY": null,
    "summary": "多数平台都有邀请机制，拉一个朋友双方都加额度，适合几个人凑一凑。",
    "steps": [
      "在自己账号里找到「邀请有礼」",
      "把专属链接发给朋友",
      "朋友注册并实名后额度自动到账"
    ],
    "notes": [
      "一般要求被邀请人完成实名才算有效",
      "刷小号会被风控，可能连主号一起封",
      "返利额度通常也有有效期"
    ],
    "link": "https://siliconflow.cn",
    "requires": [
      "已有账号",
      "真实好友"
    ],
    "difficulty": 1,
    "region": "cn",
    "duration": "以平台展示为准",
    "expiresAt": null,
    "status": "unverified",
    "confidence": "pending",
    "verifiedAt": null,
    "addedAt": "2026-09-03",
    "tags": [
      "邀请",
      "返利"
    ]
  },
];

/** 目录里最后一次核验的日期，用于页脚展示「数据更新于」。 */
export const EGGS_UPDATED_AT = EGGS
  .map((e) => e.verifiedAt)
  .filter((d): d is string => Boolean(d))
  .sort()
  .at(-1) ?? null;

export const eggById = (id: string) => EGGS.find((e) => e.id === id);
export const eggsByProvider = (providerId: string) => EGGS.filter((e) => e.providerId === providerId);
