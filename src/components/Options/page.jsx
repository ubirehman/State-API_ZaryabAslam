import PropTypes from "prop-types";

const Options = ({ icon, label, isSelected, onSelect }) => {
  return (
    <div
      className={`relative inline-block m-2 cursor-pointer text-3xl gap-8 ${
        isSelected ? "bg-green-500" : ""
      } rounded-full flex items-center justify-center w-12 h-12`}
      onClick={onSelect}
    >
      {icon}
      <div
        className={`absolute top-14 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out text-lg ${
          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

Options.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default Options;
