import { z } from 'zod';



const userVAlidationSchema = z.object({
    password: z.string(
        {
            invalid_type_error: "password must be string"
        }).max(20, { message: 'password cannot be more then 20 character' }).optional(),

})

export const UserValidation = {
    userVAlidationSchema
}