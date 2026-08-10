import type { Request, Response } from "express";

import { linksService } from "../services/links.service.js";
import { buildShortUrl } from "../utils/buildShortUrl.js";

class LinksController {
  create(req: Request, res: Response) {
    try {
      const { url, alias } = req.body;

      const link = linksService.create(url, alias);

      return res.status(201).json({
        success: true,
        data: {
          id: link.id,
          originalUrl: link.originalUrl,
          shortCode: link.shortCode,
          shortUrl: buildShortUrl(link.shortCode),
          createdAt: link.createdAt,
          expiresAt: link.expiresAt,
        },
      });
    } catch (error) {
      return res.status(409).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to create short link.",
      });
    }
  }

  getAll(_req: Request, res: Response) {
    const data = linksService.getAll().map((link) => ({
      id: link.id,
      originalUrl: link.originalUrl,
      shortCode: link.shortCode,
      shortUrl: buildShortUrl(link.shortCode),
      createdAt: link.createdAt,
      expiresAt: link.expiresAt,
    }));

    return res.status(200).json({
      success: true,
      data,
    });
  }
}

export const linksController = new LinksController();