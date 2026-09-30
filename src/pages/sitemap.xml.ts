import type { APIRoute } from "astro";
import { EGGS } from "../data/eggs";
import { PROVIDERS } from "../data/providers";

const paths = [
  { loc: "/", priority: "1.0", freq: "daily" },
  { loc: "/eggs/", priority: "0.9", freq: "daily" },
  { loc: "/providers/", priority: "0.8", freq: "weekly" },
  { loc: "/daily/", priority: "0.8", freq: "daily" },
  { loc: "/submit/", priority: "0.6", freq: "monthly" },
  { loc: "/about/", priority: "0.5", freq: "monthly" },
  ...PROVIDERS.map((p) => ({ loc: "/providers/" + p.id + "/", priority: "0.6", freq: "weekly" })),
  ...EGGS.map((e) => ({ loc: "/eggs/" + e.id + "/", priority: "0.7", freq: "weekly" })),
];

/** 站点根地址来自 astro.config 的 site，这里不再硬编码域名。 */
export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL("https://freeeggs.xiruistar.cn")).href.replace(/\/+$/, "");

  const urls = paths
    .map((p) =>
      [
        "  <url>",
        "    <loc>" + base + p.loc + "</loc>",
        "    <changefreq>" + p.freq + "</changefreq>",
        "    <priority>" + p.priority + "</priority>",
        "  </url>",
      ].join("\n")
    )
    .join("\n");

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls +
    "\n</urlset>\n";

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
