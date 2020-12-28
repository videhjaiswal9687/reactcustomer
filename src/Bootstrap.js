import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, Table, Dropdown, DropdownButton} from 'react-bootstrap';
export default class Bootstrap extends Component
 {
     render()
     {
         return(
             <div>
                 <Container>
                     <h1>Enquiry form</h1>
                     <Row>
                         <Col sm={6}>
                             <Form>
                             <Form.Group controlId="FormGroupName">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Name"/>
                                </Form.Group>
                                <Form.Group controlId="FormGroupName">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="text" name="email" placeholder="email"/>
                                </Form.Group>
                                <Form.Group controlId="FormGroupName">
                                    <Form.Label>City:</Form.Label>
                                    <Form.Control  as="select">
                                        <option value="">select</option>
                                        <option value="indore">indore</option>
                                        <option value="puna">puna</option>
                                        
                                    </Form.Control>
                                </Form.Group>
                             </Form>

                         </Col>
                     </Row>
                 </Container>
             </div>
         )
     }
 }