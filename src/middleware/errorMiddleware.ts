import type {
  NextFunction,
  Request,
  Response,
} from "express";

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  res.status(500).json({
    success: false,

    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error."
        : error.message,
  });
}