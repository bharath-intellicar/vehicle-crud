import HttpStatus from 'http-status-codes';
import * as VehicleService from '../services/vehicle.service';

/**
 * Controller to get all vehicles available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllVehicles = async (req, res, next) => {
  try {
    const data = await VehicleService.getAllVehicles();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All vehicles fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single vehicle
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getVehicle = async (req, res, next) => {
  try {
    const data = await VehicleService.getVehicle(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Vehicle fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new vehicle
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newVehicle = async (req, res, next) => {
  try {
    const data = await VehicleService.newVehicle(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Vehicle created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a vehicle
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateVehicle = async (req, res, next) => {
  try {
    const data = await VehicleService.updateVehicle(req.params.id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Vehicle updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a single vehicle
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteVehicle = async (req, res, next) => {
  try {
    const data = await VehicleService.deleteVehicle(req.params.id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Vehicle deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
