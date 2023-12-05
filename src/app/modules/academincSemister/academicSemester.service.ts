import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemister.interface";
import { AcademicSemesterModel } from "./academicSemister.model";



const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {





    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid semester code")
    }

    const result = await AcademicSemesterModel.create(payload)
    return result
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB
} 