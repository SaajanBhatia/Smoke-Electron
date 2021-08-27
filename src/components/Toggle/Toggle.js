import React from "react";
import "./toggleStyle.scss";

class StartToggle extends React.Component {
	constructor() {
    super();
    this.state = {
    	songs: [],
      currentState: false
    }
    this.startTask = this.startTask.bind(this);
    this.stopTask = this.stopTask.bind(this);
  }

  runProcess(name) {
    console.log(name)
  };

  stopProcess(name) {
    console.log(name)
  }

  

  startTask() {
    console.log("start")
    this.runProcess(this.props.name)
    this.setState({ currentState: true });
  }

  stopTask() {
    console.log("stop")
    this.stopProcess(this.props.name)
    this.setState({ currentState: false });
    
  }
  render() {
    return (
      
        

          <div >
            <label class="switch">
              <input type="checkbox" onClick={this.state.currentState ? this.stopTask : this.startTask}/>
              <div>
                  <span></span>
              </div>
          </label>
          </div>

      
      
    );
  }
}

export default StartToggle;
