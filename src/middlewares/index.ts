import { NextFunction, Request, Response } from 'express';

const verifyField = async (req: Request, res: Response, next: NextFunction) => {
  if (!('username' in req.body)) {
    return res.status(400).json({ message: '"username" is required' }); 
  }

  if (!('password' in req.body)) {
    return res.status(400).json({ message: '"password" is required' }); 
  }

  next();
};

export default verifyField;
