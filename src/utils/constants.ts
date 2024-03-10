export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
export const JWT_COOKIE_EXPIRES_IN = parseInt(
    process.env.JWT_COOKIE_EXPIRES_IN as string
);
