import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Divider from '../../../components/divider';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../../components/navbar';
import Breadcrumb from '../../../components/breadcrumb';

export default class EditDocumentDisplay extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Container fluid style={{margin: '30px 0px 50px 0px'}}>
                    <Row>
                       <Col md={2}>
                           <NavBar />
                       </Col>
                       <Col md={10}>
                           <Breadcrumb breadcrumbTitle={'My Documents'} breadcrumbItems={[{'name':'My Documents','url': '/documents','active':false},{'name':'Edit Document','url': '/','active':true}]} />
                       </Col>
                    </Row>
                </Container>
                <Divider />
                <Footer />
            </React.Fragment>
        );
    }
}