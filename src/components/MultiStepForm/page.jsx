import Options from "../Options/page";
import PropTypes from "prop-types";

const MultiStepForm = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex">
        {options.map((option) => (
          <div
            key={option.id}
            className="flex flex-col items-center justify-center gap-8 group"
          >
            <Options
              icon={option.icon}
              label={option.label}
              isSelected={selectedOption === option.id}
              onSelect={() => setSelectedOption(option.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

MultiStepForm.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.node,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.number.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
};

export default MultiStepForm;
