import { AuthUser } from ".."

declare global {
    namespace Express {
        interface Request {
            user: AuthUse;
        }
    }
}

export {}