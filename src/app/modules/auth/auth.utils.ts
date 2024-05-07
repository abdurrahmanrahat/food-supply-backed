import jwt from 'jsonwebtoken';

export const createJwtToken = (jwtPayload, secret, expiresIn) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
