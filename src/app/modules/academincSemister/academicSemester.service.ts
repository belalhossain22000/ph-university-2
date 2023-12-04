import { TAcademicSemester } from "./academicSemister.interface";
import { AcademicSemesterModel } from "./academicSemister.model";



const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {

    type TAcademicSemesterNameCodeMapper = {
        [key: string]: string
    }

    const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
        Autumn: '01',
        Summer: '02',
        Fall: '03'
    }

    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid semester code")
    }

    const result = await AcademicSemesterModel.create(payload)
    return result
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB
} 