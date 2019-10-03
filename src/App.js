import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPageDisplay from './routes/landing-page';
import SignupDisplay from './routes/signup';
import LoginDisplay from './routes/login';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPageDisplay} />
          <Route exact path="/signup" component={SignupDisplay} />
          <Route exact path="/login" component={LoginDisplay} />
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