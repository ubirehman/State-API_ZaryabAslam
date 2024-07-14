import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import CarouselSectionUI from "./pageUI";

const CarouselSection = ({
  items,
  interval,
  currentIndex,
  setCurrentIndex,
}) => {
  const [isAnimating, setIsAnimating] = useState(true);

  const goToIndex = (index) => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(true);
    }, 50);
  };

  useEffect(() => {
    if (interval === 0) return;

    const timer = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsAnimating(true);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, items.length]);

  return (
    <CarouselSectionUI
      items={items}
      currentIndex={currentIndex}
      isAnimating={isAnimating}
      goToIndex={goToIndex}
    />
  );
};

CarouselSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

CarouselSection.defaultProps = {
  interval: 3000,
};

export default CarouselSection;
