import type { APIRoute } from "astro";
import { EGGS } from "../data/eggs";
import { DIGESTS } from "../data/digests";
import { SITE } from "../data/site";

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const pub = (iso: string) => new Date(iso + "T09:00:00+08:00").toUTCString();

/** 站点根地址来自 astro.config 的 site，这里不再硬编码域名。 */
export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL("https://freeeggs.xiruistar.cn")).href.replace(/\/+$/, "");

  const eggItems = [...EGGS]
    .sort((a, b) => b.addedAt.localeCompare(a.addedAt))
    .map((e) => {
      const desc =
        e.summary + " ｜ 面值：" + e.valueText + " ｜ 地区：" + e.region +
        " ｜ 核验：" + (e.verifiedAt ?? "未核验");
      return [
        "    <item>",
        "      <title>" + esc("[新蛋] " + e.title) + "</title>",
        "      <link>" + base + "/eggs/" + e.id + "</link>",
        '      <guid isPermaLink="false">freeeggs-egg-' + e.id + "</guid>",
        "      <pubDate>" + pub(e.addedAt) + "</pubDate>",
        "      <description>" + esc(desc) + "</description>",
        "    </item>",
      ].join("\n");
    });

  const digestItems = DIGESTS.map((d) =>
    [
      "    <item>",
      "      <title>" + esc("[蛋报] " + d.title) + "</title>",
      "      <link>" + base + "/daily#" + d.date + "</link>",
      '      <guid isPermaLink="false">freeeggs-digest-' + d.date + "</guid>",
      "      <pubDate>" + pub(d.date) + "</pubDate>",
      "      <description>" + esc(d.items.join(" ")) + "</description>",
      "    </item>",
    ].join("\n")
  );

  const items = digestItems.concat(eggItems).join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    "    <title>" + esc(SITE.name + " · " + SITE.tagline) + "</title>",
    "    <link>" + base + "</link>",
    "    <description>" + esc(SITE.description) + "</description>",
    "    <language>zh-CN</language>",
    '    <atom:link href="' + base + '/rss.xml" rel="self" type="application/rss+xml" />',
    "    <lastBuildDate>" + new Date().toUTCString() + "</lastBuildDate>",
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=1800",
    },
  });
};
