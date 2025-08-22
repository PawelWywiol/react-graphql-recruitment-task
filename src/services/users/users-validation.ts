import z from 'zod';

const MIN_PASSWORD_LENGTH = 6;

export const loginUserPayloadSchema: z.ZodObject<
  {
    email: z.ZodEmail;
    password: z.ZodString;
  },
  z.core.$strip
> = z.object({
  email: z.email({ error: 'Invalid email address' }),
  password: z
    .string()
    .min(MIN_PASSWORD_LENGTH, { error: 'Password must be at least 6 characters long' }),
});

export type ValidLoginUserPayload = z.infer<typeof loginUserPayloadSchema>;
