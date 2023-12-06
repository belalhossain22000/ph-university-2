import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyService } from "./academicFaculty.service";

const createAcademicFacultyIntoDB = catchAsync(async (req, res) => {
    const result = await AcademicFacultyService.createAcademicFacultyIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty is Created successfully",
        data: result
    });
});

const getAllAcademicFacultiesIntoDB = catchAsync(async (req, res) => {
    const faculties = await AcademicFacultyService.getAllAcademicFacultiesIntoDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All Academic Faculties fetched successfully",
        data: faculties
    });
});

const getAcademicFacultyByIdIntoDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const faculty = await AcademicFacultyService.getAcademicFacultyByIdIntoDB(id);
    if (!faculty) {
        sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "Academic Faculty not found",
            data: null
        });
        return;
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty fetched successfully",
        data: faculty
    });
});

const updateAcademicFacultyIntoDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AcademicFacultyService.updateAcademicFacultyIntoDB(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty updated successfully",
        data: result
    });
});

const deleteAcademicFacultyIntoDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AcademicFacultyService.deleteAcademicFacultyIntoDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty deleted successfully",
        data: result
    });
});

export const AcademicFacultyController = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultiesIntoDB,
    getAcademicFacultyByIdIntoDB,
    updateAcademicFacultyIntoDB,
    deleteAcademicFacultyIntoDB
};
