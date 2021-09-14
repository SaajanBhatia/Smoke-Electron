import React from 'react';

// Import Main SCSS
import "../../global/styles/main.scss";

// Using react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import Card from 'react-bootstrap/Card';



const Settings = () => {
    
    return (
        <div>
            <h1 className="component_header_1">Settings</h1>
            <div className="use-react-bootstrap white-text">
            
                <Container >
                    <Card className="text-center" bg="dark" style={{border:"none"}}>
                        <Card.Body>
                            <Card.Title>Key Settings</Card.Title>
                            <Card.Text>
                                
                                <Form>

                                    
                                        <br />
                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                                2Captcha key
                                            </Form.Label>
                                            <Col sm="8">
                                            <Form.Control type="password" placeholder="Key" size="lg"/>
                                            </Col>
                                            <Col sm="2">
                                                <Button variant="success" size="lf" >Save</Button>
                                            </Col>
                                        </Form.Group>

                                        <br />
                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                                Anti Captcha key
                                            </Form.Label>
                                            <Col sm="8">
                                            <Form.Control type="password" placeholder="Key" size="lg"/>
                                            </Col>
                                            <Col sm="2">
                                                <Button variant="success" size="lf" >Save</Button>
                                            </Col>
                                        </Form.Group>

                                        <br />
                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                                Captcha Monster key
                                            </Form.Label>
                                            <Col sm="8">
                                            <Form.Control type="password" placeholder="Key" size="lg"/>
                                            </Col>
                                            <Col sm="2">
                                                <Button variant="success" size="lf" >Save</Button>
                                            </Col>
                                        </Form.Group>

                                        <br />

                                        <Form.Group>
                                            <Button as="input" type="reset" value="Reset Key" />
                                        </Form.Group>
                                    

                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
                
            </div>
        </div>
        
    )
};

export default Settings;