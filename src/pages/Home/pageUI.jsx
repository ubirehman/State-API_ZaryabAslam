import React from "react";
import PropTypes from "prop-types";
import CarouselSection from "../../components/CarouselSection/page";
import MultiStepForm from "../../components/MultiStepForm/page";
import AllAnswers from "../../components/AllAnswers/page";

const HomeUI = ({
  carouselItems,
  selectedOption,
  setSelectedOption,
  options,
  currentIndex,
  setCurrentIndex,
}) => {
  return (
    <div className="flex w-full h-screen">
      {currentIndex >= options.length ? (
        <AllAnswers items={carouselItems} options={options} />
      ) : (
        <div className="w-1/2 h-full">
          <CarouselSection
            items={carouselItems}
            interval={0}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      )}
      {currentIndex >= options.length ? null : (
        <section className="w-1/2 h-full flex items-center justify-center text-center">
          <MultiStepForm
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </section>
      )}
    </div>
  );
};

HomeUI.propTypes = {
  carouselItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.number.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

export default HomeUI;
