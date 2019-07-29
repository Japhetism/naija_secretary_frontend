import React from 'react';
import { Card } from 'react-bootstrap';

export default class CardComponent extends React.Component {
    render() {
        const { cardTitle, cardText } = this.props;
        return (
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{cardTitle}</Card.Title>
                    <Card.Text>{cardText}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}