import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    text: "",
    img: null,
  });

  const jwt = localStorage.getItem("token");

  const [formErrors, setFormErrors] = useState({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = "";
    if (name === "category" && !value) error = "Category is required";
    if (name === "title" && !value) error = "Title is required";
    if (name === "text" && !value) error = "Ingredients and steps are required";
    return error;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "img" ? files[0] : value;

    // Validate field
    const error = validateField(name, newValue);

    // Update form data and errors
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    setFormErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAttemptedSubmit(true);

    // Validate all fields before submission
    const errors = {};
    for (const key in formData) {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);

      const formDataToSend = new FormData();
      formDataToSend.append("category", formData.category);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("text", formData.text);
      if (formData.img) {
        formDataToSend.append("img", formData.img);
      }

      try {
        const response = await fetch(
          "https://recidishbackend.onrender.com/api/post/add",
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
            method: "POST",
            body: formDataToSend,
          }
        );

        if (response.ok) {
          console.log("Recipe submitted successfully");
          // Clear form data on successful submission
          // setFormData({
          //   category: "",
          //   title: "",
          //   text: "",
          //   img: null,
          // });
          setFormErrors({});
          setAttemptedSubmit(false);
          setShowSuccessModal(true);
          setTimeout(() => {
            setShowSuccessModal(false);
            navigate("/loggedIn/recipes");
          }, 3000); // Hide modal and redirect after 3 seconds
        } else {
          console.error("Error submitting recipe");
        }
      } catch (error) {
        console.error("Network error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <AiOutlineCheckCircle className="text-green-500 text-6xl mb-4" />
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p>Your recipe has been submitted successfully.</p>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className=" text-white flex flex-col gap-2 mx-auto font-poppins font-normal height-[95vh] bg-green-60 "
      >
        <h1 className="font-extralight font-poppins text-2xl  text-center w-[95%] mx-auto">
          Add Recipe Form
        </h1>
        {attemptedSubmit && Object.keys(formErrors).length > 0 && (
          <p className="error-message text-red-500  text-center font-inter font-normal w-[95%] mx-auto">
            All fields must be filled
          </p>
        )}

        {/* Form input fields */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-center w-[95%] mx-auto">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="category"
                  value="rice"
                  checked={formData.category === "rice"}
                  onChange={handleChange}
                  className="form-radio  text-[#b0906e]"
                />
                Rice
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="category"
                  value="soup"
                  checked={formData.category === "soup"}
                  onChange={handleChange}
                  className="form-radio text-[#b0906e]"
                />
                Soup
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="category"
                  value="stew"
                  checked={formData.category === "stew"}
                  onChange={handleChange}
                  className="form-radio text-[#b0906e]"
                />
                Stew
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="font-poppins w-[95%] mx-auto">
              Recipe Title:
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:border-black w-[95%] mx-auto "
            />
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="font-poppins w-[95%] mx-auto">
              Ingredients and Steps:
            </label>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:border-white w-[95%] mx-auto height-[60vh]]"
              rows="10"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Image:</label>
            <input
              type="file"
              name="img"
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg bg-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className={`mt-4 py-2 px-4 rounded-lg text-white ${
            loading ? "bg-[#996D3E] cursor-not-allowed" : "bg-[#b0906e] "
          }`}
          disabled={loading || Object.keys(formErrors).length > 0}
        >
          {loading ? "Submitting..." : "Add Recipe"}
        </button>
      </form>
    </>
  );
};

export default AddRecipeForm;
