import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    answers: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export type Answer = mongoose.InferSchemaType<typeof schema>;

export const AnswerModel = mongoose.model("Answer", schema);
