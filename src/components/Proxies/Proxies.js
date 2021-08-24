import React from "react";

// Import Main SCSS
import "../../global/styles/main.scss";

// Global Style for Table 
import "../../global/styles/tableStyle.scss";

// Import Modal to add Proxy
import ProxiesModal from "./ProxiesModal";

class Proxies extends React.Component {
    render() {
      return (
          <div className="app">
            <h1 className="component_header_1">Proxies</h1>

            <div className="table_taskbar">
                <h3 className="component_header_3">View and edit proxies</h3>
                <div className="table_taskbar_right">
                    <ProxiesModal />
                </div>
                
            </div>
            
            {/* Table */}

            <table>
                {/* Table Headings */}
                <tr>
                    <th>Proxy Name</th>
                    <th>Length</th>
                </tr>

                {/* Table Body */}
                <tr>
                    <td>US-EAST-COAST-1</td>
                    <td>12</td>
                </tr>

                
            </table>

          </div>
      );
    }
}

export default Proxies;