import React from "react";

// Import Main SCSS
import "../../global/styles/main.scss";

// Global Style for Table 
import "../../global/styles/tableStyle.scss"

// import Modal 
import QuickTasksModal from "./QuickTasksModal";


class QuickTasks extends React.Component {
    render() {
      return (
          <div className="app">
            <h1 className="component_header_1">Quick Tasks</h1>

            <div className="table_taskbar">
                <h3 className="component_header_3">Overview</h3>
                <div className="table_taskbar_right">
                    <QuickTasksModal/>
                </div>
                
            </div>
            
            {/* Table */}

            <table>
                {/* Table Headings */}
                <tr>
                    <th>ID</th>
                    <th>Store</th>
                    <th>Product</th>
                    <th>Mode</th>
                    <th>Delay</th>
                    <th>Proxy</th>
                    <th>Profile</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>

                {/* Table Body */}
                <tr>
                    <td>1</td>
                    <td>Scan</td>
                    <td>RTX 3090</td>
                    <td>REST</td>
                    <td>2000</td>
                    <td>Rainbow</td>
                    <td>Main</td>
                    <td>In Progress</td>
                    <td>⏸ ⏯</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Scan</td>
                    <td>RTX 3090</td>
                    <td>REST</td>
                    <td>2000</td>
                    <td>Rainbow</td>
                    <td>Main</td>
                    <td>In Progress</td>
                    <td>⏸ ⏯</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Scan</td>
                    <td>RTX 3090</td>
                    <td>REST</td>
                    <td>2000</td>
                    <td>Rainbow</td>
                    <td>Main</td>
                    <td>In Progress</td>
                    <td>⏸ ⏯</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Scan</td>
                    <td>RTX 3090</td>
                    <td>REST</td>
                    <td>2000</td>
                    <td>Rainbow</td>
                    <td>Main</td>
                    <td>In Progress</td>
                    <td>⏸ ⏯</td>
                </tr>
            </table>

          </div>
      );
    }
}

export default QuickTasks;