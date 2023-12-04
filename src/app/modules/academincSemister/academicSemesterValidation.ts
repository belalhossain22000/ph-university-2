import { z } from "zod";
import { AcademicSemesterCodeSchema, AcademicSemesterNameSchema, Months } from "./academicSemester.constant";


const createAcademicSemesterValidationSchema = z.object({
    body: z.object({
        name: z.enum([...AcademicSemesterNameSchema] as [string, ...string[]]),
        year: z.string(),
        code: z.enum([...AcademicSemesterCodeSchema] as [string, ...string[]]),
        startMonth: z.enum([...Months] as [string, ...string[]]),
        endMonth: z.enum([...Months] as [string, ...string[]]),
    })
})


export const AcademicSemesterValidation = {
    createAcademicSemesterValidationSchema
}