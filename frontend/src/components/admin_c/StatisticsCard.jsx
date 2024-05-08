import PropTypes from "prop-types";

const StatisticsCard = ({ icon, title, number }) => {
  return (
    <div
      className={
        "h-24 bg-white rounded-xl border border-slate-200 w-[30%] flex px-8 items-center gap-x-6"
      }
    >
      {/*    icon   */}
      <div>{icon}</div>

      <div>
        <h5 className={"text-base font-[600] text-zinc-600 mb-1"}>{title}</h5>
        <h3 className={"text-xl font-semibold"}>{number}</h3>
      </div>
    </div>
  );
};

StatisticsCard.propTypes = {
  icon: PropTypes.element,
  title:  PropTypes.string,
  number: PropTypes.number
}

export default StatisticsCard;
