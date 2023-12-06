import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartmentModel } from "./academicDepartment.model";

//create academic Department
const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
    const result = await AcademicDepartmentModel.create(payload);
    return result;
};

//get all academic Department
const getAllAcademicFacultiesIntoDB = async () => {
    const departments = await AcademicDepartmentModel.find();
    return departments;
};


//get single academic Department by id
const getAcademicDepartmentByIdIntoDB = async (departmentId: string) => {
    const department = await AcademicDepartmentModel.findById(departmentId);
    return department;
};

//update academic Department by id 
const updateAcademicDepartmentIntoDB = async (departmentId: string, payload: TAcademicDepartment) => {
    const updatedDepartment = await AcademicDepartmentModel.findByIdAndUpdate(departmentId, payload, { new: true });
    return updatedDepartment;
};

//delete academic Department by id
const deleteAcademicDepartmentIntoDB = async (departmentId: string) => {
    const deletedDepartment = await AcademicDepartmentModel.findByIdAndDelete(departmentId);
    return deletedDepartment;
};

export const AcademicDepartmentService = {
    createAcademicDepartmentIntoDB,
    getAllAcademicFacultiesIntoDB,
    getAcademicDepartmentByIdIntoDB,
    updateAcademicDepartmentIntoDB,
    deleteAcademicDepartmentIntoDB
};
