import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { DonationRoutes } from '../modules/donation/donation.route';
import { SupplyRoutes } from '../modules/supply/supply.route';
import { TestimonialRoutes } from '../modules/testimonial/testimonial.route';
import { UserRoutes } from '../modules/user/user.route';
import { VolunteerRoutes } from '../modules/volunteer/volunteer.route';

const router = express.Router();

// app.use('/api/v1/users', UserRoutes);
const moduleRoutes = [
  { path: '/users', route: UserRoutes },
  { path: '/auth', route: AuthRoutes },
  { path: '/supplies', route: SupplyRoutes },
  { path: '/donations', route: DonationRoutes },
  { path: '/volunteers', route: VolunteerRoutes },
  { path: '/testimonials', route: TestimonialRoutes },
];

moduleRoutes.forEach((item) => router.use(item.path, item.route));

export default router;
