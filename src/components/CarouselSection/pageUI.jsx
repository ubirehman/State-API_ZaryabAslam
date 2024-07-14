import PropTypes from "prop-types";

const CarouselSectionUI = ({ items, currentIndex, isAnimating, goToIndex }) => {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full flex items-center gradient-bg-lblue-dblue">
        <div className="h-20">
          <div
            className={`transition-transform duration-500 ease-in-out ${
              isAnimating ? "animate-slide-in" : ""
            }`}
          >
            <h1 className="ml-20 text-6xl text-white text-start font-semibold">
              {items[currentIndex]}
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`my-2 p-2 rounded-full ${
              currentIndex === index ? "bg-purple-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

CarouselSectionUI.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  isAnimating: PropTypes.bool.isRequired,
  goToIndex: PropTypes.func.isRequired,
};

export default CarouselSectionUI;
