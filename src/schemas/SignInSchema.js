import z from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email")
    .toLowerCase(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});