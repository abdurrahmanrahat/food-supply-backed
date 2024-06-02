import { TSupply } from './supply.interface';
import { Supply } from './supply.model';

const createSupplyIntoDB = async (payload: TSupply) => {
  const result = await Supply.create(payload);
  return result;
};

const getAllSuppliesFromDB = async () => {
  const result = await Supply.find();
  return result;
};

export const SupplyServices = {
  createSupplyIntoDB,
  getAllSuppliesFromDB,
};
