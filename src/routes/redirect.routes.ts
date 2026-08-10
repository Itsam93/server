import { Router } from "express";

import { linksService } from "../services/links.service.js";

const router = Router();

router.get("/:shortCode", (req, res) => {
  const { shortCode } = req.params;

  const link = linksService.findByCode(shortCode);

  if (!link) {
    return res.status(404).json({
      success: false,
      message: "Short link not found or expired.",
    });
  }

  return res.redirect(link.originalUrl);
});

export default router;