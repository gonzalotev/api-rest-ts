import ItemModel from "../models/item";
import { Car } from "../interfaces/car.interface";

const getOrders = async () => {
  const responseCars = await ItemModel.find({});
  return responseCars;
};

export { getOrders };
