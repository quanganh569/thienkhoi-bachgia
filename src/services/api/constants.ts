const NEXT_PUBLIC_PRODUCTION_URL = process.env.NEXT_PUBLIC_PRODUCTION_URL || "";
const NEXT_PUBLIC_DEVELOPMENT_URL =
  process.env.NEXT_PUBLIC_DEVELOPMENT_URL || "";

const currentUrl = typeof window !== "undefined" ? window.location.href : "";
const developmentMode =
  currentUrl.includes("localhost") ||
  currentUrl.includes("127.0.0.1") ||
  currentUrl.includes("vercel") ||
  currentUrl.includes("staging");

const BASE_URL_STRAPI = developmentMode
  ? NEXT_PUBLIC_DEVELOPMENT_URL.replace(/^https:\/\//, "https://")
  : NEXT_PUBLIC_PRODUCTION_URL;

// remove in production
if (NEXT_PUBLIC_PRODUCTION_URL)
  if (currentUrl.includes(NEXT_PUBLIC_PRODUCTION_URL)) {
  }

// const BASE_URL_STRAPI = URL;

export default BASE_URL_STRAPI;
