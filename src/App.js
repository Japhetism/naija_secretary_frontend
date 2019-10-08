import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingScreen from './routes/landing'
import HomeScreen from './routes/home'

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={HomeScreen} />
          <Route path="/" component={LandingScreen} />
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