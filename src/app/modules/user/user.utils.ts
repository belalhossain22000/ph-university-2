import { TAcademicSemester } from "../academincSemister/academicSemister.interface";
import { UserMOdel } from "./user.model";

const findLastStudent = async () => {
    const lastStudent = await UserMOdel.findOne(
        { role: 'student' },
        { id: 1, _id: 0 }
    ).sort({ createdAt: -1 }).lean()
    return lastStudent?.id ? lastStudent?.id : undefined
}


export const generateStudentId = async (payload: TAcademicSemester) => {

    let currentId = (0).toString()
    const lastStudentId = await findLastStudent()
    const lastStudentSemesterCode = lastStudentId?.substring(4, 6)
    const lastStudentSemesterYear = lastStudentId?.substring(0, 4)
    const currentSemesterCode = payload.code;
    const currentYear = payload.year
    if (lastStudentId && lastStudentSemesterCode === currentSemesterCode && lastStudentSemesterYear === currentYear) {
        currentId = lastStudentId?.substring(6)
    }
    let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
    incrementId = `${payload.year}${payload.code}${incrementId}`
    return incrementId
}