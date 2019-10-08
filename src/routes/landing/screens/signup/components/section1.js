import React from 'react'

export default class Section1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            registrationDetails: {

            }
        }
    }
    render() {
        const allEmptyFields = this.props.emptyFields ? this.props.emptyFields :  []
        console.log(allEmptyFields)
        return (
            <React.Fragment>
                <div class="container" style={{backgroundColor: '#ffffff', padding: '20px', paddingBottom: '40px'}}>
                    <div class="row">
                        <div class="col-lg-8">
                            <form>
                                <h3 style={{color: '#042A9B', paddingTop: '30px', textAlign: 'center', fontSize: '30px', paddingBottom: '20px'}}>STEP 1 - Registration Details</h3>
                                <div class="row row-field">
                                    <div class="col-md-12">
                                        <label>National Identity Number</label>
                                        <input type="text" name="nationalId" class="form-control" onChange={(event) => this.props.onFieldChange(this.props.parentField,"nationalId", event.target.value)}  />
                                        {allEmptyFields.includes('nationalId') && <span style={{color: 'red'}}>field is required</span>}
                                    </div>
                                </div>
                                <div class="row row-field">
                                    <div class="col-md-6">
                                        <label>First Name</label>
                                        <input type="text" class="form-control" name="firstName" onChange={(event) => this.props.onFieldChange(this.props.parentField,"firstName", event.target.value)} />
                                        {allEmptyFields.includes('firstName') && <span style={{color: 'red'}}>field is required</span>}
                                    </div>
                                    <div class="col-md-6">
                                        <label>Last Name</label>
                                        <input type="text" class="form-control" name="lastName" onChange={(event) => this.props.onFieldChange(this.props.parentField,"lastName", event.target.value)} />
                                        {allEmptyFields.includes('lastName') && <span style={{color: 'red'}}>field is required</span>}
                                    </div>
                                </div>

                                <div class="row row-field">
                                    <div class="col-md-6">
                                        <label>Date of Birth</label>
                                        <input type="date" class="form-control" name="dob" onChange={(event) => this.props.onFieldChange(this.props.parentField,"dob", event.target.value)} />
                                        {allEmptyFields.includes('dob') && <span style={{color: 'red'}}>field is required</span>}
                                    </div>
                                    <div class="col-md-6">
                                        <label>Occupation</label>
                                        <input type="text" class="form-control" name="occupation" onChange={(event) => this.props.onFieldChange(this.props.parentField,"occupation", event.target.value)} />
                                        {allEmptyFields.includes('occupation') && <span style={{color: 'red'}}>field is required</span>}
                                    </div>
                                </div>

                                <div class="row row-field">
                                    <div class="col-md-6">
                                        <label>Address</label>
                                        <textarea class="form-control" style={{resize: 'none'}} rows={3} name="address" onChange={(event) => this.props.onFieldChange(this.props.parentField,"address", event.target.value)} />
                                        {allEmptyFields.includes('address') && <span style={{color: 'red'}}>field is required</span>}
                                    </div>
                                    <div class="col-md-6">
                                        <label>State</label>
                                        <input type="text" class="form-control" name="state" onChange={(event) => this.props.onFieldChange(this.props.parentField,"state", event.target.value)} />
                                        {allEmptyFields.includes('state') && <span style={{color: 'red'}}>field is required</span>}
                                    </div>
                                </div>

                                <div class="row row-field">
                                    <div class="col-md-6">
                                        <label>Local Government</label>
                                        <input type="text" class="form-control" name="lga" onChange={(event) => this.props.onFieldChange(this.props.parentField,"lga", event.target.value)} />
                                        {allEmptyFields.includes('lga') && <span style={{color: 'red'}}>field is required</span>}
                                    </div>
                                    <div class="col-md-6">
                                        <label>Gender</label>
                                        <div>
                                            <input type="radio" name="gender" value="male" onChange={(event) => this.props.onFieldChange(this.props.parentField,"gender", event.target.value)} /> Male
                                            <input type="radio" name="gender" value="female" onChange={(event) => this.props.onFieldChange(this.props.parentField,"gender", event.target.value)} /> Female
                                        </div>
                                        {allEmptyFields.includes('gender') && <span style={{color: 'red'}}>field is required</span>}
                                    </div>
                                </div>

                                <div class="row row-field">
                                    <div class="col-md-6">
                                        <label>Passport</label>
                                        <input type="file" class="form-control" name="passport" onChange={(event) => this.props.onFieldChange(this.props.parentField,"passport", event.target.files[0])} />
                                        {allEmptyFields.includes('passport') && <span style={{color: 'red'}}>field is required</span>}
                                    </div>
                                    <div class="col-md-6">
                                        <label>Birth Certificate</label>
                                        <input type="file" class="form-control" name="birthCertificate" onChange={(event) => this.props.onFieldChange(this.props.parentField,"birthCertificate", event.target.files[0])} />
                                        {allEmptyFields.includes('birthCertificate') && <span style={{color: 'red'}}>field is required</span>}
                                    </div>
                                </div>

                                <div class="row row-field" style={{marginTop: '40px'}}>
                                    <div class="col-md-12" style={{textAlign: 'center'}}> 
                                    <button onClick={this.props.handleNextClick} type="button" style={{width: '100px', fontSize: '20px', backgroundColor: '#042A9B', borderColor: '#042A9B'}} class="btn btn-primary">Next</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}