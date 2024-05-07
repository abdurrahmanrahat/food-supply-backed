import config from '../../config';
import { UserModel } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createJwtToken } from './auth.utils';

// post
const loginUserIntoDb = async (payload: TLoginUser) => {
  // check if user already exists or not
  const existingUser = await UserModel.isUserExistsByEmail(payload.email);
  console.log(existingUser);
  if (!existingUser) {
    return Error('Invalid email');
  }

  // compare hashed password
  const isPasswordValid = await UserModel.isPasswordMatched(
    payload.password,
    existingUser.password,
  );
  if (!isPasswordValid) {
    return Error('Invalid password');
  }

  // Generate JWT token
  const jwtPayload = { email: existingUser?.email };
  const token = createJwtToken(
    jwtPayload,
    config.jwt_access_secret,
    config.jwt_access_expires_in,
  );

  return token;
};

export const AuthServices = {
  loginUserIntoDb,
};
