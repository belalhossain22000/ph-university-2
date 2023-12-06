import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";
import { AcademicFacultyController } from "./academicFaculty.controller";

const router = Router();

//post 
router.post(
    "/create-academic-faculty",
    validateRequest(AcademicFacultyValidation.createAcademicFacultyValidationSchema),
    AcademicFacultyController.createAcademicFacultyIntoDB
);

//get all
router.get("/get-all-academic-faculties", AcademicFacultyController.getAllAcademicFacultiesIntoDB);


//get single
router.get("/get-academic-faculty/:id", AcademicFacultyController.getAcademicFacultyByIdIntoDB);


//update single
router.put(
    "/update-academic-faculty/:id",
    validateRequest(AcademicFacultyValidation.updateAcademicFacultyValidationSchema),
    AcademicFacultyController.updateAcademicFacultyIntoDB
);


//delete single
router.delete("/delete-academic-faculty/:id", AcademicFacultyController.deleteAcademicFacultyIntoDB);

export const AcademicFacultyRoutes = router;
