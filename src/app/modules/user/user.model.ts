import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// check user exists or not
userSchema.statics.isUserExistsByEmail = async function (email: string) {
  const existingUser = await UserModel.findOne({ email });
  return existingUser;
};

// check for password matched
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  const isPasswordValid = await bcrypt.compare(
    plainTextPassword,
    hashedPassword,
  );

  return isPasswordValid;
};

// model
export const UserModel = model<TUser>('User', userSchema);
