import React from 'react';
import DetectScreen from '../detect-screen';
import { Link } from 'react-router-dom';

export default class HeaderScreen extends DetectScreen {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Home'
        }
    }
    
    render() {
        return <React.Fragment>
            
            <header class="main_menu home_menu">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <a class="navbar-brand" href="/" style={{color: '#ffffff', fontSize: '30px', fontWeight: 'bold'}}>
                                    Income & Asset Declaration
                                    {/* <img src="img/logo.png" alt="logo" /> */}
                                </a>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="ti-menu"></span>
                                </button>

                                <div
                                    class="collapse navbar-collapse main-menu-item justify-content-center"
                                    id="navbarSupportedContent"
                                >
                <ul class="navbar-nav align-items-center">
                  <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Help
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="/help/faqs">FAQs</a>
                      <a class="dropdown-item" href="/help/documentations"
                        >Documentation</a
                      >
                      <a class="dropdown-item" href="/help/videos">Videos</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/signup">Signup</a>
                  </li>
                  
                </ul>
              </div>
              {/* <div class="social_icon d-none d-lg-block">
                <a href="#"><i class="ti-facebook"></i></a>
                <a href="#"><i class="ti-twitter-alt"></i></a>
                <a href="#"><i class="ti-dribbble"></i></a>
                <a href="#"><i class="ti-instagram"></i></a>
              </div> */}
            </nav>
          </div>
        </div>
      </div>
    </header>

        </React.Fragment>
    }
}