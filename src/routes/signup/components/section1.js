import React from 'react'

export default class Section1 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3 style={{textAlign: 'center', fontSize: '30px', paddingBottom: '20px', marginTop: '-100px'}}>STEP 1 - Registration Details</h3>
                <form>
                    <div class="row row-field">
                        <div class="col-md-6">
                            <label>First Name</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label>Last Name</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="row row-field">
                        <div class="col-md-6">
                            <label>National ID</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label>Date of Birth</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="row row-field">
                        <div class="col-md-6">
                            <label>Occupation</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label>State</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="row row-field">
                        <div class="col-md-6">
                            <label>Local Government</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label>Birth Certificate</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="row row-field">
                        <div class="col-md-6">
                            <label>Passport</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label>Gender</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="row row-field" style={{marginTop: '40px'}}>
                        <div class="col-md-12" style={{textAlign: 'center'}}> 
                           <button onClick={this.props.handleNextClick} type="button" style={{width: '100px', fontSize: '20px', backgroundColor: '#042A9B', borderColor: '#042A9B'}} class="btn btn-primary">Next</button>
                        </div>
                    </div>
                        
                </form>
            </React.Fragment>
        );
    }
}