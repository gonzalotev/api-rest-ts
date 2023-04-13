import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "already user";
  const registerNewUser = await UserModel.create({ email, password, name });
  return registerNewUser;
};

const loginUser = async () => {};

export { registerNewUser, loginUser };
