import { Router } from "express";

import apiRoutes from "./api";
import redirectRoutes from "./redirect.routes";

const router = Router();

router.use("/api", apiRoutes);

router.use("/", redirectRoutes);

export default router;