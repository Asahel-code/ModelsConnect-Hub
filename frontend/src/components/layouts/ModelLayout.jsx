import PropTypes from 'prop-types';
import { useState } from "react";
import SideNav from '../SideNav';
import TopNav from '../TopNav';
import { MdOutlineHome } from "react-icons/md";
import { RiGalleryView } from "react-icons/ri";

const ModelLayout = ({ children }) => {

  const [showSideBar, setShowSideBar] = useState(true);

  const handleToggle = () => {
    setShowSideBar((prev) => !prev);
  };

  const topNavLinks = [
    {
      name: "My profile",
      to: "/model/profile",
    }
  ];

  const sideNavLinks = [
    {
      name: "Home",
      to: "/model/home",
      icon: <MdOutlineHome />
    },
    {
      name: "Gallery",
      to: "/model/gallery",
      icon: <RiGalleryView />
    }
  ];

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <SideNav show={showSideBar} links={sideNavLinks} />

      <div className="min-h-full w-full">
        <TopNav toggleSideBar={handleToggle} links={topNavLinks} />
        {children}
      </div>
    </div>
  )
}

ModelLayout.propTypes = {
  children: PropTypes.element
}

export default ModelLayout