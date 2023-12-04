
import express from "express"
import { AcademicSemesterControllers } from "./academicSemester.controller"
import validateRequest from "../../utils/validateRequest"
import { AcademicSemesterValidation } from "./academicSemesterValidation"
const router = express.Router()

router.post("/create-academic-semester", validateRequest(AcademicSemesterValidation.createAcademicSemesterValidationSchema), AcademicSemesterControllers.createAcademicSemester)

export const AcademicSemesterRoutes = router