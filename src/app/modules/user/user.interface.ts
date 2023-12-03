
export type TUser = {
    id: string;
    password: string;
    needPasswordChange: boolean;
    role: 'admin' | 'student' | 'faculty';
    status: 'block' | 'in-progress';
    isDeleted: boolean

}

// export type NewUser = {
//     password: string,
//     role: string,
//     id: string
// }