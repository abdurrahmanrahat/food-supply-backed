import QueryBuilder from '../../builder/QuetyBuilder';
import { supplySearchableFields } from './supply.constant';
import { TSupply } from './supply.interface';
import { Supply } from './supply.model';

const createSupplyIntoDB = async (payload: TSupply) => {
  const result = await Supply.create(payload);
  return result;
};

const getAllSuppliesFromDB = async (query: Record<string, unknown>) => {
  const supplyQuery = new QueryBuilder(Supply.find(), query)
    .search(supplySearchableFields)
    .filter()
    .pagination();

  const result = await supplyQuery.modelQuery;
  return result;
};

const getSingleSupplyFromDB = async (id: string) => {
  const result = await Supply.findById({ _id: id });
  return result;
};

const updateSupplyIntoDB = async (id: string, payload: Partial<TSupply>) => {
  const result = await Supply.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSupplyFromDB = async (id: string) => {
  const result = await Supply.findByIdAndDelete({ _id: id });
  return result;
};

export const SupplyServices = {
  createSupplyIntoDB,
  getAllSuppliesFromDB,
  getSingleSupplyFromDB,
  updateSupplyIntoDB,
  deleteSupplyFromDB,
};
