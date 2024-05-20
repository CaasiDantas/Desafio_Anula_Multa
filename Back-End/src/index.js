/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

routes(app)

app.listen(3002, () => {
    console.log("servidor iniciou");
});*/

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import swaggerUi from 'swagger-ui-express';
import setupSwagger from "./swagger.js"; //

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/swagger-api-doc", swaggerUi.serve, swaggerUi.setup())

setupSwagger(app)

routes(app);

app.listen(3002, () => {
    console.log("Servidor iniciou na porta 3002");
});
