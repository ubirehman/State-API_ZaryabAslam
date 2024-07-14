import { useState } from "react";
import HomeUI from "./pageUI";
import { addValue } from "../../store/slices/answerSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const values = useSelector((state) => state.answers.values);
  const dispatch = useDispatch();

  const carouselItems = [
    "How was your day?",
    "What did you learn today?",
    "Any exciting plans for tomorrow?",
  ];

  const options = [
    { id: 1, icon: "👍", label: "Good" },
    { id: 2, icon: "🤔", label: "Ehhh ..." },
    { id: 3, icon: "👎", label: "Bad" },
  ];

  const selectOptions = (answer) => {
    dispatch(addValue(answer));
    setSelectedOption(answer);
    setTimeout(() => {
      setSelectedOption(null);
      setCurrentIndex((value) => value + 1);
    }, 2000);
  };

  return (
    <HomeUI
      carouselItems={carouselItems}
      selectedOption={selectedOption}
      setSelectedOption={selectOptions}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      options={options}
      values={values}
    />
  );
};

export default Home;
