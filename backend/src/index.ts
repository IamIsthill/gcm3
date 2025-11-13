import "dotenv/config";
import express from "express";
import cors from "cors";
import validateRequest from "zodware";

import { ENV } from "./config/env";
import { connectDb } from "./config/connect-db";
import { createAnswerValidator, TCreateAnswerValidator } from "./validators";
import { AnswerModel } from "./schema";
import { corsOptions } from "./config/cors";

(async function () {
  const app = express();

  app.use(cors(corsOptions));
  // app.options("*", cors(corsOptions));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ status: "Server running", date: new Date().toISOString() });
  });

  app.post(
    "/api/answers",
    validateRequest({ body: createAnswerValidator }),
    async (req, res, next) => {
      try {
        const payload = req.body as TCreateAnswerValidator;

        const saved = new AnswerModel({ answers: payload });
        await saved.save();

        res.status(201).json(saved);
      } catch (error) {
        next(error);
      }
    }
  );

  app.use(
    (
      err: Error,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      res.status(500).json({ message: err.message });
    }
  );

  app.listen(ENV.PORT, async () => {
    await connectDb();

    console.log("Server listening on", ENV.PORT);
  });
})();
