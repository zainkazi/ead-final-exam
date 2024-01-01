import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookedAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      const data = await fetch("http://localhost:3000/api/appointments");
      const results = await data.json();
      setAppointments(results.appointments);
    };

    getAppointments();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Booked Appointments</h1>
      {appointments.map((appointment) => (
        <div
          key={appointment._id}
          className="flex items-center justify-start space-x-10"
        >
          <h2>{appointment.name}</h2>
          <p>{appointment.email}</p>
        </div>
      ))}
      <div className="space-x-2">
        <Link to="/create-slot">
          <button className="p-2 text-lg bg-gray-400 border-2 border-black">
            Create Slot
          </button>
        </Link>
        <Link to="/available-slots">
          <button className="p-2 text-lg bg-gray-400 border-2 border-black">
            Available Slots
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookedAppointments;
