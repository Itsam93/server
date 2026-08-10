import { env } from "../config/env";

export function buildShortUrl(code: string) {
  return `${env.APP_URL}/${code}`;
}