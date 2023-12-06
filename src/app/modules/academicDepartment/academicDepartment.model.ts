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

//check before posting data is exist or not exist
academicDepartmentSchema.pre("save", async function (next) {
    const isDepartmentExist = await AcademicDepartmentModel.findOne({ name: this.name })

    if (isDepartmentExist) {
        throw new Error("Department  is Already Exist")
    }
    next()
})

//check before update data is exist or not exist
academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
    const query = this.getQuery()
    const isDepartmentExist = await AcademicDepartmentModel.findOne(query)

    if (!isDepartmentExist) {
        throw new Error("Department  Dose not Exist")
    }
    next()
})

export const AcademicDepartmentModel = model<TAcademicDepartment>("Academic-Department", academicDepartmentSchema)