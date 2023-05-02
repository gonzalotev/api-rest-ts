import StorageModel from "../models/storage";
import { Storage } from "../interfaces/storage.interface";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseFile = await StorageModel.create({ fileName, idUser, path });
  return responseFile;
};

export { registerUpload };
