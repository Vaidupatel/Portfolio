import PropTypes from "prop-types";

const MagicButton = ({ title, icon, position, handleClick, otherClasses }) => {
  return (
    <button
      className={`relative inline-flex h-12 xl:h-12 md:h-12  sm:h-fit w-full overflow-hidden rounded-lg  p-[1px] focus:outline-none md:w-60 md:mt-10s ${otherClasses}`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg  px-7  text-sm font-medium text-black backdrop-blur-3xl gap-2 `}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;

MagicButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  position: PropTypes.oneOf(["left", "right"]),
  handleClick: PropTypes.func,
  otherClasses: PropTypes.string,
};
