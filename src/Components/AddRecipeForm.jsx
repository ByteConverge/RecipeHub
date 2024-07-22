import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    ingredients: "",
    steps: "",
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
    if (name === "ingredients" && !value) error = "Ingredients are required";
    if (name === "steps" && !value) error = "Steps are required";
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
      formDataToSend.append("ingredients", formData.ingredients);
      formDataToSend.append("steps", formData.text);
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-1 p-6 text-white rounded-lg shadow-lg w-full max-w-3xl mx-auto font-inter font-light"
      >
        <h1 className="text-2xl font-poppins text-center ">Add Recipe Form</h1>
        {attemptedSubmit && Object.keys(formErrors).length > 0 && (
          <p className="text-red-500 text-center text-sm rounded">
            All fields must be filled
          </p>
        )}

        {/* Form input fields */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 w-full justify-center">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="category"
                value="rice"
                checked={formData.category === "rice"}
                onChange={handleChange}
                className="form-radio text-[#b0906e]"
              />
              Rice
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="category"
                value="snacks"
                checked={formData.category === "snacks"}
                onChange={handleChange}
                className="form-radio text-[#b0906e]"
              />
              Snacks
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

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Recipe Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg bg-gray-700 focus:outline-none focus:border-white"
            />
            {formErrors.title && (
              <p className="text-red-500 text-sm">{formErrors.title}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Ingredients:</label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg bg-gray-700 focus:outline-none focus:border-white"
              rows="3" // Reduced the number of rows to make the textarea smaller
            />
            {formErrors.ingredients && (
              <p className="text-red-500 text-sm">{formErrors.ingredients}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Steps:</label>
            <textarea
              name="steps"
              value={formData.text}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg bg-gray-700 focus:outline-none focus:border-white"
              rows="5"
            />
            {formErrors.text && (
              <p className="text-red-500 text-sm">{formErrors.text}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Image:</label>
            <input
              type="file"
              name="img"
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg bg-gray-700 focus:outline-none focus:border-white"
            />
            {formErrors.img && (
              <p className="text-red-500 text-sm">{formErrors.img}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className={`mt-4 py-2 px-4 rounded-lg text-white ${
            loading
              ? "bg-[#996D3E] cursor-not-allowed"
              : "bg-[#b0906e] hover:bg-[#a07956]"
          }`}
          disabled={loading || Object.keys(formErrors).length > 0}
        >
          {loading ? "Submitting..." : "Add Recipe"}
        </button>
      </form>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-xs mx-auto">
            <div className="flex justify-center mb-4">
              <AiOutlineCheckCircle className="text-green-500 text-[2rem]" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p>Your recipe has been Uploaded</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AddRecipeForm;
