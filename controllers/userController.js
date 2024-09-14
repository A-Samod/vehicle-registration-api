const userService = require("../services/userService");

// Create User
exports.createUser = async (req, res) => {
  try {
    const vehicleNo = req.body.vehicle_no.toUpperCase();

    // Check if the vehicle number already exists
    const checkVehicleNo = await userService.validateVehicleNo(vehicleNo);
    if (checkVehicleNo) {
      return res.status(400).json({ error: "Vehicle number already exists" });
    }

    const userData = { ...req.body, vehicle_no: vehicleNo };
    const newUser = await userService.createUser(userData);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};

// Get User by NIC or Vehicle Number
exports.getUser = async (req, res) => {
  try {
    const nic = req.query.nic;
    const vehicleNo = req.query.vehicle_no;
    let user;

    // Check if the request is made with id or name
    if (nic) {
      user = await userService.getUserByNIC(nic);
    } else if (vehicleNo) {
      user = await userService.getUserByVehicleNo(vehicleNo);
    }

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Users
exports.getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default page = 1
    const limit = parseInt(req.query.limit) || 10; // Default limit = 10
    const vehicleNo = req.query.vehicle_no;

    const user = await userService.getUsers(vehicleNo, page, limit);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};

// Validate vehicle number
exports.validateVehicleNo = async (req, res) => {
  try {
    const { vehicle_no } = req.body;
    const vehicleNo = vehicle_no.toUpperCase();
    const user = await userService.validateVehicleNo(vehicleNo);
    if (user) {
      res.status(200).json({ valid: true });
    } else {
      res.status(404).json({ valid: false });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
