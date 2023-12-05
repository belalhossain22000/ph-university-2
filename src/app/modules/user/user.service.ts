import config from "../../config";
import { AcademicSemesterModel } from "../academincSemister/academicSemister.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserMOdel } from "./user.model";
import { generateStudentId } from "./user.utils";


const createStudentIntoDB = async (password: string, payload: TStudent) => {
    //create a user object
    const userData: Partial<TUser> = {}


    //if password not given use default password
    userData.password = password || config.default_password as string
    //set student role
    userData.role = 'student'
    //student generatedId

    const academicSemester = await AcademicSemesterModel.findById(payload.academicSemester)
    if (!academicSemester) {
        throw new Error("Not found any academicSemester")
    }
    userData.id = await generateStudentId(academicSemester)

    const newUser = await UserMOdel.create(userData)

    if (Object.keys(newUser).length) {
        payload.id = newUser.id
        payload.user = newUser._id   //reference _id
        const newStudent = await Student.create(payload)
        return newStudent
    }
}

export const UserServices = {
    createStudentIntoDB
}