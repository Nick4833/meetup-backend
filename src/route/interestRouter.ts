import express from "express";
import {
  createInterest,
  deleteInterest,
  getAllInterests,
  getOneInterest,
  updateInterest,
} from "../controller/interestController";
import { body } from "express-validator";

export const router = express.Router();

router.get("/", getAllInterests);

router.get("/:id", getOneInterest);

router.post(
  "/",
  body("name").not().isEmpty().trim().escape(),
  body("imageUrl").not().isEmpty().trim().escape(),
  createInterest
);

router.put(
  "/:id",
  body("name").not().isEmpty().trim().escape(),
  body("imageUrl").not().isEmpty().trim().escape(),
  updateInterest
);

router.delete("/:id", deleteInterest);
