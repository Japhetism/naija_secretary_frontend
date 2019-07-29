import React from 'react';
import { Row, Breadcrumb, Button } from 'react-bootstrap';

export default class BreadCrumb extends React.Component {
    render() {
        const { breadcrumbTitle, breadcrumbItems, buttonTitle, buttonLink } = this.props;
        return (   
            <div style={{marginTop: '-30px', marginLeft:'-15px'}}>
                <Row style={{background: '#E9ECEF', paddingTop: '5px', paddingLeft: '15px', color: process.env.REACT_APP_BASE_COLOR}}>
                    <h4>{breadcrumbTitle}</h4>
                    <Button className="ml-auto" href={buttonLink} variant="primary" type="button" size="sm" style={{display: buttonTitle ? 'block':'none', background: process.env.REACT_APP_BASE_COLOR, borderColor: process.env.REACT_APP_BASE_COLOR, marginBottom: '10px'}}>{buttonTitle}</Button>
                </Row>
                <Row>
                    <Breadcrumb style={{width: '100%', marginTop: '-10px'}}>
                        <Breadcrumb.Item href="/dashboard" style={{color: process.env.REACT_APP_BASE_COLOR, fontWeight: process.env.REACT_APP_FONT_WEIGHT, textDecoration: 'none'}}>
                            Home
                        </Breadcrumb.Item>
                        {breadcrumbItems.map((item,index) => {
                            return(
                                <Breadcrumb.Item key={index} href={item.url} active={item.active}  style={{color: !item.active ? process.env.REACT_APP_BASE_COLOR : '', fontWeight: !item.active ? process.env.REACT_APP_FONT_WEIGHT : '', textDecoration: 'none'}}>
                                    {item.name}
                                </Breadcrumb.Item>
                            )
                        })}
                    </Breadcrumb>
                </Row>
            </div>
        );
    }
}