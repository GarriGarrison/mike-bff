import type { NextFunction, Request, Response } from 'express'
import { CustomError } from '../errors/custom-errors'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.serializeError())
  }

  res.status(500).json({ message: 'Internal server error' })
}
