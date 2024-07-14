import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const AllAnswers = ({ items, options }) => {
  const values = useSelector((state) => state.answers.values);

  const submitData = async () => {
    try {
      const response = await fetch(
        "https://66941128c6be000fa07e0d57.mockapi.io/answers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      console.log("Data submitted successfully", JSON.stringify(values));
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    submitData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gradient-bg-lblue-dblue text-white">
      <h1 className="text-4xl font-bold pt-10 underline">Summary</h1>
      <div className="w-full max-w-4xl px-6 py-4">
        <div className="flex flex-col items-center">
          {values.map((item, index) => (
            <div
              key={index}
              className="my-4 text-center font-semibold text-3xl"
            >
              {items[index] +
                " : " +
                options[item - 1].label +
                " " +
                options[item - 1].icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

AllAnswers.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AllAnswers;
