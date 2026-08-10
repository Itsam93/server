import { Router } from "express";

import { linksService } from "../services/links.service";

const router = Router();

router.get("/:shortCode", (req, res) => {
  const link = linksService.findByCode(req.params.shortCode);

  if (!link) {
    return res.status(404).send("Link not found or has expired.");
  }

  return res.redirect(link.originalUrl);
});

export default router;