import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";
import { AcademicFacultyController } from "./academicFaculty.controller";


const router = Router()

router.post("/create-academic-faculty", validateRequest(AcademicFacultyValidation.createAcademicFacultyValidationSchema), AcademicFacultyController.createAcademicFaculty)


export const AcademicFacultyRoutes = router