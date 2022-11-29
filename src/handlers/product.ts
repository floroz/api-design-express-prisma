import { User } from "@prisma/client";
import { RequestHandler } from "express";
import { prisma } from "../db";

export const getProductHandler: RequestHandler = async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    return res.json({ product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createProductHandler: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body;
    const { user } = req as any as { user: User };

    if (!user) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    const product = await prisma.product.create({
      data: {
        name,
        userId: user.id,
      },
    });

    if (!product) {
      throw new Error("Something went wrong while creating the user");
    }

    return res.status(201).json({ product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
