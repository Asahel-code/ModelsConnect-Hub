import PropTypes from 'prop-types';
import { useState } from 'react';
import SideNav from '../SideNav';
import TopNav from '../TopNav';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const AdminLayout = ({ children }) => {

  const [showSideBar, setShowSideBar] = useState(true);
  const [current, setCurrent] = useState("dashboard");

  const handleToggle = () => {
    setShowSideBar((prev) => !prev);
  };

  const topNavLinks = [
    {
      name: "profile",
      to: "/admin/profile",
    }
  ];

  const sideNavLinks = [
    {
      name: "Dashboard",
      to: "/admin",
      icon: <LuLayoutDashboard />
    },
    {
      name: "Models",
      to: "/admin/models",
      icon: <FaRegUser />
    },
    {
      name: "Clients",
      to: "/admin/clients",
      icon: <FaRegUser />
    },
    {
      name: "Jobs",
      to: "/admin/jobs",
      icon: <MdWorkOutline />
    }
  ]


  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <SideNav
        show={showSideBar}
        links={sideNavLinks}
        current={current}
        setCurrent={setCurrent}
      />

      <div className="min-h-full w-[100%]">
        <TopNav toggleSideBar={handleToggle} links={topNavLinks} />
        {children}
      </div>
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default AdminLayout