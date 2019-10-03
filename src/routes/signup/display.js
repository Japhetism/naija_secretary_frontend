import React from 'react';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';

export default class SignupDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSection: "Section1",
        }
    }

    toggleSection (sectionName) {
        this.setState({showSection: sectionName});
    }
    render() {
        return (
            <React.Fragment>
                <header class="header_area" style={{backgroundColor: '#042A9B'}}>
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
                    <li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
                  </ul>

                  <ul class="navbar-right">
                    <li class="nav-item">
                      <a href="/signup" class="button button-header bg active">Sign up</a>
                    </li>
                  </ul>
                </div> 
              </div>
            </nav>
          </div>
        </header>

        <main class="side-main">
      
        <section class="section-margin">
            <div class="container-fluid row justify-content-md-center">
                <div class="col-md-8" style={{backgroundColor: '#EFF1F5', borderRadius: '4px'}}>
                    <section class="section-margin">
                        {this.state.showSection === "Section1" && 
                            <Section1 
                                handleNextClick={this.toggleSection.bind(this,'Section2')}
                            /> 
                        }
                        {this.state.showSection === "Section2" && 
                            <Section2 
                                handleNextClick={this.toggleSection.bind(this,'Section3')}
                                handleBackClick={this.toggleSection.bind(this,'Section1')}
                            /> 
                        }
                        {this.state.showSection === "Section3" && 
                            <Section3 
                                handleNextClick={this.toggleSection.bind(this,'Section4')}
                                handleBackClick={this.toggleSection.bind(this,'Section2')}
                            /> 
                        }
                        {this.state.showSection === "Section4" && 
                            <Section4 
                                handleBackClick={this.toggleSection.bind(this,'Section3')}
                            /> 
                        }
                    </section>
                </div>
            </div>
        </section>
    
        {/* <section class="section-padding--small bg-magnolia">
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
         */}
        
      </main>
      
            </React.Fragment>
        );
    }
}