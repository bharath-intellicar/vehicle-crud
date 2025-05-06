import express from 'express';
import * as vehicleController from '../controllers/vehicle.controller';
import { newVehicleValidator, updateVehicleValidator } from '../validators/vehicle.validator';

const router = express.Router();

//route to get all vehicles
router.get('', vehicleController.getAllVehicles);

//route to create a new vehicle
router.post('', newVehicleValidator, vehicleController.newVehicle);

//route to get a single vehicle by their vehicle id
router.get('/:id', vehicleController.getVehicle);

//route to update a single vehicle by their vehicle id
router.put('/:id', updateVehicleValidator, vehicleController.updateVehicle);

//route to delete a single vehicle by their vehicle id
router.delete('/:id', vehicleController.deleteVehicle);

export default router;
