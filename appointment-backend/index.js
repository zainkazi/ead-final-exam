import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import Appointment from "./models/Appoinment.js";
import TimeSlot from "./models/TimeSlot.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

try {
  await mongoose.connect(
    "mongodb+srv://zain:zain123@cluster0.foonrkm.mongodb.net/appointmentDatabase?retryWrites=true&w=majority"
  );
  app.listen(PORT, () => console.log("Running on PORT:", PORT));
} catch (e) {
  console.log("Not connected", e);
}

app.get("/api/slots", async (req, res) => {
  const slots = await TimeSlot.find();

  res.json({ slots });
});

app.post("/api/slots", async (req, res) => {
  const { startTime, endTime, isBooked } = req.body;

  const newSlot = await TimeSlot.create({
    startTime,
    endTime,
    isBooked,
  });

  res.json({ newSlot });
});
