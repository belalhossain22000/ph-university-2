import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { AcademicDepartmentValidation } from "./academicDepartment.validation";
import { AcademicDepartmentController } from "./academicDepartment.controller";

const router = Router();

//post 
router.post(
    "/create-academic-department",
    validateRequest(AcademicDepartmentValidation.createAcademicDepartmentValidationSchema),
    AcademicDepartmentController.createAcademicDepartmentIntoDB
);

//get all
router.get("/get-all-academic-departments", AcademicDepartmentController.getAllAcademicDepartmentIntoDB);


//get single
router.get("/get-academic-department/:id", AcademicDepartmentController.getAcademicDepartmentByIdIntoDB);


//update single
router.put(
    "/update-academic-department/:id",
    validateRequest(AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema),
    AcademicDepartmentController.updateAcademicDepartmentIntoDB
);


//delete single
router.delete("/delete-academic-department/:id", AcademicDepartmentController.deleteAcademicDepartmentIntoDB);

export const AcademicDepartmentRoutes = router;
