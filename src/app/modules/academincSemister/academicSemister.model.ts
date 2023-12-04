import { Schema, model } from "mongoose";
import { TAcademicSemester, } from "./academicSemister.interface";
import { AcademicSemesterCodeSchema, AcademicSemesterNameSchema, Months } from "./academicSemester.constant";


const AcademicSemesterSchema = new Schema<TAcademicSemester>({
    name: {
        type: String,
        enum: AcademicSemesterNameSchema,
        required: true
    },
    code: {
        type: String,
        enum: AcademicSemesterCodeSchema,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    startMonth: {
        type: String,
        enum: Months,
        required: true
    },
    endMonth: {
        type: String,
        enum: Months,
        required: true
    }

},
    {
        timestamps: true
    }
)

AcademicSemesterSchema.pre("save", async function (next) {
    const isSemesterExist = await AcademicSemesterModel.findOne({
        year: this.year,
        name: this.name
    })
    if (isSemesterExist) {
        throw new Error("Semester is already exist")
    }
    next()
})


export const AcademicSemesterModel = model<TAcademicSemester>("AcademicSemester", AcademicSemesterSchema)