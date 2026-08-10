import { Router } from "express";

import linksRoutes from "./links.routes.js";

const router = Router();

router.use("/links", linksRoutes);

export default router;