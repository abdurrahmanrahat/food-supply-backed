import { TDonation } from './donation.interface';
import { Donation } from './donation.model';

const createDonationIntoDB = async (payload: TDonation) => {
  const result = await Donation.create(payload);
  return result;
};

const getAllDonationsFromDB = async () => {
  const result = await Donation.find();
  return result;
};

const getSingleDonationFromDB = async (id: string) => {
  const result = await Donation.findById({ _id: id });
  return result;
};

// const updateDonationIntoDB = async (id: string, payload: Partial<TDonation>) => {
//   const result = await Donation.findByIdAndUpdate({ _id: id }, payload, {
//     new: true,
//   });
//   return result;
// };

const deleteDonationFromDB = async (id: string) => {
  const result = await Donation.findByIdAndDelete({ _id: id });
  return result;
};

export const DonationServices = {
  createDonationIntoDB,
  getAllDonationsFromDB,
  getSingleDonationFromDB,
  deleteDonationFromDB,
};
