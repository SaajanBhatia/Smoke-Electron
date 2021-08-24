// Import Main Style (SCSS)
import "./global/styles/main.scss";

// Import Primary Nav Styles
import "./global/styles/menu.scss";

// Import CSS for fixed footer
import "./components/Footer/footerStyle.scss";

// Get the Live Clock Comp
import Clock from "./components/Clock/liveClock";

// Sidemenu Components
import SideMenu, { menuItems } from "./components/Navbar/SideMenu";

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

//  UseState to allow JS Custon Function for Sidebar Collapse
import { useState } from "react";

// Import Boxicons
import "boxicons";


// Main Application
function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />


        <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
          {menuItems.map((menu, index) => (
            <>



              <Route key={menu.name} exact={menu.exact} path={menu.to} component={menu.component} >

              </Route>

              <div className="footer">

                {/* Centered Link */}
                <div className="footer-centered">
                  <p style={{color: "grey"}}><Clock /></p>
                </div>

                {/* Left Aligned Links (Default) */}
                <p style={{color: "grey"}}>
                  <box-icon name='circle' type='solid' color="green" size="xs"></box-icon> Connected
                </p>
                

                {/* Right Aligned Items */}
                <div className="footer-right footer-connect">
                  <p style={{color: "grey"}}>V2.1 B</p>
                </div>

              </div>
              
            </>
          ))}

        </div>
      </Router>
    </div>
  );
}

export default App;