import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { submitData } from "../../services/api/sumitData";

const AllAnswers = ({ items, options }) => {
  const values = useSelector((state) => state.answers.values);

  useEffect(() => {
    submitData(values);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gradient-bg-lblue-dblue text-white">
    <div className="flex flex-col items-center justify-center animate-slideInFromLeft">
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
  </div>
  
  );
};

AllAnswers.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AllAnswers;
