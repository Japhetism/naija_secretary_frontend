import React from 'react';

export default class LoginScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      usernameErrorMessage: null,
      passwordErrorMessage: null,
    }
  }

  async authenticateUser () {
    this.displayErrorMessage('password', this.isPasswordFieldValid())
    this.displayErrorMessage('username', this.isUsernameFieldValid())
  }

  isUsernameFieldValid () {
    return !this.state.username
  }

  isPasswordFieldValid () {
    return !this.state.password
  }

  displayErrorMessage (fieldName, error) {
    const field = fieldName+'ErrorMessage'
    if(error) {
      this.setState({[field]: fieldName+' field is required'})
    }else{
      this.setState({[field]: null})
    }
  }

  render() {
    return <React.Fragment>
       
      <section class="banner_part">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="banner_text">
                <div class="banner_text_iner">
                  <form>
                    <div style={{borderRadius: '10px', backgroundColor: '#ffffff', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '50px'}}> 
                      <h2 style={{color: '#042A9B', textAlign: 'center', paddingTop: '30px'}}>Login</h2>
                      <div class="row row-field">       
                        <div class="col-md-12">
                          <label>Username</label>
                          <input type="text" class="form-control" onChange={(event) => this.setState({username: event.target.value})} />
                          <span style={{color: 'red'}}>{this.state.usernameErrorMessage}</span>
                        </div>
                      </div>
                      <div class="row row-field">
                        <div class="col-md-12">
                          <label>Password</label>
                          <input type="password" class="form-control" onChange={(event) => this.setState({password: event.target.value})} />
                          <span style={{color: 'red'}}>{this.state.passwordErrorMessage}</span>
                        </div>
                      </div>
                      <div class="row row-field">
                        <div class="col-md-12">
                          <button class="btn btn-primary form-control" onClick={(e) => {
                            e.preventDefault()
                            this.authenticateUser()
                          }} style={{fontSize: '15px', backgroundColor: '#042A9B', borderColor: '#042A9B'}}>Login</button>
                        </div>
                      </div>
                      <div class="row row-field">
                        <div class="col-md-12">
                          <a href="/forgot-password" style={{color: '#042A9B'}}>Forgot Password?</a>
                          <a href="/signup" style={{color: '#042A9B', float: 'right'}}>Create an account</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner_text">
                <div class="banner_text_iner">
                  <h1>Income & Asset Declaration</h1>
                  <a href="#" class="btn_1">Explore Work</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </React.Fragment>
  }
}