import mongoose from "mongoose";

const timeSlotSchema = mongoose.Schema({
  startTime: String,
  endTime: String,
  isBooked: Boolean,
});

const TimeSlot = mongoose.model("TimeSlot", timeSlotSchema);

export default TimeSlot;
