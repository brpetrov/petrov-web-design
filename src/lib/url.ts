// GitHub Pages serves this site under /petrov-web-design/, so asset URLs and
// internal links must be prefixed with the configured base. Cloudflare serves
// at the root, where BASE_URL is "/".
export const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + "/";

export const withBase = (path: string): string => base + path.replace(/^\//, "");
