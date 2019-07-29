import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './routes/home';
import Login from './routes/login';
import Register from './routes/register';
import ForgotPassword from './routes/password-forgot';
import ResetPassword from './routes/passoword-reset';
import Dashboard from './routes/dashboard';
import ViewWallet from './routes/wallet/view-wallet';
import CreditWallet from './routes/wallet/credit-wallet';
import UploadDocument from './routes/document/upload-document';
import ViewDocuments from './routes/document/view-documents';
import ViewDocument from './routes/document/view-document';
import EditDocument from './routes/document/edit-document';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/password/forgot" component={ForgotPassword} />
          <Route exact path="/password/reset" component={ResetPassword} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/wallet" component={ViewWallet} />
          <Route exact path="/wallet/credit" component={CreditWallet} />
          <Route exact path="/documents" component={ViewDocuments} />
          <Route exact path="/documents/:id/view" component={ViewDocument} />
          <Route exact path="/documents/:id/edit" component={EditDocument} />
          <Route exact path="/documents/upload" component={UploadDocument} />
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