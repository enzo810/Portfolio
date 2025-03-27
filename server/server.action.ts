"use server";

import { prisma } from "@/lib/prisma";
import { actionClient, ActionError } from "@/lib/safe-actions";
import {
  CommentsSchema,
  CreateCommentFormSchema,
} from "@/schemas/CommentFormSchema";
import { revalidatePath } from "next/cache";
import { SendEmailFormSchema } from "../schemas/ContactFormSchema";

export const sendEmail = actionClient
  .schema(SendEmailFormSchema)
  .action(async ({ parsedInput: values }) => {
    try {
      const response = await fetch("https://submit-form.com/ox4vs0MtK", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          subject: values.object,
          message: values.message,
        }),
      });

      if (response.ok) {
        return {
          status: 201,
          message: "L'email a été envoyé avec succès",
        };
      } else {
        throw new Error();
      }
    } catch {
      throw new ActionError(
        "Une erreur est surevenue lors de l'envoie de l'email"
      );
    }
  });

export const createComment = actionClient
  .schema(CreateCommentFormSchema)
  .action(async ({ parsedInput: values }) => {
    try {
      const comment = await prisma.comment.create({
        data: values,
      });

      if (comment) {
        revalidatePath("/");
        return {
          message: "Le commentaire a bien été crée",
          status: 201,
        };
      }
    } catch {
      throw new ActionError(
        "Une erreur est survenue lors de la création du commentaire"
      );
    }
  });

export const getComments = actionClient.action(async () => {
  const comments = await prisma.comment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  try {
    return {
      comments: CommentsSchema.parse(comments),
      message: "Les commentaires ont été récupérés avec succès",
      status: 200,
    };
  } catch {
    throw new ActionError(
      "Une erreur est survenue lors de la récupération des commentaires"
    );
  }
});
