import { createTRPCRouter } from "../init";
import { registrationRouter } from "./registration.router";

export const appRouter = createTRPCRouter({
  registration: registrationRouter,
});

export type AppRouter = typeof appRouter;
