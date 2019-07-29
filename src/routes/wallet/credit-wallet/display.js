import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Divider from '../../../components/divider';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import NavBar from '../../../components/navbar';
import Breadcrumb from '../../../components/breadcrumb';
import ModalComponent from '../../../components/modal';

export default class CreditWalletDisplay extends React.Component {
    state = {
        showModal: false,
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({showModal: true})
    }
    render() {
        return(
            <React.Fragment>
                <Header />
                <Container fluid style={{margin: '30px 0px 0px 0px'}}>
                    <Row>
                       <Col md={2}>
                           <NavBar height={'400px'} />
                       </Col>
                       <Col md={10}>
                            <Breadcrumb breadcrumbTitle={'My Wallet'} breadcrumbItems={[{'name':'My Wallet','url': '/wallet','active':false},{'name':'Credit My Wallet','url': '/wallet/credit','active':true}]} />
                            <Row>
                            <Col md={5} style={{boxShadow: '10px 0px 8px 0px #888888'}}>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Enter Amount</Form.Label>
                                            <Form.Control type="text" size="lg" style={{border: 'solid 1.2px #33648B'}} />
                                        </Form.Group>
                                        <Button onClick={this.submitForm} variant="primary" type="submit" size="lg" style={{background: process.env.REACT_APP_BASE_COLOR, borderColor: process.env.REACT_APP_BASE_COLOR, marginBottom: '15px'}} block>Continue</Button>
                                    </Form>
                                </Col>
                            </Row>
                       </Col>
                    </Row>
                </Container>
                <Divider />
                <Footer />
                <ModalComponent showModal={this.state.showModal} />
            </React.Fragment>
        );
    }
}