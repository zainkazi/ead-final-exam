import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const BookTimeSlot = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async (values) => {
      await fetch("http://localhost:3000/api/appointments", {
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
    <div>
      <h1 className="text-2xl font-bold">Book Time Slot</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-black"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="border border-black"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button
          type="submit"
          className="p-2 text-lg bg-gray-400 border-2 border-black"
        >
          Create Appoinment
        </button>
      </form>
    </div>
  );
};

export default BookTimeSlot;
