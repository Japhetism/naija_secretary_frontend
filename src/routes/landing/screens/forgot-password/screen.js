import React from 'react';

export default class ForgotPasswordScreen extends React.Component {
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
                    <h2 style={{color: '#042A9B', textAlign: 'center', paddingTop: '30px'}}>Forgot Password</h2>
                    <div class="row row-field">       
                      <div class="col-md-12">
                        <label>Email Address</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="row row-field">
                      <div class="col-md-12" style={{textAlign: 'center'}}>
                        <button class="btn btn-primary" style={{fontSize: '15px', backgroundColor: '#042A9B', borderColor: '#042A9B'}}>Reset my Password</button>
                      </div>
                    </div>
                    <div class="row row-field">
                      <div class="col-md-12">
                        <a href="/login" style={{color: '#042A9B'}}>Back to Login</a>
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