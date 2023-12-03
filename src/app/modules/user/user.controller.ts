import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";


const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, studentData, } = req.body
        const result = await UserServices.createStudentIntoDB(password, studentData)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Student is created successfully',
            data: result,
        });
    } catch (error) {
        next(error)

    }
}

export const UserControllers = {
    createStudent
}