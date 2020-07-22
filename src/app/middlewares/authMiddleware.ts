import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayloadIF {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ error: 'Unauthorized' });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = verify(token, 'secret');

    const { id } = data as TokenPayloadIF;

    request.userId = id;

    return next();
  } catch (error) {
    return response.status(400).json({ error });
  }
}
