export class ErrorResponse extends Error {
    statusCode: number;
    status: string;
    isOperational: boolean;
    reasons?: string[];
    constructor(message: string, statusCode: number, reasons?: string[]) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        if (reasons && reasons.length > 0) {
            this.reasons = reasons;
        }
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}
