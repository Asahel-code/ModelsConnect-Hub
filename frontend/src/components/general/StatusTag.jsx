import PropTypes from "prop-types";

const StatusTag = ({ className, text }) => {
  return (
    <div
      className={`rounded-full h-9 px-5 font-[500] text-xs flex items-center justify-center ${className}`}
    >
      {text}
    </div>
  );
};

StatusTag.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

export default StatusTag;
