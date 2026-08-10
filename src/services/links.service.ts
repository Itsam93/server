import { randomUUID } from "crypto";

import { findByShortCode, links } from "../storage/links.js";
import { generateCode } from "../utils/generateCode.js";
import { isExpired } from "../utils/isExpired.js";

const EXPIRATION_DAYS = 7;

export class LinksService {
  create(
    originalUrl: string,
    alias?: string
  ) {
    const now = new Date();

    const expiresAt = new Date(now);
    expiresAt.setDate(
      expiresAt.getDate() + EXPIRATION_DAYS
    );

    let shortCode = alias?.trim();

    if (shortCode) {
      const existing = findByShortCode(shortCode);

      if (existing && !isExpired(existing.expiresAt)) {
        throw new Error(
          "That custom alias is already in use."
        );
      }
    } else {
      do {
        shortCode = generateCode();
      } while (findByShortCode(shortCode));
    }

    const link = {
      id: randomUUID(),

      originalUrl,

      shortCode,

      createdAt: now,

      expiresAt,
    };

    links.set(link.id, link);

    return link;
  }

  getAll() {
    return [...links.values()];
  }

  findByCode(shortCode: string) {
    const link = findByShortCode(shortCode);

    if (!link) {
      return null;
    }

    if (isExpired(link.expiresAt)) {
      return null;
    }

    return link;
  }
}

export const linksService = new LinksService();