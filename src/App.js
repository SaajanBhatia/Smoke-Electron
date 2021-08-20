// Import Main Style (SCSS)
import "./global/styles/main.scss";

// Import Primary Nav Styles
import "./global/styles/menu.css"

// Import CSS for top Nav
import "./global/styles/navStyle.css";

// Import CSS for fixed footer
// import "./components/Footer/footer.scss";

// Get the Live Clock Comp
import Clock from "./components/Clock/liveClock";

// Sidemenu Components
import SideMenu, { menuItems } from "./components/Navbar/SideMenu";

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

//  UseState to allow JS Custon Function for Sidebar Collapse
import { useState } from "react";

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


              <Route key={menu.name} exact={menu.exact} path={menu.to}>
              <div className="topnav">
                <h2>
                  <a href="/">{menu.name}</a>
                </h2>
                
                <div className="topnav-right">
                  <a href="#search">Search</a>
                  <a href="#about">About</a>
                </div>
              </div>


              <h1>{menu.exact}</h1>
              <h3>Welcome</h3>

              <div className="footer">

                <p className="footer-left">
                  Connected
                </p>

                <p className="footer-center">
                  <Clock />
                </p>

                <p className="footer-right">
                  right
                </p>

                

              </div>

              </Route>
              
            </>
          ))}

        </div>
      </Router>
    </div>
  );
}

export default App;