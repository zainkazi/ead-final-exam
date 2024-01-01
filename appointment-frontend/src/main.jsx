import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import BookedAppointments from "./BookedAppointments.jsx";
import AvailableTimeSlots from "./AvailableTimeSlots.jsx";
import CreateTimeSlot from "./CreateTimeSlot.jsx";
import NewTimeSlot from "./NewTimeSlot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookedAppointments />,
  },
  {
    path: "/available-slots",
    element: <AvailableTimeSlots />,
  },
  {
    path: "/create-slot",
    element: <CreateTimeSlot />,
  },
  {
    path: "/book-slot",
    element: <NewTimeSlot />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
