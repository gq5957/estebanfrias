import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  canonicalPath?: string; // e.g. "/work"
  jsonLd?: Record<string, any>;
};

const SITE_URL = "https://www.estebanfrias.com";

function upsertMeta(name: string, content: string) {
  const key = `meta[name="${name}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(key);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertProperty(property: string, content: string) {
  const key = `meta[property="${property}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(key);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

function upsertJsonLd(obj: Record<string, any>) {
  const id = "jsonld-primary";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(obj);
}

export default function SEO({ title, description, canonicalPath, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const canonical = canonicalPath ? `${SITE_URL}${canonicalPath}` : SITE_URL;
    upsertCanonical(canonical);

    if (description) {
      upsertMeta("description", description);
      upsertProperty("og:description", description);
      upsertProperty("twitter:description", description);
    }

    upsertProperty("og:title", title);
    upsertProperty("twitter:title", title);
    upsertProperty("og:type", "website");
    upsertProperty("og:url", canonical);

    // keep your existing OG image
    upsertProperty("og:image", `${SITE_URL}/og-image.png`);
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:image", `${SITE_URL}/og-image.png`);

    if (jsonLd) upsertJsonLd(jsonLd);
  }, [title, description, canonicalPath, jsonLd]);

  return null;
}
