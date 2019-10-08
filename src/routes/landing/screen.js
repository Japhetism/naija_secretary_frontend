import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderScreen from '../../components/landing-page/header';
import FooterScreen from '../../components/landing-page/footer';
import LandingPageScreen from './screens/landing-page';
import LoginScreen from './screens/login';
import ForgotPasswordScreen from './screens/forgot-password';
import SignupScreen from './screens/signup';

export default class LandingScreen extends React.Component {

    render() {
        return <React.Fragment>
            
            <Router>
                <HeaderScreen />
                <main class="side-main">
                    <Switch>
                        <Route exact path="/" component={LandingPageScreen} />
                        <Route exact path="/login" component={LoginScreen} />
                        <Route exact path="/forgot-password" component={ForgotPasswordScreen} />
                        <Route exact path="/signup" component={SignupScreen} />
                    </Switch>
                </main>
                <FooterScreen />
            </Router>

        </React.Fragment>
    }
}