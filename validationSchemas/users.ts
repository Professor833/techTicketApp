import {z} from 'zod';

export const userSchema = z.object({
    name: z.string().min(3, "name is too short").max(255, "name is too long"),
    username: z.string().min(3, "username is too short").max(255, "username is too long"),
    password: z.string()
    .min(6, "Password must be at least 6 characters long")
    .max(255, "Password is too long")
    .optional()
    .or(z.literal('')),
    role: z.string().min(3, "role is too short").max(50, "role is too long"),
});