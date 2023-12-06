import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentService } from "./academicDepartment.service";

const createAcademicDepartmentIntoDB = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentService.createAcademicDepartmentIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department is Created successfully",
        data: result
    });
});

const getAllAcademicDepartmentIntoDB = catchAsync(async (req, res) => {
    const departments = await AcademicDepartmentService.getAllAcademicFacultiesIntoDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All Academic Faculties fetched successfully",
        data: departments
    });
});

const getAcademicDepartmentByIdIntoDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const department = await AcademicDepartmentService.getAcademicDepartmentByIdIntoDB(id);
    if (!department) {
        sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "Academic Department not found",
            data: null
        });
        return;
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department fetched successfully",
        data: department
    });
});

const updateAcademicDepartmentIntoDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AcademicDepartmentService.updateAcademicDepartmentIntoDB(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department updated successfully",
        data: result
    });
});

const deleteAcademicDepartmentIntoDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AcademicDepartmentService.deleteAcademicDepartmentIntoDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department deleted successfully",
        data: result
    });
});

export const AcademicDepartmentController = {
    createAcademicDepartmentIntoDB,
    getAllAcademicDepartmentIntoDB,
    getAcademicDepartmentByIdIntoDB,
    updateAcademicDepartmentIntoDB,
    deleteAcademicDepartmentIntoDB
};
