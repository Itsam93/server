import type {
  Request,
  Response,
  NextFunction,
} from "express";

export function notFoundMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next();
  }

  res.status(404).json({
    success: false,

    message: `Route '${req.originalUrl}' not found.`,
  });
}