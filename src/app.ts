import express from "express";
import cors from "cors";

import routes from "./routes";

import {
  errorMiddleware,
} from "./middleware/errorMiddleware";

import {
  notFoundMiddleware,
} from "./middleware/notFoundMiddleware";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;