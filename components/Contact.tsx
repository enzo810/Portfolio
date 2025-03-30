"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  CommentsSchema,
  CreateCommentFormSchema,
} from "../schemas/CommentFormSchema";
import { SendEmailFormSchema } from "../schemas/ContactFormSchema";
import { createComment, sendEmail } from "../server/server.action";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type ContactFormProps = {
  comments?: z.infer<typeof CommentsSchema>;
};

const Contact = ({ comments }: ContactFormProps) => {
  const contactForm = useForm<z.infer<typeof SendEmailFormSchema>>({
    resolver: zodResolver(SendEmailFormSchema),
    defaultValues: {
      email: "",
      object: "",
      message: "",
    },
  });

  const commentForm = useForm<z.infer<typeof CreateCommentFormSchema>>({
    resolver: zodResolver(CreateCommentFormSchema),
    defaultValues: {
      content: "",
    },
  });

  const { mutateAsync: sendEmailMutation, isPending: sendEmailPending } =
    useMutation({
      mutationFn: async (values: z.infer<typeof SendEmailFormSchema>) => {
        return await sendEmail(values);
      },
      onSuccess: (data) => {
        if (data?.data?.status === 201) {
          toast.success(data?.data?.message);
          contactForm.reset();
        }
        if (data?.serverError) {
          toast.error(data?.serverError);
        }
      },
    });

  const {
    mutateAsync: createCommentMutation,
    isPending: createCommentPending,
  } = useMutation({
    mutationFn: async (values: z.infer<typeof CreateCommentFormSchema>) => {
      return await createComment(values);
    },
    onSuccess: (data) => {
      console.log("data ", data);
      if (data?.data?.status === 201) {
        toast.success(data?.data?.message);
        commentForm.reset();
      }
      if (data?.serverError) {
        toast.error(data?.serverError);
      }
    },
  });

  function onSubmitEmail(values: z.infer<typeof SendEmailFormSchema>) {
    toast.promise(sendEmailMutation(values), {
      loading: "Envoie de l'email en cours...",
    });
  }

  function onSubmitComment(values: z.infer<typeof CreateCommentFormSchema>) {
    toast.promise(createCommentMutation(values), {
      loading: "Création du commentaire en cours...",
    });
  }

  return (
    <section className="flex flex-col lg:flex-row gap-8" id="contact">
      <Card className="p-8 flex-1">
        <p className="text-xl lg:text-3xl text-center font-bold text-neon mb-2 drop-shadow-neon">
          Contact
        </p>
        <p className="max-lg:text-sm text-center mb-5">
          Drop me a line, and we&apos;ll be in touch
        </p>

        <Form {...contactForm}>
          <form
            onSubmit={contactForm.handleSubmit(onSubmitEmail)}
            className="space-y-6 mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email Address*"
                        className=" border-[0.5px] border-foreground lg:h-14 text-foreground"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="object"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Object*"
                        className="border-[0.5px] border-foreground lg:h-14 text-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={contactForm.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Your Message*"
                      className="border-[0.5px] border-foreground text-foreground resize-none h-20 lg:h-40"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={sendEmailPending}
                variant="neon"
                size="xl"
              >
                <span>Send</span>
              </Button>
            </div>
          </form>
        </Form>
      </Card>
      <Card className="p-8 flex-1 flex flex-col">
        <p className="text-xl lg:text-3xl text-center font-bold text-neon mb-4 drop-shadow-neon">
          Comments
        </p>

        <Form {...commentForm}>
          <form
            onSubmit={commentForm.handleSubmit(onSubmitComment)}
            className="space-y-6 flex flex-col flex-grow h-full"
          >
            <Card className="border-[0.5px] border-foreground flex-grow p-2 overflow-y-auto h-20 lg:h-32">
              <div className="flex flex-col gap-2 text-xs">
                {comments && comments.length > 0 ? (
                  comments.map((comment) => (
                    <div key={comment.id} className="flex justify-between">
                      <p>{comment.content}</p>
                      <p>{format(new Date(comment.createdAt), "dd/MM")}</p>
                    </div>
                  ))
                ) : (
                  <p>No comments yet...</p>
                )}
              </div>
            </Card>

            <FormField
              control={commentForm.control}
              name="content"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Write your comment here"
                      className="border-[0.5px] border-foreground lg:h-14 text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={createCommentPending}
                variant="neon"
                size="xl"
              >
                <span>Send</span>
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </section>
  );
};

export default Contact;
