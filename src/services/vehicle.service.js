import db from '../config/database';
import { v4 as uuidv4 } from 'uuid';

//get all vehicles
export const getAllVehicles = async () => {
  let sql = `select v.id as vehicle_id, v.vehicleno as vehicle_no, v.typeid as typeid, v.createdat as created_at, u.name as created_by, v.uuidval as uuid from vehicles v inner join users u on v.createdby = u.id`;
  return await db.query(sql);
};

//create new vehicle
export const newVehicle = async (body) => {
  const { vehicleno, typeid, userid } = body;
  let sql = `insert into vehicles (vehicleno, typeid, createdat, createdby, uuidval) values (?, ?, ?, ?, ?)`;
  const newUUID = uuidv4();
  const now = Date.now();
  await db.query(sql, [vehicleno, typeid, now, userid, newUUID]);
  return await db.query(`select * from vehicles where vehicleno = ?`, [vehicleno]);
};

//update single vehicle
export const updateVehicle = async (id, body) => {
  const { newVehicleno, newTypeid } = body;
  if (newVehicleno && newTypeid) {
    await db.query(
      'UPDATE vehicles SET vehicleno = ?, typeid = ? WHERE id = ?',
      [newVehicleno, newTypeid, id]
    );
  }
  else if (newVehicleno) {
    await db.query(
      'UPDATE vehicles SET vehicleno = ? WHERE id = ?',
      [newVehicleno, id]
    );
  }
  else if (newTypeid) {
    await db.query(
      'UPDATE vehicles SET typeid = ? WHERE id = ?',
      [newTypeid, id]
    );
  }
  return await db.query(`select * from vehicles where id = ?`, [id]);
};

//delete single vehicle
export const deleteVehicle = async (id, body) => {
  const { userid } = body;
  const deletedVehicle = await db.query(`select * from vehicles where id = ?`, [id]);
  if (deletedVehicle.length < 1) {
    throw Error(`no vehicle found with id ${id}`);
  }
  const userExist = await db.query('SELECT * FROM users WHERE id = ?', [userid]);

  if (userExist.length === 0) {
    throw new Error(`Invalid userid ${userid}`);
  }
  const now = Date.now();
  await db.query('DELETE FROM vehicles WHERE id = ?', [id]);
  await db.query(`insert into deletedVehicles (vehicleid, vehicleno, typeid, createdat, createdby, deletedat, deletedby, uuidval) values (?, ?, ?, ?, ?, ?, ?, ?) `,
    [id, deletedVehicle[0].vehicleno, deletedVehicle[0].typeid, deletedVehicle[0].createdat, deletedVehicle[0].createdby, now, userid, deletedVehicle[0].uuidval]
  );
  return deletedVehicle;
};

//get single vehicle
export const getVehicle = async (id) => {
  const vehicle = await db.query(`select * from vehicles where id = ?`, [id]);
  if (vehicle.length < 1) {
    throw Error(`no vehicle found with id ${id}`);
  }
  return vehicle;
};
