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

    const currentId = (0).toString()
    const lastStudentId = await findLastStudent()
    if (lastStudentId) {

    }
    let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
    incrementId = `${payload.year}${payload.code}${incrementId}`
    return incrementId
}