import type { APIRoute } from "astro";
import { EGGS, EGGS_UPDATED_AT } from "../data/eggs";
import { PROVIDERS } from "../data/providers";
import { CATEGORIES, STATUS_META, DIFFICULTY, REGIONS, CONFIDENCE, SITE } from "../data/site";

/**
 * 开放数据接口：/eggs.json
 * 想拿去做看板、写进周报、训练个小模型都随意，注明来源即可。
 */
export const GET: APIRoute = () => {
  const payload = {
    generatedAt: new Date().toISOString(),
    site: {
      name: SITE.name,
      latin: SITE.latin,
      tagline: SITE.tagline,
      license: SITE.license,
    },
    catalogUpdatedAt: EGGS_UPDATED_AT,
    count: EGGS.length,
    vocab: {
      categories: CATEGORIES,
      statuses: STATUS_META,
      difficulty: DIFFICULTY,
      regions: REGIONS,
      confidence: CONFIDENCE,
    },
    providers: PROVIDERS,
    eggs: [...EGGS].sort((a, b) => b.addedAt.localeCompare(a.addedAt)),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=1800",
    },
  });
};
