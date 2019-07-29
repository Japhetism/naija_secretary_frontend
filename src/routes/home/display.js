import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Divider from '../../components/divider';
import CardComponent from '../../components/card';
import { Container, Row, Col } from 'react-bootstrap';

export default class HomeDisplay extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Container fluid style={{margin: '30px 0px 50px 0px'}}>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={4}>
                                    <CardComponent 
                                        cardTitle={'Snap Document'} 
                                        cardText={'Take a snapshot or screenshot in JPEG or PNG file format'} 
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4} className="mx-auto">
                                    <CardComponent 
                                        cardTitle={'Upload Document'} 
                                        cardText={'Upload the snapshot or screenshot to initiate a work'} 
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4} className="ml-auto">
                                    <CardComponent 
                                        cardTitle={'Download Document'} 
                                        cardText={'Download the worked on snapshot or screenshot in MS-word, PDF or Excel'} 
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} className="mx-auto">
                            <img 
                                src={require('../../assets/images/key1.jpg')} 
                                alt={'Naija Secreatary'}
                                style={{width: '100%', height: '100%', paddingLeft: '15%'}}
                            />
                        </Col>
                    </Row>
                </Container>
                <Divider />
                <Footer />
            </React.Fragment>
        );
    }
}