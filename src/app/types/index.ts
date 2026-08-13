type Role = "ADMIN" | "CUSTOMER"; 

interface AuthUser{
    id: string;
    role: Role
    email: string;
}

export type {AuthUser}

interface ErrorResponse {
    status: number;
    message: string;
    stack?: string;
    error?: string;
}
export type {ErrorResponse}