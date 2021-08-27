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


function ProxiesModal() {

    return (
        <div className="modal">

            <div className="modal-container">
                <input id="modal-toggle" type="checkbox"></input>
                <label className="modal-btn-secondary" for="modal-toggle">
                    <span><h4>Add Proxy <box-icon name='pencil' type='solid' size="18px" color="white"></box-icon></h4></span>  
                </label> 
                
                <label className="modal-backdrop" for="modal-toggle"></label>
                <div className="modal-content">
                    <label className="modal-close" for="modal-toggle">&#x2715;</label>
                    <h2>Add Task</h2><hr />
                    <div className="inside-modal use-react-bootstrap" >
                        

                        <Container>
                            <Row>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Proxy Name</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Length</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <Button variant="danger" type="submit" size="md">
                                        Add Proxy
                                    </Button>
                                </Form>
                            </Row>
                        </Container>
                    </div>
                    
                    <label className="modal-content-btn" for="modal-toggle">Close</label>   
                </div>          
            </div>  

        </div>
    )
}

export default ProxiesModal;



