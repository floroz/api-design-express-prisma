import { Request, Response } from "express";
import { prisma } from "../db";

const findAll = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      include: {
        products: true,
      },
    });

    if (!user || !user?.products) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    return res.json({ products: user.products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const findById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    return res.json({ data: product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const create = async (req: Request<{}, { name: string }>, res: Response) => {
  try {
    const { name } = req.body;

    const product = await prisma.product.create({
      data: {
        name,
        userId: req.user.id,
      },
    });

    if (!product) {
      throw new Error("Something went wrong while creating the user");
    }

    return res.status(201).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
const update = async (
  req: Request<{ id: string }, { name: string }>,
  res: Response
) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    console.log(product, req.params.id, req.user.id);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    const updated = await prisma.product.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
      },
    });

    return res.json(updated);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    const deleted = await prisma.product.delete({
      where: {
        id: req.params.id,
      },
    });

    return res.json(deleted);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const productHandler = {
  findAll,
  findById,
  create,
  update,
  delete: deleteById,
};
