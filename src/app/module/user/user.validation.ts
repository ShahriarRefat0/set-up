import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(4).max(20),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const UserValidation = {
  userSchema,
};

export default userSchema;
