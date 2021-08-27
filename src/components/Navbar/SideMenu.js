import React, { useEffect, useState } from "react";
import logo from "../../global/images/logos/logo-circle (1).png";
import user from "../../global/images/man.png";
//import user from "../../assets/user.jpg";

import MenuItem from "./MenuItem";
 
// import Boxicons 
import 'boxicons';

// Components Here
import Tasks from "../Tasks/Tasks";
import QuickTasks from "../QuickTasks/QuickTasks";
import Profile from "../Profiles/Profile";
import Proxies from "../Proxies/Proxies";
import Settings from "../Settings/Settings";
import Monitor from "../Monitor/Monitor";


// All Flight Paths
export const menuItems = [
  {
    name: "Tasks",
    exact: true,
    to: "/",
    iconClassName: "dashboard",
    component: Tasks
  },
  {
    name: "Quick Tasks",
    exact: true,
    to: "/quick-tasks",
    iconClassName: "fast-forward-circle",
    component: QuickTasks
  },
  {
    name: "Profiles",
    exact: true,
    to: "/profiles",
    iconClassName: "user",
    component: Profile
  },
  {
    name: "Monitor",
    exact: true,
    to: "/monitor",
    iconClassName: "timer",
    component: Monitor
  },
  {
    name: "Proxies",
    exact: true,
    to: "/proxies",
    iconClassName: "plane-take-off",
    component: Proxies,
  },
  {
    name: "Settings",
    exact: true,
    to: "/settings",
    iconClassName: "cog",
    component: Settings
  },
  
  
];

// End of Flight Paths

// Class Components with JSX Animation

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

// End of Class Components with JSX Animation

// Return 

  return (
    
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>


      {/* Top Section of Sidebar */}
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="webscript" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i>
              <box-icon name='right-arrow-square' type='solid' size="sm" color="white"></box-icon>
            </i>
          ) : (
            <i>
              <box-icon name='left-arrow-square' type='solid' color="white"></box-icon>
            </i>
          )}
        </div>
      </div>
      {/* End of Top Sidebar Section */}

      
      {/* Main Side Menu */}
      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            
            <MenuItem
              key={index} 
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
      {/* End of Main Side Menu */}

      
      {/* Footer */}
      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>SmokeBot User</h5>
          <p>USER KEY ID</p>
        </div>
      </div>
      {/* End of Footer */}


    </div>
  );
};

export default SideMenu;
