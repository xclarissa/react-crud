export interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user";
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
