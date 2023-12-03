import bcrypt from 'bcrypt';
import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import config from '../../config';

const userSchema = new Schema<TUser>({
    id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    needPasswordChange: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: ["admin", "faculty", "student"]
    },
    status: {
        type: String,
        enum: ["in-progress", "blocked", "Student"],
        default: "in-progress"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

// pre save middleware/ hook : will work on create()  save()
userSchema.pre('save', async function (next) {

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds),
    );
    next();
});

// post save middleware / hook
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});

export const UserMOdel = model<TUser>("User", userSchema)