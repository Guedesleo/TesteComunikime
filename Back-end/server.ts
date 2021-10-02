import express from "express";
import { router } from "./routes/protucts";
import path from 'path';
import {errors} from 'celebrate';
import cors from 'cors';


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use(router);

app.use('/uploads', express.static(path.resolve(__dirname ,'uploads')));

app.use(errors());

app.listen(3333, () => console.log("Server is running http://localhost:3333"));
