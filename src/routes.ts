import express from "express"

import { router as interestRouter } from "./route/interestRouter"

export const router = express.Router();

router.use("/api/interest", interestRouter);