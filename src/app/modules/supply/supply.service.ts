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

const getSingleSupplyFromDB = async (id: string) => {
  const result = await Supply.findById(id);
  return result;
};

const deleteSupplyFromDB = async (id: string) => {
  const result = await Supply.findByIdAndDelete(id);
  return result;
};

export const SupplyServices = {
  createSupplyIntoDB,
  getAllSuppliesFromDB,
  getSingleSupplyFromDB,
  deleteSupplyFromDB,
};
