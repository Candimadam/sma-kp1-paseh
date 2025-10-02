import z from "zod";

export const registerSchema = z
  .object({
    name: z.string(),
    email: z.email("Email tidak valid"),
    password: z.string().min(8, "Minimal 8 karakter"),
    confirmPassword: z.string().min(8, "Minimal 8 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
