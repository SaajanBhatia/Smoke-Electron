// Import React JS
import React from "react";

// Import Main SCSS
import "../../global/styles/main.scss"

// Import Global Modal Style
import "../../global/styles/modalStyle.scss"

// Import Boxicons
import "boxicons";

// Using React Bootstrap for the Modal Form
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button"

import Form from 'react-bootstrap/Form';

import Modal from "react-bootstrap/Modal";


function MyVerticallyCenteredModal(props) {
    return (
        <div className="use-react-bootstrap">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="use-react-bootstrap"
            >
                <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
      
    );
}
  
function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="use-react-bootstrap">
        <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
        </Button>

        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </div>
    );
}

  
export default App;