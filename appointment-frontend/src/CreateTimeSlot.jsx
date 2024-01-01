import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const CreateTimeSlot = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      startTime: "",
      endTime: "",
      isBooked: false,
    },
    onSubmit: async (values) => {
      await fetch("http://localhost:3000/api/slots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      navigate("/");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Start Time</label>
      <input
        type="text"
        id="startTime"
        name="startTime"
        className="border border-black"
        onChange={formik.handleChange}
        value={formik.values.startTime}
      />
      <label>End Time</label>
      <input
        type="text"
        id="endTime"
        name="endTime"
        className="border border-black"
        onChange={formik.handleChange}
        value={formik.values.endTime}
      />
      <button
        type="submit"
        className="p-2 text-lg bg-gray-400 border-2 border-black"
      >
        Create Slot
      </button>
    </form>
  );
};

export default CreateTimeSlot;
