import React from "react";

// Import Main SCSS
import "../../global/styles/main.scss";

// Import Profile SCSS
import "./profileStyle.scss";

// Global Style for Table 
import "../../global/styles/tableStyle.scss";

// Container, Row and Col
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Form 
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


class Profile extends React.Component {
    render() {
      return (
          <div className="app">
            <h1 className="component_header_1">Profiles</h1>

            <div className="use-react-bootstrap">
                <Container>
                    <Form>
                        <Row>
                            <Col className="bubble-col">
                                <div className="component_header_3 profile-heading-padding">
                                    Profile Details
                                </div>


                                <Row>
                                    <Col >
                                        <br />
                                        <Form.Control name="name" id="name" size="sm" type="text" placeholder="Name" className="profile-form-input" style={{color: "white"}}/>
                                        
                                        <br />
                                        <Row>
                                            <Col>
                                                <Form.Control name="firstName" id="firstName" size="sm" type="text" placeholder="First Name" className="profile-form-input" style={{color: "white"}}/>
                                            </Col>

                                            <Col>
                                                <Form.Control name="lastName" id="lastName" size="sm" type="text" placeholder="Last Name" className="profile-form-input" style={{color: "white"}}/>
                                            </Col>
                                        </Row>

                                        <br />
                                        <Form.Control name="email" id="email" size="sm" type="email" placeholder="Email" className="profile-form-input" style={{color: "white"}}/>

                                        <br />
                                        <Form.Control name="phoneNumber" id="phoneNumber" size="sm" type="tel" placeholder="Phone Number" className="profile-form-input" style={{color: "white"}}/>

                                        
                                        
                                    </Col>

                                    <Col>
                                        <br />
                                        <Form.Control name="cardHolderName" id="cardHolderName" size="sm" type="text" placeholder="Card Holder Name" className="profile-form-input" style={{color: "white"}}/>
                                        
                                        <br />
                                        <Form.Control name="cardNumber" id="cardNumber" size="sm" type="text" placeholder="Card Number" className="profile-form-input" style={{color: "white"}}/>

                                        <br />
                                        <Row>
                                            <Col sm={5}>
                                                <Form.Control name="cvv" id="cvv" size="sm" type="text" placeholder="CVV" className="profile-form-input" style={{color: "white"}}/>
                                            </Col>

                                            <Col sm={7}>
                                                <Form.Control name="expiration" id="expiration" size="sm" type="text" placeholder="Expiration (Mo/Yr)" className="profile-form-input" style={{color: "white"}}/>
                                            </Col>
                                        </Row>
                                        
                                    </Col>

                                </Row>

                                <div className="profile-divider"></div>

                                <Row>
                                    <Col>
                                        <div className="component_header_3 profile-heading-padding">
                                            Billing Address
                                        </div>

                                        <br />
                                        <Form.Control name="bill-addr-1" id="bill-addr-1" size="sm" type="text" placeholder="Address Line 1" className="profile-form-input" style={{color: "white"}}/>

                                        <br />
                                        <Form.Control name="bill-addr-2" id="bill-addr-2" size="sm" type="text" placeholder="Address Line 2" className="profile-form-input" style={{color: "white"}}/>

                                        <br />
                                        <Form.Control name="bill-city" id="bill-addr-city" size="sm" type="text" placeholder="City" className="profile-form-input" style={{color: "white"}}/>

                                        <br />
                                        <Row>
                                            <Col sm={6}>
                                                <Form.Control name="bill-country" id="bill-country" size="sm" type="text" placeholder="Country" className="profile-form-input" style={{color: "white"}}/>
                                            </Col>

                                            <Col sm={6}>
                                                <Form.Control name="bill-zip" id="bill-zip" size="sm" type="text" placeholder="Post Code" className="profile-form-input" style={{color: "white"}}/>
                                            </Col>
                                        </Row>

                                        

                                    
                                    </Col>
                    
                                    <Col>
                                        <div className="component_header_3 profile-heading-padding">
                                            Delivery Address
                                        </div>

                                        <br />
                                        <Form.Control name="del-addr-1" id="del-addr-1" size="sm" type="text" placeholder="Address Line 1" className="profile-form-input" style={{color: "white"}}/>

                                        <br />
                                        <Form.Control name="del-addr-2" id="del-addr-2" size="sm" type="text" placeholder="Address Line 2" className="profile-form-input" style={{color: "white"}}/>

                                        <br />
                                        <Form.Control name="del-city" id="del-addr-city" size="sm" type="text" placeholder="City" className="profile-form-input" style={{color: "white"}}/>

                                        <br />
                                        <Row>
                                            <Col sm={6}>
                                                <Form.Control name="del-country" id="del-country" size="sm" type="text" placeholder="Country" className="profile-form-input" style={{color: "white"}}/>
                                            </Col>

                                            <Col sm={6}>
                                                <Form.Control name="del-zip" id="del-zip" size="sm" type="text" placeholder="Post Code" className="profile-form-input" style={{color: "white"}}/>
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>

                                <br />
                                <br />


                            </Col>

                            <Col className="bubble-col component_header_3">
                                <div className="component_header_3 profile-heading-padding">
                                    Profiles
                                </div>

                                <div className="profile-table">
                                    <table>
                                        {/* Table Headings */}
                                        <tr>
                                            <th>Name</th>
                                            <th>Ending</th>
                                            <th>Action</th>
                                        </tr>

                                        {/* Table Body */}
                                        <tr>
                                            <td>Debit</td>
                                            <td>2645</td>
                                            <td>
                                                <a href="/" alt=""><box-icon name='pencil' type='solid' color="lightgreen"></box-icon></a>
                                                <a href="/" alt=""><box-icon name='x' type='solid' color="red" ></box-icon></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Monzo</td>
                                            <td>8646</td>
                                            <td>
                                                <a href="/" alt=""><box-icon name='pencil' type='solid' color="lightgreen"></box-icon></a>
                                                <a href="/" alt=""><box-icon name='x' type='solid' color="red" ></box-icon></a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </Col>
                        </Row>

                        
                    </Form>
                </Container>
            </div>
            
            


          </div>
      );
    }
}

export default Profile;