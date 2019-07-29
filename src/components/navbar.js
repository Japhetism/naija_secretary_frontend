import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        const { height } = this.props;
        return (
            <Nav 
                className="flex-column"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                style={{background: process.env.REACT_APP_BASE_COLOR, marginTop: '-30px', marginLeft: '-15px', height:height}}
            >
                <Link to="/dashboard"
                    style={{ padding: '10px',
                        paddingLeft: '30px',
                        background: '#ffffff',
                        color: process.env.REACT_APP_BASE_COLOR,
                        marginTop: '5px',
                        marginBottom: '5px',
                        textDecoration: 'none',
                        borderRight: 'solid 4px',
                        fontWeight: 'bold',
                    }}>
                    <i className="fa fa-tachometer fa-lg" aria-hidden="true" style={{marginRight: '10px'}}></i>
                    Dashboard
                </Link>
                <Link to="/wallet"
                    style={{ padding: '10px',
                        paddingLeft: '30px',
                        background: '#ffffff',
                        color: process.env.REACT_APP_BASE_COLOR,
                        marginTop: '5px',
                        marginBottom: '5px',
                        textDecoration: 'none',
                        borderRight: 'solid 4px',
                        fontWeight: 'bold',
                    }}>
                    <i className="fa fa-address-card" style={{marginRight: '10px'}}></i>
                    My Wallet
                </Link>
                <Link to="/documents"
                    style={{ padding: '10px',
                        paddingLeft: '30px',
                        background: '#ffffff',
                        color: process.env.REACT_APP_BASE_COLOR,
                        marginTop: '5px',
                        marginBottom: '5px',
                        textDecoration: 'none',
                        borderRight: 'solid 4px',
                        fontWeight: 'bold',
                    }}>
                    <i className="fa fa-exchange fa-lg" style={{marginRight: '10px'}}></i>
                    My Documents
                </Link>
                <Link to="/help" 
                    style={{ padding: '10px',
                        paddingLeft: '30px',
                        background: '#ffffff',
                        color: process.env.REACT_APP_BASE_COLOR,
                        marginTop: '5px',
                        marginBottom: '5px',
                        textDecoration: 'none',
                        borderRight: 'solid 4px',
                        fontWeight: 'bold',
                    }}>
                    <i className="fa fa-file" aria-hidden="true" style={{marginRight: '10px'}}></i>
                    Help
                </Link>
            </Nav>
        );
    }
}
