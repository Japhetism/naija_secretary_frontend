import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardScreen from './dashboard';

export default class HomeScreen extends React.Component {

    render() {
        return <React.Fragment>
            
            <Router>
                <Switch>
                    <Route exact path="/home/dashboard" component={DashboardScreen} />
                </Switch>
            </Router>

        </React.Fragment>
    }
}