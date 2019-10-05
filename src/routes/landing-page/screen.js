import React from 'react';
import DetectScreen from '../../components/detect-screen';

export default class LandingPageScreen extends DetectScreen {
  render() {
    return (
      <React.Fragment>
        <header class="header_area">
          <div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container box_1620">
                <a class="navbar-brand logo_h" style={{color: '#ffffff', fontSize: this.state.isDevicePC ? '25px' : '20px', fontWeight: 'bold'}} href="#">Income & Assets Declaration</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                  <ul class="nav navbar-nav menu_nav justify-content-end">
                    <li class="nav-item active"><a class="nav-link" href="/">Home</a></li> 
                    <li class="nav-item"><a class="nav-link" href="#">Feature</a></li> 
                    <li class="nav-item"><a class="nav-link" href="#">FAQs</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                    <li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
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
              <div class="col-lg-7">
                <div class="hero-banner__img">
                  <img class="img-fluid" src="./assets/img/properties.jpg" alt="" />
                </div>
              </div>
              <div class="col-lg-5 pt-5">
                <div class="hero-banner__content">
                  <h1>Income & Assets Declaration</h1>
                  <p>Vel aliquam quis, nulla pede mi commodo tristique nam hac Luctun torquent velit felis commodo pellentesque nulla cras vel aliqua quisan nulla pede mi commoda</p>
                  <a class="button bg" href="#">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="section-margin">
          <div class="container">
            <div class="section-intro pb-85px text-center">
              <h2 class="section-intro__title">Awesome Soft Feature</h2>
              <p class="section-intro__subtitle">Vel aliquam quis, nulla pede mi commodo tristique nam hac. Luctus torquent velit felis commodo pellentesque nulla cras. Tincidunt hacvel alivquam quis nulla pede mi commodo tristique nam hac  luctus torquent</p>
            </div>

            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                    <span class="card-feature__icon">
                      <i class="ti-package"></i>
                    </span>
                    <h3 class="card-feature__title">Unique Design</h3>
                    <p class="card-feature__subtitle">Molestie lorem est faucibus faucibus erat phasellus placerat proin aptent</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                    <span class="card-feature__icon">
                      <i class="ti-mouse-alt"></i>
                    </span>
                    <h3 class="card-feature__title">Business Solution</h3>
                    <p class="card-feature__subtitle">Molestie lorem est faucibus faucibus erat phasellus placerat proin aptent</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                    <span class="card-feature__icon">
                      <i class="ti-headphone-alt"></i>
                    </span>
                    <h3 class="card-feature__title">Customer Support</h3>
                    <p class="card-feature__subtitle">Molestie lorem est faucibus faucibus erat phasellus placerat proin aptent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <section class="section-padding--small bg-magnolia">
          <div class="container">
            <div class="row no-gutters align-items-center">
              <div class="col-md-5 mb-5 mb-md-0">
                <div class="about__content">
                  <h2>House Declaration</h2>
                  <p>Molestie lorem est faucibus Faucibus erat phasellus placerat proinint aptent pulvinar fusce nostra porta sem platea nec, donec fusce erat Molestie lorem est faucibus faucibus erat phasellus placerat proin aptent pulvinar fusce nostra port</p>
                  <a class="button button-light" href="#">Know More</a>
                </div>
              </div>
              <div class="col-md-7">
                <div class="about__img">
                  <img class="img-fluid" src="./assets/img/house.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="section-margin">
          <div class="container">
            <div class="section-intro pb-85px text-center">
              <h2 class="section-intro__title">Features We Offer</h2>
              <p class="section-intro__subtitle">Vel aliquam quis, nulla pede mi commodo tristique nam hac. Luctus torquent velit felis commodo pellentesque nulla cras. Tincidunt hacvel alivquam quis nulla pede mi commodo tristique nam hac  luctus torquent</p>
            </div>

            <div class="row">
              <div class="col-lg-6">

                <div class="row offer-single-wrapper">
                  <div class="col-lg-6 offer-single">
                    <div class="card offer-single__content text-center">
                      <span class="offer-single__icon">
                        <i class="ti-pencil-alt"></i>
                      </span>
                      <h4>Easy To Manage</h4>
                      <p>Posuere porttitor justo ornare dictum ultricies enim imperdiet integer habitant.</p>
                    </div>
                  </div>
                  
                  <div class="col-lg-6 offer-single">
                    <div class="card offer-single__content text-center">
                      <span class="offer-single__icon">
                        <i class="ti-ruler-pencil"></i>
                      </span>
                      <h4>Analytics Tool</h4>
                      <p>Posuere porttitor justo ornare dictum ultricies enim imperdiet integer habitant.</p>
                    </div>
                  </div>
                </div>

                <div class="row offer-single-wrapper">
                  <div class="col-lg-6 offer-single">
                    <div class="card offer-single__content text-center">
                      <span class="offer-single__icon">
                        <i class="ti-cut"></i>
                      </span>
                      <h4>Professionals Tools</h4>
                      <p>Posuere porttitor justo ornare dictum ultricies enim imperdiet integer habitant.</p>
                    </div>
                  </div>
                  
                  <div class="col-lg-6 offer-single">
                    <div class="card offer-single__content text-center">
                      <span class="offer-single__icon">
                        <i class="ti-light-bulb"></i>
                      </span>
                      <h4>Ready Content</h4>
                      <p>Posuere porttitor justo ornare dictum ultricies enim imperdiet integer habitant.</p>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-lg-6">
                <div class="offer-single__img">
                  <img class="img-fluid" src="./assets/img/dashboard.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section class="section-padding--small bg-magnolia">
          <div class="container">
            <div class="row align-items-center pt-xl-3 pb-xl-5">
              <div class="col-lg-6">
                <div class="solution__img text-center text-lg-left mb-4 mb-lg-0">
                  <img class="img-fluid" src="./assets/img/car.png" alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="solution__content">
                  <h2>Vehicle Declaration</h2>
                  <p>Molestie lorem est faucibus Faucibus erat phasellus placerat proinint aptent pulvinar fusce nostra porta sem platea nec, donec fusce erat Molestie lorem est faucibus faucibus erat phasellus placerat proin aptent pulvinar fusce nostra port</p>
                  <a class="button button-light" href="#">Know More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="section-padding--small bg-magnolia">
          <div class="container">
            <div class="row align-items-center pt-xl-3 pb-xl-5">
              <div class="col-lg-6">
                <div class="solution__img text-center text-lg-left mb-4 mb-lg-0">
                  <img class="img-fluid" src="./assets/img/office.jpg" alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="solution__content">
                  <h2>Office Declaration</h2>
                  <p>Molestie lorem est faucibus Faucibus erat phasellus placerat proinint aptent pulvinar fusce nostra porta sem platea nec, donec fusce erat Molestie lorem est faucibus faucibus erat phasellus placerat proin aptent pulvinar fusce nostra port</p>
                  <a class="button button-light" href="#">Know More</a>
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