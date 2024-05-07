import { Model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  password: string;
};

// creating custom statics method
export interface UserStaticModel extends Model<TUser> {
  isUserExistsByEmail(id: string): Promise<TUser | null>;
}
