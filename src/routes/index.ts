import { Router } from "express";

import apiRoutes from "./api/index.js";
import redirectRoutes from "./redirect.routes.js";

const router = Router();

router.use("/api", apiRoutes);

router.use("/", redirectRoutes);

export default router;