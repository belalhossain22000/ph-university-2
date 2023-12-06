import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFacultyModel } from "./academicFaculty.model";

//create academic faculty
const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
    const result = await AcademicFacultyModel.create(payload);
    return result;
};

//get all academic faculty
const getAllAcademicFacultiesIntoDB = async () => {
    const faculties = await AcademicFacultyModel.find();
    return faculties;
};


//get single academic faculty by id
const getAcademicFacultyByIdIntoDB = async (facultyId: string) => {
    const faculty = await AcademicFacultyModel.findById(facultyId);
    return faculty;
};

//update academic faculty by id 
const updateAcademicFacultyIntoDB = async (facultyId: string, payload: TAcademicFaculty) => {
    const updatedFaculty = await AcademicFacultyModel.findByIdAndUpdate(facultyId, payload, { new: true });
    return updatedFaculty;
};

//delete academic faculty by id
const deleteAcademicFacultyIntoDB = async (facultyId: string) => {
    const deletedFaculty = await AcademicFacultyModel.findByIdAndDelete(facultyId);
    return deletedFaculty;
};

export const AcademicFacultyService = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultiesIntoDB,
    getAcademicFacultyByIdIntoDB,
    updateAcademicFacultyIntoDB,
    deleteAcademicFacultyIntoDB
};
