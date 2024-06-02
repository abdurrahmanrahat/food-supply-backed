import { TGratitude } from './gratitude.interface';
import { Gratitude } from './gratitude.model';

const createGratitudeIntoDB = async (payload: TGratitude) => {
  const result = await Gratitude.create(payload);
  return result;
};

const getAllGratitudesFromDB = async () => {
  const result = await Gratitude.find();
  return result;
};

const getSingleGratitudeFromDB = async (id: string) => {
  const result = await Gratitude.findById({ _id: id });
  return result;
};

const deleteGratitudeFromDB = async (id: string) => {
  const result = await Gratitude.findByIdAndDelete({ _id: id });
  return result;
};

export const GratitudeServices = {
  createGratitudeIntoDB,
  getAllGratitudesFromDB,
  getSingleGratitudeFromDB,
  deleteGratitudeFromDB,
};
