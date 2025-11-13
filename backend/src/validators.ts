import { z } from "zod";

export const createAnswerValidator = z.object({
  Q1: z.enum(["1", "2", "3", "4", "5"]),
  Q2: z.enum(["1", "2", "3", "4", "5"]),
  Q3: z.enum(["1", "2", "3", "4", "5"]),
});
export type TCreateAnswerValidator = z.infer<typeof createAnswerValidator>;
