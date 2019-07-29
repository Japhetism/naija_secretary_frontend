import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Divider from '../../../components/divider';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../../components/navbar';
import Breadcrumb from '../../../components/breadcrumb';

export default class CreditWalletDisplay extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Container fluid style={{margin: '30px 0px 0px 0px'}}>
                    <Row>
                       <Col md={2}>
                           <NavBar height={'300px'} />
                       </Col>
                       <Col md={10}>
                            <Breadcrumb 
                                breadcrumbTitle={'My Documents'} 
                                breadcrumbItems={[{'name':'My Documents','url': '/documents','active':true}]} 
                                buttonTitle={'Upload Document'}
                                buttonLink={'/documents/upload'}
                            />
                            <Row>
                                <span>Kindly specify the layout of for displaying documents</span>
                            </Row>
                       </Col>
                    </Row>
                </Container>
                <Divider />
                <Footer />
            </React.Fragment>
        );
    }
}