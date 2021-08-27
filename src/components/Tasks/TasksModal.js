// Import Main SCSS
import "../../global/styles/main.scss"

// Import Global Modal Style
import "../../global/styles/modalStyle.scss"

// Import Boxicons
import "boxicons";

// Using React Bootstrap for the Modal Form
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Form from 'react-bootstrap/Form';


function TasksModal() {

    return (
        <div className="modal">

            <div className="modal-container">
                <input id="modal-toggle" type="checkbox"></input>
                <label className="modal-btn-secondary" for="modal-toggle">
                    <span><h4>Add Task <box-icon name='pencil' type='solid' size="18px" color="white"></box-icon></h4></span>  
                </label> 
                
                <label className="modal-backdrop" for="modal-toggle"></label>
                <div className="modal-content">
                    <label className="modal-close" for="modal-toggle">&#x2715;</label>
                    <h2>Add Task</h2><hr />
                    <div className="inside-modal use-react-bootstrap" >
                        

                        <Container>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group controlId="selected_store">
                                            <Form.Label>Store</Form.Label>
                                            <Form.Control as="select" >
                                                
                                                
                                            </Form.Control>

                                        </Form.Group>

                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group controlId="selected_mode">
                                            <Form.Label>Mode</Form.Label>
                                            <Form.Control as="select" >
                                                
                                            </Form.Control>
                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group controlId="selected_profile">
                                            <Form.Label>Profile</Form.Label>
                                            <Form.Control as="select" >
                                                
                                            </Form.Control>
                                        </Form.Group>

                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Proxy</Form.Label>
                                            <Form.Control as="select">
                                                
                                            </Form.Control>
                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <br/>
                                        <Form.Label>Product</Form.Label>
                                        <Form.Control type="text" placeholder="Product"/>
                                        <br/>
                                        <Form.Label>Delay</Form.Label>
                                        <Form.Control type="number" placeholder="Delay"/>
                                        <br/>
                                        <Form.Label>Threads</Form.Label>
                                        <Form.Control type="number" placeholder="Threads"/>
                                    </Col>

                                </Row>
                            </Container>
                    </div>
                    
                    <label className="modal-content-btn" for="modal-toggle">Submit</label>   
                </div>          
            </div>  

        </div>
    )
}

export default TasksModal;



