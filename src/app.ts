import express from "express";
import cors from "cors";

import routes from "./routes/index.js";

import {
  errorMiddleware,
} from "./middleware/errorMiddleware.js";

import {
  notFoundMiddleware,
} from "./middleware/notFoundMiddleware.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://myspace-frontend-one.vercel.app",
    ],
    methods: [
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS",
    ],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(routes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;