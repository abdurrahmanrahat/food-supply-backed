import express from 'express';

const router = express.Router();

router.post('/create-supply');

router.get('/');

router.get('/:id');

router.patch('/:id');

router.delete('/:id');

export const SupplyRoutes = router;
