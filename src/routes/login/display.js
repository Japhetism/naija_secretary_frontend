import React from 'react';

export default class LoginDisplay extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header class="header_area">
          <div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container box_1620">
                <a class="navbar-brand logo_h" style={{color: '#ffffff', fontSize: '25px', fontWeight: 'bold'}} href="#">Income & Assets Declaration</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                  <ul class="nav navbar-nav menu_nav justify-content-end">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li> 
                    <li class="nav-item"><a class="nav-link" href="#">Feature</a></li> 
                    <li class="nav-item"><a class="nav-link" href="#">FAQs</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                    <li class="nav-item active"><a class="nav-link" href="/login">Login</a></li>
                  </ul>

                  <ul class="navbar-right">
                    <li class="nav-item">
                      <a href="/signup" class="button button-header bg">Sign up</a>
                    </li>
                  </ul>
                </div> 
              </div>
            </nav>
          </div>
        </header>

        <main class="side-main">
      
        <section class="hero-banner mb-30px">
          <div class="container">
            <div class="row">
                <div class="col-lg-5">
                <div class="hero-banner__img">
                    <form>
                        <div style={{borderRadius: '10px', backgroundColor: '#ffffff', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '50px'}}> 
                        <h2 style={{color: '#042A9B', textAlign: 'center', paddingTop: '10px'}}>Login</h2>
                        <div class="row row-field">
                           
                            <div class="col-md-12">
                                <label>Email Address</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="row row-field">
                            <div class="col-md-12">
                                <label>Password</label>
                                <input type="password" class="form-control" />
                            </div>
                        </div>
                        <div class="row row-field">
                            <div class="col-md-6">
                            <button class="btn btn-primary" style={{width: '100px', fontSize: '15px', backgroundColor: '#042A9B', borderColor: '#042A9B'}}>Login</button>
                            </div>
                            <div class="col-md-6" style={{textAlign: 'right'}}>
                            <a href="/signup" class="btn btn-primary" style={{width: '100px', fontSize: '15px', backgroundColor: '#042A9B', borderColor: '#042A9B', color: '#ffffff'}}>Signup</a>
                            </div>
                        </div>
                    </div>
                
                </form>
            </div>
        </div>
              <div class="col-lg-7 pt-5">
                <div class="hero-banner__content">
                  <h1>Income & Assets Declaration</h1>
                  <p>Vel aliquam quis, nulla pede mi commodo tristique nam hac Luctun torquent velit felis commodo pellentesque nulla cras vel aliqua quisan nulla pede mi commoda</p>
                  <a class="button bg" href="#">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
      </main>
      <footer class="footer-area section-gap">
		    <div class="container">
			    <div class="row">
            <div class="col-xl-4 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Top Products</h4>
              <ul>
                <li><a href="#">House Declaration</a></li>
                <li><a href="#">Vehicle Declaration</a></li>
                <li><a href="#">Office Declaration</a></li>
              </ul>
            </div>
            <div class="col-xl-4 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Support Service</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div class="col-xl-4 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Experts</a></li>
                <li><a href="#">Agencies</a></li>
              </ul>
            </div>
			    </div>
		    </div>
	    </footer>
      </React.Fragment>
    );
  }
}