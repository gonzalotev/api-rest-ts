import ItemModel from "../models/item";
import { Car } from "../interfaces/car.interface";

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseCars = await ItemModel.find({});
  return responseCars;
};

const getCar = async (id: string) => {
  const responseCar = await ItemModel.findOne({ _id: id });
  return responseCar;
};

const updateCar = async (id: string, data: Car) => {
  const responseCar = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseCar;
};

const deleteCar = async (id: string) => {
  const responseCar = await ItemModel.deleteOne({ _id: id });
  return responseCar;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
