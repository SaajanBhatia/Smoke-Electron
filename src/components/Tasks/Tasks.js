import React from "react";

// Import Main SCSS
import "../../global/styles/main.scss";

// Global Style for Table 
import "../../global/styles/tableStyle.scss";

// Import Modal for Tasks
import TasksModal from "./TasksModal";

// Import Start Stop Toggle for Tasks
import StartToggle from "../Toggle/Toggle";


class Tasks extends React.Component {
    render() {
      return (
          <div className="app">
            <h1 className="component_header_1">Tasks</h1>

            <div className="table_taskbar">
                <h3 className="component_header_3">Overview</h3>
                <div className="table_taskbar_right">
                    <TasksModal/>
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
                    <th>Start</th>
                </tr>

                {/* Table Body */}
                <tr>
                    <td>2</td>
                    <td>Scan</td>
                    <td>RTX 3090</td>
                    <td>REST</td>
                    <td>2000</td>
                    <td>Rainbow</td>
                    <td>Main</td>
                    <td>In Progress</td>
                    <td><StartToggle name="item2"/></td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Scan</td>
                    <td>RTX 3090</td>
                    <td>REST</td>
                    <td>2000</td>
                    <td>Rainbow</td>
                    <td>Main</td>
                    <td>In Progress</td>
                    <td><StartToggle name="item3"/></td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Scan</td>
                    <td>RTX 3090</td>
                    <td>REST</td>
                    <td>2000</td>
                    <td>Rainbow</td>
                    <td>Main</td>
                    <td>In Progress</td>
                    <td><StartToggle name="item4"/></td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>Scan</td>
                    <td>RTX 3090</td>
                    <td>REST</td>
                    <td>2000</td>
                    <td>Rainbow</td>
                    <td>Main</td>
                    <td>In Progress</td>
                    <td><StartToggle name="item5"/></td>
                </tr>
            </table>

          </div>
      );
    }
}

export default Tasks;