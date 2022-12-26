import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../auth/jwt';

export const checksLoginRequestFields = async (req: Request, res: Response, next: NextFunction) => {
  if (!('username' in req.body)) {
    return res.status(400).json({ message: '"username" is required' }); 
  }

  if (!('password' in req.body)) {
    return res.status(400).json({ message: '"password" is required' }); 
  }

  next();
};

export const checksNameField = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  if (typeof name !== 'string') return res.status(422).json({ message: '"name" must be a string' });

  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
};

export const checksAmountField = async (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;

  if (!amount) return res.status(400).json({ message: '"amount" is required' });

  if (typeof amount !== 'string') { 
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  
  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }

  next();
};

export const checksUserNameField = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (!username) return res.status(400).json({ message: '"username" is required' });

  if (typeof username !== 'string') { 
    return res.status(422).json({ message: '"username" must be a string' });
  }
  
  if (username.length < 3) {
    return res.status(422).json({
      message: '"username" length must be at least 3 characters long',
    });
  }

  next();
};

export const checksVocationField = async (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;

  if (!vocation) return res.status(400).json({ message: '"vocation" is required' });

  if (typeof vocation !== 'string') { 
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  
  if (vocation.length < 3) {
    return res.status(422).json({
      message: '"vocation" length must be at least 3 characters long',
    });
  }

  next();
};

export const checksLevelField = async (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (level < 1) {
    return res.status(422).json({
      message: '"level" must be greater than or equal to 1',
    });
  }
  
  if (!level) return res.status(400).json({ message: '"level" is required' });

  if (typeof level !== 'number') { 
    return res.status(422).json({ message: '"level" must be a number' });
  }

  next();
};

export const checksPasswordField = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: '"password" is required' });

  if (typeof password !== 'string') { 
    return res.status(422).json({ message: '"password" must be a string' });
  }
  
  if (password.length < 8) {
    return res.status(422).json({
      message: '"password" length must be at least 8 characters long',
    });
  }

  next();
};

export const checksProductsIdsField = async (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  if (!productsIds) return res.status(400).json({ message: '"productsIds" is required' });

  if (!(Array.isArray(productsIds))) { 
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  
  if (productsIds.length < 1) {
    return res.status(422).json({
      message: '"productsIds" must include only numbers',
    });
  }

  next();
};

export const verifyTokenMiddleware = (
  req: Request,
  res: Response, 
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const { id } = verifyToken(authorization);
    req.body.userId = id;
    return next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
