"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="col-span-1 border-[0.5px] bg-white/5 flex items-center justify-center h-11 hover:bg-gradient-to-r hover:from-white/20 hover:to-transparent cursor-pointer">
          <MessageSquare />
        </button>
      </DialogTrigger>

      <DialogContent className="bg-[#0e0e0e] border sm:max-w-lg">
        <DialogHeader className="flex justify-between items-center mb-6">
          <DialogTitle className="text-2xl">Message</DialogTitle>
        </DialogHeader>

        <form
          action="https://submit-form.com/XV6uPk7Y0"
          method="POST"
          target="_blank"
          id="message-form"
          className="flex flex-col gap-4"
        >
          <textarea
            id="message"
            name="message"
            placeholder="Entrez votre message ici..."
            className="border focus:outline-none bg-transparent p-2 resize-none"
            rows={7}
            required
          />
          <button
            type="submit"
            className="border px-3 py-1 self-end cursor-pointer hover:bg-white/10 transition-colors duration-200"
          >
            Envoyer
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Contact;
