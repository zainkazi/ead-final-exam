import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <h1 className="text-2xl font-bold">Available Time Slots</h1>
      {slots.map((slot) => (
        <div
          key={slot._id}
          className="flex items-center justify-start space-x-10"
        >
          <p>
            {slot.startTime} - {slot.endTime}
          </p>
          <Link to={`/book-slot/${slot._id}`} state={slot}>
            <button className="p-2 text-lg bg-gray-400 border-2 border-black">
              Book
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AvailableTimeSlots;
