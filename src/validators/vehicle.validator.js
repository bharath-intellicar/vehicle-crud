import db from '../config/database';

export const newVehicleValidator = async (req, res, next) => {
  try {
    const { vehicleno, typeid, userid } = req.body;

    const existingVehicle = await db.query('SELECT * FROM vehicles WHERE vehicleno = ?', [vehicleno]);

    if (existingVehicle.length > 0) {
      throw new Error(`Vehicle already exists with vehicleno ${vehicleno}`);
    }

    const typeExist = await db.query('SELECT * FROM vehicleTypes WHERE id = ?', [typeid]);

    if (typeExist.length === 0) {
      throw new Error(`Invalid typeid ${typeid}`);
    }

    const userExist = await db.query('SELECT * FROM users WHERE id = ?', [userid]);

    if (userExist.length === 0) {
      throw new Error(`Invalid userid ${userid}`);
    }

    next();

  } catch (error) {
    next(error);
  }
};

export const updateVehicleValidator = async (req, res, next) => {
  try {
    const { newVehicleno, newTypeid } = req.body;
    const { id } = req.params;


    const existingVehicle = await db.query('SELECT * FROM vehicles WHERE id = ?', [id]);

    if (!(existingVehicle.length > 0)) {
      throw new Error(`No vehicle found with id ${id}`);
    }

    if (newVehicleno) {
      const existingVehicleNo = await db.query('SELECT * FROM vehicles WHERE vehicleno = ?', [newVehicleno]);

      if (existingVehicleNo.length > 0) {
        throw new Error(`Vehicle already exists with vehicleno ${newVehicleno}`);
      }
    }

    if (newTypeid) {
      const typeExist = await db.query('SELECT * FROM vehicleTypes WHERE id = ?', [newTypeid]);

      if (typeExist.length === 0) {
        throw new Error(`Invalid typeid ${newTypeid}`);
      }
    }

    next();

  } catch (error) {
    next(error);
  }
};

