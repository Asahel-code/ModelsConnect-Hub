import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const SideNav = ({ show, links, current, setCurrent }) => {
    const navigate = useNavigate();

    const handleCurrent = (selected, to) => {
        setCurrent(selected.toLowerCase());
        if (to !== "") navigate(to);
    }

    return (
        <div className={`w-[250px] h-screen ${!show && "hidden"} ease-in-out bg-secondary_color shrink-0`}>
            {/* Logo */}
            <Link to="/">
                <div className="text-center text-xl md:text-3xl font-semibold text-white py-4">
                    <h2>ModelConnect</h2>
                    <p>Hub.</p>
                </div>
            </Link>

            {/* Nav Items */}
            <div className="h-[70%] flex flex-col gap-4 p-2">
                {links.map((link, index) => (
                    <MenuItem
                        key={index}
                        icon={link.icon}
                        title={link.name}
                        isCurrent={link.name.toLowerCase() === current}
                        handleClick={() => handleCurrent(link.name, link.to)}
                    />
                ))}
            </div>
        </div>
    )
}

SideNav.propTypes = {
    show: PropTypes.bool.isRequired,
    links: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired,
    setCurrent: PropTypes.func.isRequired
}


export default SideNav;

const MenuItem = ({
    icon,
    title,
    isCurrent,
    handleClick,
}) => (
    <div className="w-full py-1">
        <div className={`cursor-pointer rounded-md ${isCurrent && "bg-primary_color hover:text-white"} w-full hover:bg-primary_color hover:text-white`} onClick={handleClick}>
            <div className="flex items-center gap-2 h-10 px-2 text-white">
                <div className={`text-lg`}>
                    {icon}
                </div>
                <div className="text-md capitalize">
                    {title}
                </div>
            </div>
        </div>
    </div>
);

MenuItem.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    isCurrent: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
}
