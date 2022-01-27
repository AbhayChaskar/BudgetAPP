import React from 'react'
import { Card, Form, Container, Button,Table,Row,Col } from 'react-bootstrap'


export default function Home() {
    return (
        <div>
            <div className="mt-5">
           <Container>
                <Row>
                    <Col lg={6} sm={12}>
                <Card style={{ width: 400, border:"2px solid green"}} className="mt-4">
                    <Card.Body>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Please Enter your Budget</Form.Label>
                            <Form.Control style={{border:"2px solid green"}} type="text" placeholder="Budget" />
                        </Form.Group>
                        <Button variant="outline-success">Calculate</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col lg={6} sm={12}>
                <Table className="mt-4">
                    <thead>
                        <tr>
                            <th>BUDGET</th>
                            <th>EXPENSES</th>
                            <th>BALANCE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i class="fas fa-money-bill-alt fa-3x text-primary" ></i></td>
                            <td><i class="far fa-credit-card fa-3x text-primary" ></i></td>
                            <td><i class="fas fa-dollar-sign fa-3x text-primary"></i></td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-dollar-sign text-success"></i></td>
                            <td><i class="fas fa-dollar-sign text-danger"></i></td>
                            <td><i class="fas fa-dollar-sign text-success"></i></td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
                </Row>
                </Container>
            </div>
            <div className="mt-5">
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} sm={12}>
                    <Card style={{ width: 400, border:" 2px solid red"}} className="mt-4">
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Please Enter your Expense</Form.Label>
                                <Form.Control style={{border:"2px solid red"}} type="text" placeholder="Expenses"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Please Enter your Expense Amount</Form.Label>
                                <Form.Control style={{border:"2px solid red"}} type="text" placeholder="Amount" />
                            </Form.Group>
                            <Button variant="outline-danger">Add Expense</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={6} sm={12}>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th>Expense Title</th>
                                <th>Expense Value</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-danger"></td>
                                <td className="text-danger"></td>
                                <td><i className="fas fa-edit text-primary"></i></td>
                                <td><i className="far fa-trash-alt text-danger" ></i></td>
                            </tr>
                        </tbody>
                    </Table>
                    </Col>
                  </Row>
                </Container>
            </div>
        </div>
    )
}
