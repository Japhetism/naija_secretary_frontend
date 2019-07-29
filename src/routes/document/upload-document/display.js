import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Divider from '../../../components/divider';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from '../../../components/navbar';
import Breadcrumb from '../../../components/breadcrumb';
import ModalComponent from '../../../components/modal';

export default class UploadDocumentDisplay extends React.Component {
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
                           <NavBar height="600px" />
                       </Col>
                       <Col md={10}>
                           <Breadcrumb breadcrumbTitle={'My Documents'} breadcrumbItems={[{'name':'My Documents','url': '/documents','active':false},{'name':'Upload Document','url': '/document/upload','active':true}]} />
                            <Row>
                                <Col md={5} style={{boxShadow: '10px 0px 8px 0px #888888'}}>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Select a File</Form.Label>
                                            <Form.Control type="file" size="lg" style={{border: 'solid 1.2px #33648B'}} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Font Size</Form.Label>
                                            <Form.Control type="text" size="lg" value="12" onChange={() =>{

                                            }}style={{border: 'solid 1.2px #33648B'}} />
                                        </Form.Group>
                                        <Form.Group controlId="example.ControlSelect1">
                                            <Form.Label>Font Style</Form.Label>
                                            <Form.Control size="lg" style={{border: 'solid 1.2px #33648B'}} as="select">
                                                <option>Times New Roman</option>
                                                <option>Arial Black</option>
                                                <option>Calibri</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="example.ControlSelect1">
                                            <Form.Label>Document Output Type</Form.Label>
                                            <Form.Control size="lg" style={{border: 'solid 1.2px #33648B'}} as="select">
                                                <option>.pdf</option>
                                                <option>.doc</option>
                                                <option>.xxl</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Button onClick={this.submitForm} variant="primary" type="submit" size="lg" style={{background: process.env.REACT_APP_BASE_COLOR, borderColor: process.env.REACT_APP_BASE_COLOR, marginBottom: '15px'}} block>Submit</Button>
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