import query from "../db/utils";

const findAll = async () => {
  return await query(
    "SELECT * FROM shoes"
  );
};

const findOne = async (shoeID) => {
  return await query(
    "SELECT * From shoes WHERE shoeID = ? ",
    [shoeID]
  );
};

const addOne = async (newShoe) => {
  return await query("INSERT into shoes SET ?", [newShoe]);
};
/** this line of code is giving me trouble */
const updateOne = async (udpatedShoe, shoeID) => {
  return await query("UPDATE shoes SET ? WHERE shoeID = ?", [
    udpatedShoe,
    shoeID,
  ]);
};

const remove = async (shoeID) => {
    return await query ("DELETE FROM shoes WHERE shoeID = ?", [shoeID])
}

export default { findAll, findOne, addOne, updateOne, remove };
