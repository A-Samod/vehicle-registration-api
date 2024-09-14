const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/users", userController.createUser);
router.get("/users/:id", userController.getUserById);
router.get("/user/filter", userController.getUser);
router.get("/users", userController.getUsers);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.post("/validate-vehicle", userController.validateVehicleNo);

module.exports = router;
