import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Divider from '../../components/divider';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import NavBar from '../../components/navbar';
import Breadcrumb from '../../components/breadcrumb';
import CardComponent from '../../components/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class ForgotPasswordDisplay extends React.Component {
    render() {
        const data = [
            {
              name: '20', wallet: 1000,
            },
            {
                name: '21', wallet: 700,
            },
            {
                name: '22', wallet: 900,
            },
            {
                name: '23', wallet: 900,
            },
            {
                name: '24', wallet: 900,
            },
            {
                name: '25', wallet: 600,
            },
            {
                name: '26', wallet: 600,
            },
            {
                name: '27', wallet: 600,
            },
            {
                name: '28', wallet: 600,
            },
            {
              name: '29', wallet: 600,
            },
          ];
        return(
            <React.Fragment>
                <Header />
                <Container fluid style={{margin: '30px 0px 0px 0px'}}>
                    <Row>
                       <Col md={2}>
                           <NavBar height={'600px'} />
                       </Col>
                       <Col md={10}>
                           <Breadcrumb 
                                breadcrumbTitle={'Dashboard'} 
                                breadcrumbItems={[{'name':'Dashboard','url': '/dashboard','active':true}]} 
                            />
                            <Row>
                                <Col md={2}>
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
                                                cardTitle={'Upload Document '} 
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
                                <Col md={10} style={{paddingLeft: '250px'}}>
                                    <Row>
                                        <Col md={12}>
                                            <Row>
                                                <Col md={9}>
                                                    <h5>Spend Analysis </h5>
                                                </Col>
                                                <Col md={3}>
                                                    <Button className="mr-auto" href="wallet/credit" variant="primary" type="button" size="sm" style={{background: process.env.REACT_APP_BASE_COLOR, borderColor: process.env.REACT_APP_BASE_COLOR}}>Credit Wallet</Button>
                                                </Col>
                                            </Row>
                                            <h6>Wallet Balance <Badge variant="secondary">&#8358;4300</Badge></h6>
                                            <LineChart
                                                width={600}
                                                height={350}
                                                data={data}
                                                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Line type="monotone" dataKey="wallet" stroke="#8884d8" activeDot={{ r: 8 }} />
                                            </LineChart>
                                        </Col>
                                    </Row>
                                </Col>
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