import z from "zod";

export const loginSchema = z.object({
  email: z.email("Email tidak valid"),
  password: z.string(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
