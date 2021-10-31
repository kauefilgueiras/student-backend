import "reflect-metadata";
import  express from "express";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import cors from 'cors';
import routes from "./routes";

const app = express()
createConnection()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(process.env.PORT || 8888, () => {
    console.log('Servidor em Execução');
  });
  