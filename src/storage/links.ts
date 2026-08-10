import type { Link } from "../types/link.js";

export const links = new Map<string, Link>();

export function findByShortCode(code: string) {
  for (const link of links.values()) {
    if (link.shortCode === code) {
      return link;
    }
  }

  return null;
}