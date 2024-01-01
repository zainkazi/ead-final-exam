import { useState, useEffect } from "react";

const AvailableTimeSlots = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const getSlots = async () => {
      const data = await fetch("http://localhost:3000/api/slots");
      const results = await data.json();
      setSlots(results.slots);
    };

    getSlots();
  }, []);

  return (
    <div>
      <h1>Booked Appointments</h1>
      {slots.map((slot) => (
        <div
          key={slot._id}
          className="flex items-center justify-start space-x-10"
        >
          <p>
            {slot.startTime} - {slot.endTime}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AvailableTimeSlots;
