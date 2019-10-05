import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPageScreen from './routes/landing-page';
import SignupDisplay from './routes/signup';
import LoginScreen from './routes/login';
import ForgotPassword from './routes/forgot-password';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPageScreen} />
          <Route exact path="/signup" component={SignupDisplay} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);