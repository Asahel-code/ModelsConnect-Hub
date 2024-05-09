import PropTypes from 'prop-types';
import { useState } from "react";
import SideNav from '../SideNav';
import TopNav from '../TopNav';
import { MdOutlineHome, MdWorkOutline  } from "react-icons/md";
import { useClientProfile } from '../../hooks/useClient';

const ClientLayout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [current, setCurrent] = useState("home");

  const handleToggle = () => {
    setShowSideBar((prev) => !prev);
  };

  const { isLoading, data } = useClientProfile();

  const topNavLinks = [
    {
      name: "My profile",
      to: "/client/profile",
    }
  ];

  const sideNavLinks = [
    {
      name: "Home",
      to: "/client",
      icon: <MdOutlineHome />
    },
    {
      name: "Contracts",
      to: "/client/contracts",
      icon: <MdWorkOutline />
    },
  ];

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <SideNav
        show={showSideBar}
        links={sideNavLinks}
        current={current}
        setCurrent={setCurrent}
      />

      <div className="min-h-full w-full">
        <TopNav avatar={!isLoading ? data?.persona === "self" ?`${data?.name?.split(" ")[0].charAt(0)}${data?.name?.split(" ")[1].charAt(0)}`: data?.name?.charAt(0): ""} username={!isLoading ? data?.name : ""} toggleSideBar={handleToggle} links={topNavLinks} />
        {children}
      </div>
    </div>
  )
}

ClientLayout.propTypes = {
  children: PropTypes.element
}

export default ClientLayout