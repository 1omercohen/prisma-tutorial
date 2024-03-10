import z from "zod";

const commonValidation = {
    email: z
        .string({
            required_error: "Email is required",
        })
        .email("Not a valid email"),
    password: z
        .string({
            required_error: "Password is required",
            invalid_type_error: "Password must be a string",
        })
        .refine((pass) => pass.length >= 8, {
            message: "Password must be atleast 8 characters long",
        })
        .refine((pass) => /[A-Z]/.test(pass), {
            message: "Password must contain atleast one uppercase letter",
        })
        .refine((pass) => /[a-z]/.test(pass), {
            message: "Password must contain atleast one lowercase letter",
        })
        .refine((pass) => /\d/.test(pass), {
            message: "Password must container atleast one digit",
        })
        .refine((pass) => /\W_/.test(pass), {
            message: "Password must contain atleast one special character",
        }),
};
export const registerSchema = z.object({
    body: z.object({
        ...commonValidation,
        first_name: z.string({
            required_error: "First name is required",
        }),
        last_name: z.string({
            required_error: "Last name is required",
        }),
    }),
});

export const loginSchema = z.object({
    body: z.object(commonValidation),
});

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Title is required",
    }),
    discription: z.string({
        required_error: "Discription is required",
    }),
});

export const taskCommonSchema = z.object({
    params: z.object({
        id: z.string({
            required_error: "id is required",
        }),
    }),
});
