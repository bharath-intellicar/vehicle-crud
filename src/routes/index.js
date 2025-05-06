import express from 'express';
const router = express.Router();

import vehicleRoute from './vehicle.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/vehicles', vehicleRoute);

  return router;
};

export default routes;
