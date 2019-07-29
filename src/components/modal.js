import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';

export default class ModalComponent extends React.Component {
    
    render() {
        let { showModal } = this.props;
        
        return (
            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title>System Response</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Please Wait</h6>
                    <Spinner animation="grow" variant="primary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="light" />
                    <Spinner animation="grow" variant="dark" />
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary">Close</Button> */}
                </Modal.Footer>
            </Modal>
        );
    }
}