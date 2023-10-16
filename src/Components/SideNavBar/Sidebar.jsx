import React, { useState } from "react";
import Icon from "../SideNavBar/Images/Icon.svg";
import Profile from "../SideNavBar/Images/profile.png";
import Dashboard from "../SideNavBar/Images/dashboard.svg";
import Settings from "../SideNavBar/Images/settings.svg";
import Support from "../SideNavBar/Images/support.svg";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  // Define the dynamic sidebar items
  const dynamicSidebarItems = [
    { name: "Dashboard", icon: Dashboard },
    { name: "Books", icon: "IT" },
    { name: "PPT", icon: "HEMM" },
    { name: "Videos", icon: "Geology" },
    { name: "Feedback", icon: "Mining" },
  ];

  return (
    <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
      {/* ... (other code remains the same) */}
      <div
        className={
          closeMenu === false
            ? "contentsContainer"
            : "contentsContainer active"
        }
      >
        <ul>
          {dynamicSidebarItems.map((item, index) => (
            <li
              key={index}
              className={
                location.pathname === "/" + item.name.toLowerCase()
                  ? "active"
                  : ""
              }
            >
              <img src={item.icon} style={{ width: "2rem", height: "2rem" }} alt={item.name} />
              {item.name}
            </li>
         ) )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
