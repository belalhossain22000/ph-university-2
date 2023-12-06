import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";



const academicDepartmentSchema = new Schema<TAcademicDepartment>({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    academicFaculty: {
        type: Schema.Types.ObjectId,
        ref: "AcademicFaculty"
    }
}, {
    timestamps: true
})

export const AcademicDepartmentModel = model<TAcademicDepartment>("Academic-Department", academicDepartmentSchema)