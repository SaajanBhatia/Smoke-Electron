import React, { useState } from 'react';
import "./Login.css";


// For Form Styling - Using React Bootstrap
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function Login() {
  
  if (!("show" in localStorage)) {
    console.log(" > SETTING LOCAL STORAGE")
    localStorage.setItem("show", "true")
  } 

  var [show, setShow] = useState(localStorage.getItem("show"));

  // Sample Validate Function
  function validateKey(key) {
    if (key === "abc123") { 
      return true
    } else {
      return false
    };
  };


  // Handle Submit Login Function
  let onSubmitLogin = (e) => {
    e.preventDefault();
    let key = e.target.key.value; // Get Key Value
    if (validateKey(key)) { // If Correct Key
      localStorage.setItem("show", "false");
      setShow("false");
    } else { // If Incorrect Key
      localStorage.setItem("show", "true")
      setShow("true")
    };
  }

  return (
    <div>
      {
        (show === "true") ?
          <div id="myModal" className="login-key-modal">
            <div className="login-key-modal-content use-react-bootstrap">

              

                <Form onSubmit={onSubmitLogin} name="loginForm" id="loginForm">
                    <Form.Group className="mb-3" >
                        <Form.Label>SmokeBot Key</Form.Label>
                        <Form.Control type="text" placeholder="Enter Key Here" name="key" id="key"/>
                        
                    </Form.Group>

                    <Button variant="danger" type="submit" name="submitLoginForm">
                        Submit
                    </Button>

                </Form>

            </div>
          </div>
          :
          null
      }
    </div>
  );

}

export default Login;