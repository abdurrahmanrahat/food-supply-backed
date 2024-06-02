import { TVolunteer } from './volunteer.interface';
import { Volunteer } from './volunteer.model';

const createVolunteerIntoDB = async (payload: TVolunteer) => {
  const result = await Volunteer.create(payload);
  return result;
};

const getAllVolunteersFromDB = async () => {
  const result = await Volunteer.find();
  return result;
};

const getSingleVolunteerFromDB = async (id: string) => {
  const result = await Volunteer.findById({ _id: id });
  return result;
};

const deleteVolunteerFromDB = async (id: string) => {
  const result = await Volunteer.findByIdAndDelete({ _id: id });
  return result;
};

export const VolunteerServices = {
  createVolunteerIntoDB,
  getAllVolunteersFromDB,
  getSingleVolunteerFromDB,
  deleteVolunteerFromDB,
};
