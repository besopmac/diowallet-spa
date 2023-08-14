import z from 'zod';

export const transactionSchema = z.object({
  value: z
    .string()
    .min(3, "Value must be at least 3 characters")
    .transform((value) => Number(value)),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters"),
});