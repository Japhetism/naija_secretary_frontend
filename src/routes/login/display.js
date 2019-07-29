import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Divider from '../../components/divider';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default class LoginDisplay extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Container fluid style={{margin: '30px 0px 50px 0px'}}>
                    <Row>
                        <Col md={3} className="mx-auto" style={{textAlign: 'center', paddingBottom: '20px'}}>
                            <h3 style={{color: process.env.REACT_APP_BASE_COLOR, fontWeight: 'bold'}}>Login</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} className="mx-auto" style={{border: 'dashed 1.2px #33648B', borderRadius: '12px'}}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" size="lg" style={{border: 'solid 1.2px #33648B'}} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" size="lg" style={{border: 'solid 1.2px #33648B'}} />
                                </Form.Group>
                                <Button variant="primary" type="submit" size="lg" style={{background: process.env.REACT_APP_BASE_COLOR, borderColor: process.env.REACT_APP_BASE_COLOR, marginBottom: '15px'}} block>Login</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="mx-auto" style={{textAlign: 'center', paddingTop: '20px', fontWeight: 'bold'}}>
                            <span><a style={{color: process.env.REACT_APP_BASE_COLOR, textDecoration: 'none'}} href="/register">Create an account instead</a></span><br/>
                            <span><a style={{color: process.env.REACT_APP_BASE_COLOR, textDecoration: 'none'}} href="/password/forgot">Forgot password?</a></span>
                        </Col>
                    </Row>
                </Container>
                <Divider />
                <Footer />
            </React.Fragment>
        );
    }
}