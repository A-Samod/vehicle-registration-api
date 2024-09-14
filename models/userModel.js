const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Function to get current time in Sri Lankan timezone (UTC+5:30)
const getSriLankanTime = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 330); // Add 330 minutes (5 hours 30 minutes) to convert UTC to SLT
  return now;
};

const userSchema = new Schema({
  user_id: { type: Number }, // Auto-increment field
  user_name: { type: String, required: true },
  nic: { type: String, required: true },
  mobile: { type: String, required: true },
  vehicle_no: { type: String, required: true, unique: true },
  vehicle_model: { type: String, required: true },
  createdAt: {
    type: Date,
    required: true,
    default: getSriLankanTime,
  },
  updatedAt: {
    type: Date,
    required: false,
    default: getSriLankanTime,
  },
});

// Apply auto-increment to the `user_id` field
userSchema.plugin(AutoIncrement, { inc_field: "user_id" });

const User = mongoose.model("User", userSchema);
module.exports = User;
