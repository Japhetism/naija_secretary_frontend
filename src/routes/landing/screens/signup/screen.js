import React from 'react';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import { REGISTRATION_DETAILS } from '../../../../constants/sigup-section'

export default class SignupScreen extends React.Component {

  sigupTopPageRef = React.createRef(null)

  constructor(props) {
    super(props);
    this.state = {
      showSection: "Section1",
      registrationDetails: {

      },
    }

    this.handleFieldOnChange = this.handleFieldOnChange.bind(this)

    this.requiredRegistrationDetailsFields = [
      "nationalId", "firstName", "lastName", "dob", "occupation",
      "address", "state", "lga", "gender", "passport", "birthCertificate"
    ]

    this.requiredFamilyMembersDetailsFields = [

    ]
  }

  toggleSection (sectionName) {
    console.log(this.state)
    if(!this.validateRegistrationField().length == 0) {
      this.setState({showSection: sectionName});
      window.scrollTo(0, this.sigupTopPageRef.current.offsetTop)
    }else{
      this.setState({emptyField: this.validateRegistrationField()})
    } 
    
  }

  handleFieldOnChange (container, field, value) {
    this.setState({
      [container]: {...this.state[container], [field]: value}
    })

    console.log(this.state)
  }

  validateRegistrationField () {
    const emptyRegistrationDetailsFields = this.requiredRegistrationDetailsFields.filter(value => {
      return Boolean(this.state.registrationDetails[value]) === false
    })
    return emptyRegistrationDetailsFields
  }
   
  render() {
    return <React.Fragment>
    
      <section class="section_padding" style={{background: '#1E06C3', textAlign: 'center'}}>
        <h1 style={{color: '#ffffff', fontSize: '50px'}}>Sign Up</h1>
      </section>
      <section class="about_part section_padding" style={{backgroundColor: '#F5F5F7'}}>
        <div class="container">
          <div class="row align-items-center justify-content-between" ref={this.sigupTopPageRef}>
            {this.state.showSection === "Section1" && 
              <Section1 
                handleNextClick = {this.toggleSection.bind(this,'Section2')}
                onFieldChange = {this.handleFieldOnChange}
                parentField = {REGISTRATION_DETAILS}
                emptyFields = {this.state.emptyField}
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
          </div>
        </div>
      </section>

    </React.Fragment>
    
  }
}