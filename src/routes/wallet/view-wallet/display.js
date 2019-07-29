import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Divider from '../../../components/divider';
import { Container, Row, Col, Table, Badge } from 'react-bootstrap';
import NavBar from '../../../components/navbar';
import Breadcrumb from '../../../components/breadcrumb';

export default class ViewWalletDisplay extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Container fluid style={{margin: '30px 0px 0px 0px'}}>
                    <Row>
                       <Col md={2}>
                           <NavBar height={'500px'}/>
                       </Col>
                       <Col md={10}>
                           <Breadcrumb 
                                breadcrumbTitle={'My Wallet'} 
                                breadcrumbItems={[{'name':'My Wallet','url': '/wallet','active':true}]} 
                                buttonTitle={'Credit Wallet'}
                                buttonLink={'/wallet/credit'}
                            />
                            <Row>
                                <Col md={{span:10, offset:1}} style={{boxShadow: '10px 0px 8px 0px #888888'}}>
                                    <h3 style={{padding: '20px'}}>Transaction History</h3>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Service</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th>Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>July 25, 2019</td>
                                                <td>Document Typing</td>
                                                <td>&#8358;300</td>
                                                <td><Badge variant="danger">Debit</Badge></td>
                                                <td>&#8358;600</td>
                                            </tr>
                                            <tr>
                                                <td>July 22, 2019</td>
                                                <td>First Time Bonus</td>
                                                <td>&#8358;200</td>
                                                <td><Badge variant="success">Credit</Badge></td>
                                                <td>&#8358;900</td>
                                            </tr>
                                            <tr>
                                                <td>July 21, 2019</td>
                                                <td>Document Typing</td>
                                                <td>&#8358;300</td>
                                                <td><Badge variant="danger">Debit</Badge></td>
                                                <td>&#8358;700</td>
                                            </tr>
                                            <tr>
                                                <td>July 20, 2019</td>
                                                <td>Wallet Credit</td>
                                                <td>&#8358;1000</td>
                                                <td><Badge variant="success">Credit</Badge></td>
                                                <td>&#8358;1000</td>
                                            </tr>
                                        </tbody>
                                    </Table>
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