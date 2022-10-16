import { Request, Response } from "express";
import { errorHandle } from "../utils/utilFunctions";
import { validationResult } from "express-validator";
import { Interest } from "../entity/Interest";

export const getAllInterests = async (req: Request, res: Response) => {
  const interests = await Interest.find();
  return res.status(200).send(interests);
};

export const getOneInterest = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const interest = await Interest.findOneOrFail({
      where: {
        id: id,
      },
    });
    return res.status(200).send(interest);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

export const createInterest = async (req: Request, res: Response) => {
  try {
    const { name, imageUrl } = req.body;
    const errors = validationResult(req);
    errorHandle(errors);
    const interest = new Interest();
    interest.name = name;
    interest.imageUrl = imageUrl;
    await Interest.save(interest);
    return res.status(200).send("Interest created successfully.");
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

export const updateInterest = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, imageUrl } = req.body;
    const errors = validationResult(req);
    errorHandle(errors);
    Interest.update(id, {
      name: name,
      imageUrl: imageUrl,
    });
    return res.status(200).send("Interest updated successfully.");
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

export const deleteInterest = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await Interest.delete({
      id: id
    });
    return res.status(200).send("Interest deleted successfully.");
  } catch (err) {
    return res.status(500).send(err);
  }
};
