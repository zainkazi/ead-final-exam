import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
  name: String,
  email: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
