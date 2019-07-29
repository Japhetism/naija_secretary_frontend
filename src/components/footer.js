import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <Container fluid style={{padding: '60px', fontSize: '15px', color: 'grey'}}> 
                <Row>
                    <Col md={11} sm={12} xs={12} className="mx-auto">
                        <Row>
                            <Col md={7} sm={12} xs={12}>
                                <p>
                                    Naija Secretary is an online platform that provide convenient and effective 
                                    way to get all you need when it comes to document
                                </p>
                                <p>0706 348 6561 (Mon-Fri from 9am-5pm) - contact@naijasecretary.com</p>    
                                <p>&copy; 2019 - 2020 Naija Secretary </p>   
                            </Col>
                            <Col md={4} sm={12} xs={12}>
                                <Row>
                                    <Col md={6} sm={6} xs={6}>
                                        <ul style={{listStyleType: 'none'}}>
                                            <li style={{paddingBottom: '10px'}}><h6>QUICK LINKS</h6></li>
                                            <li style={{paddingBottom: '10px'}}><a style={{textDecoration: 'none', color: 'grey'}} href="/">Upload Document</a></li>
                                            <li style={{paddingBottom: '10px'}}><a style={{textDecoration: 'none', color: 'grey'}} href="/">Download Document</a></li>
                                            <li style={{paddingBottom: '10px'}}><a style={{textDecoration: 'none', color: 'grey'}} href="/">Take a Survey</a></li>
                                        </ul>
                                    </Col>
                                    <Col md={5} sm={5} xs={6}>
                                        <ul style={{listStyleType: 'none'}}>
                                            <li style={{paddingBottom: '10px'}}><h6>COMPANY</h6></li>
                                            <li style={{paddingBottom: '10px'}}><a style={{textDecoration: 'none', color: 'grey'}} href="/">Contact Us</a></li>
                                            <li style={{paddingBottom: '10px'}}><a style={{textDecoration: 'none', color: 'grey'}} href="/">Our Bond</a></li>
                                            <li style={{paddingBottom: '10px'}}><a style={{textDecoration: 'none', color: 'grey'}} href="/">How it Works</a></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}