import type { Provider } from "./types";

export const PROVIDERS: Provider[] = [
  { id: "deepseek",   name: "DeepSeek",       blurb: "深度求索，性价比著称的国产模型", homepage: "https://www.deepseek.com", region: "cn" },
  { id: "aliyun",     name: "阿里云百炼",     blurb: "通义千问系列，新用户额度给得最爽", homepage: "https://bailian.console.aliyun.com", region: "cn" },
  { id: "volcengine", name: "火山方舟",       blurb: "字节跳动豆包系列模型平台", homepage: "https://www.volcengine.com/product/ark", region: "cn" },
  { id: "zhipu",      name: "智谱 AI",        blurb: "GLM 系列，Flash 档长期免费", homepage: "https://open.bigmodel.cn", region: "cn" },
  { id: "moonshot",   name: "月之暗面 Kimi",  blurb: "长上下文见长的 Kimi 开放平台", homepage: "https://platform.moonshot.cn", region: "cn" },
  { id: "siliconflow",name: "硅基流动",       blurb: "聚合多家开源模型的推理平台", homepage: "https://siliconflow.cn", region: "cn" },
  { id: "tencent",    name: "腾讯混元",       blurb: "腾讯云大模型服务平台", homepage: "https://cloud.tencent.com/product/hunyuan", region: "cn" },
  { id: "baidu",      name: "百度千帆",       blurb: "文心一言系列模型平台", homepage: "https://qianfan.cloud.baidu.com", region: "cn" },
  { id: "xfyun",      name: "讯飞星火",       blurb: "科大讯飞大模型开放平台", homepage: "https://xinghuo.xfyun.cn", region: "cn" },
  { id: "minimax",    name: "MiniMax",        blurb: "海螺大模型开放平台", homepage: "https://platform.minimaxi.com", region: "cn" },
  { id: "stepfun",    name: "阶跃星辰",       blurb: "Step 系列多模态模型", homepage: "https://platform.stepfun.com", region: "cn" },
  { id: "baichuan",   name: "百川智能",       blurb: "Baichuan 系列模型平台", homepage: "https://platform.baichuan-ai.com", region: "cn" },
  { id: "hunyuan-hw", name: "华为云",         blurb: "ModelArts Studio 大模型即服务", homepage: "https://www.huaweicloud.com/product/modelarts/studio.html", region: "cn" },
  { id: "google",     name: "Google AI Studio", blurb: "Gemini 系列，免费层最慷慨的一家", homepage: "https://aistudio.google.com", region: "global" },
  { id: "groq",       name: "Groq",           blurb: "自研 LPU，推理速度极快", homepage: "https://groq.com", region: "global" },
  { id: "openrouter", name: "OpenRouter",     blurb: "一个 Key 调用上百个模型", homepage: "https://openrouter.ai", region: "global" },
  { id: "mistral",    name: "Mistral AI",     blurb: "法国开源模型公司", homepage: "https://mistral.ai", region: "global" },
  { id: "github",     name: "GitHub",         blurb: "GitHub Models 与 Student Pack", homepage: "https://github.com", region: "global" },
  { id: "cloudflare", name: "Cloudflare",     blurb: "Workers AI 边缘推理", homepage: "https://developers.cloudflare.com/workers-ai", region: "global" },
  { id: "cerebras",   name: "Cerebras",       blurb: "晶圆级芯片推理云", homepage: "https://cloud.cerebras.ai", region: "global" },
  { id: "nvidia",     name: "NVIDIA NIM",     blurb: "NVIDIA 托管的模型推理服务", homepage: "https://build.nvidia.com", region: "global" },
  { id: "azure",      name: "Microsoft Azure",blurb: "Azure for Students 与 AI Foundry", homepage: "https://azure.microsoft.com", region: "global" },
  { id: "gcloud",     name: "Google Cloud",   blurb: "GCP 新用户试用金与 Vertex AI", homepage: "https://cloud.google.com", region: "global" },
];

export const providerById = (id: string) => PROVIDERS.find((p) => p.id === id);
