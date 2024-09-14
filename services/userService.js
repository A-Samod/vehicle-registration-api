const User = require("../models/userModel");

// Create a new user
exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};
exports.getUserById = async (id) => {
  return await User.findById(id);
};

exports.getUserByName = async (name) => {
  return await User.findOne({ user_name: { $regex: name, $options: "i" } });
};

exports.getUserByNIC = async (nic) => {
  return await User.find({ nic: nic });
};

exports.getUserByVehicleNo = async (vehicleNo) => {
  return await User.find({ vehicle_no: vehicleNo });
};

// Get users with Pagination
exports.getUsers = async (vehicleNo, page, limit) => {
  const skip = (page - 1) * limit; // Calculate the number of documents to skip

  let query = {};
  if (vehicleNo) {
    query.vehicle_no = { $regex: vehicleNo, $options: "i" };
  }

  // Retrieve users with skip and limit
  const users = await User.find(query).skip(skip).limit(limit);

  const totalUsers = await User.countDocuments(query); // Get total number of users
  const totalPages = Math.ceil(totalUsers / limit); // Calculate total pages

  return {
    users,
    currentPage: page,
    totalPages,
    totalUsers,
    limit,
  };
};

// Update a user
exports.updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete a user
exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

// Validate vehicle number
exports.validateVehicleNo = async (vehicleNo) => {
  return await User.findOne({ vehicle_no: vehicleNo });
};
