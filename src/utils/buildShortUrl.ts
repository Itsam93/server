import { env } from "../config/env.js";

export function buildShortUrl(code: string) {
  return `${env.APP_URL}/${code}`;
}