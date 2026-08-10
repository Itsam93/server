import { Router } from "express";

import { linksController } from "../../controllers/links.controller";

const router = Router();

router.post("/", linksController.create);

router.get("/", linksController.getAll);

export default router;