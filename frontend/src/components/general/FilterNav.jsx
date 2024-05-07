import PropTypes from "prop-types";

const FilterNav = ({
  options = [],
  handleFilter,
  current,
  className,
}) => {
  return (
    <div
      className={`flex justify-between border-b border-b-zinc-200 relative mb-1.5 ${className} `}
    >
      <div className={"flex gap-x-5"}>
        {options?.map((opt) => (
          <button
            className={` text-[13px] px-3 py-1   ${current === opt.index
              ? "text-primary_dark font-[700] border-primary_dark border-b-2"
              : "text-zinc-500 font-[400]"
              }`}
            key={opt.index}
            onClick={() => handleFilter(opt.index)}
          >
            {opt.name} ({0})
          </button>
        ))}
      </div>
    </div>
  );
};

FilterNav.propTypes = {
  options: PropTypes.array,
  handleFilter: PropTypes.func,
  current: PropTypes.string,
  length: PropTypes.number,
  className: PropTypes.string
}

export default FilterNav;
