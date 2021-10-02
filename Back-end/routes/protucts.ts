import { Router,Request, Response } from "express";
import {ProductsController} from '../controller/products/productscontroller';

import multer from 'multer';
import multerConfig from '../config/multer';

const router = Router();
const upload = multer(multerConfig)


const productsController = new ProductsController();


router.get("/products",productsController.listAll)
router.post("/products",upload.single('imagem'),productsController.insertProdutos)
router.get("/products/:id/:nomeProduto",productsController.listunique)
router.put("/products/:id",productsController.putProdutos)
router.delete("/products/:id",productsController.deleteProdutos)

export { router };
