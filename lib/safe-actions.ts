import { createSafeActionClient } from "next-safe-action";

export class ActionError extends Error {}

export const actionClient = createSafeActionClient({
  handleServerError(e) {
    if (e instanceof ActionError) {
      return e.message;
    }
    return "Une erreur est survenue";
  },
});
