import { z } from "zod";

export const CreateCommentFormSchema = z.object({
  content: z
    .string()
    .min(3, { message: "min 3 caracters" })
    .max(25, { message: "max 25 caracters" }),
});

export const CommentsSchema = z.array(
  z.object({
    content: z.string(),
    id: z.number(),
    createdAt: z.date(),
  })
);
