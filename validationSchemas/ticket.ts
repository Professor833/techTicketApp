import {z} from 'zod';

export const ticketSchema = z.object({
    title: z.string().min(1, "Title is required").max(255),
    description: z.string().min(1, "Description is required").max(655355),
    status: z.string().min(1, "Status is required").max(15).optional(),
    priority: z.string().min(1, "Priority is required").max(10).optional(),
})