import React from 'react'

export default class Section4 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3 style={{textAlign: 'center', fontSize: '30px', paddingBottom: '20px', marginTop: '-100px'}}>STEP 4 - Next of Kin</h3>
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
                            <label>Email</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label>National ID</label>
                            <input type="email" class="form-control" />
                        </div>
                    </div>

                    <div class="row row-field">
                        <div class="col-md-6">
                            <label>Phone Number</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label>Occupation</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="row row-field">
                        <div class="col-md-6">
                            <label>Address</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label>Gender</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="row row-field">
                        <div class="col-md-6">
                            <label>State</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label>Local Government</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="row row-field">
                        <div class="col-md-6">
                            <label>Passport</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="row row-field" style={{marginTop: '40px'}}>
                        <div class="col-md-6">
                           <button type="button" onClick={this.props.handleBackClick} style={{width: '100px', fontSize: '20px', backgroundColor: '#042A9B', borderColor: '#042A9B'}} class="btn btn-primary">Back</button>
                        </div>
                        <div class="col-md-6" style={{textAlign: 'right'}}> 
                           <button type="button" style={{width: '100px', fontSize: '20px', backgroundColor: '#042A9B', borderColor: '#042A9B'}} class="btn btn-primary">Finish</button>
                        </div>
                    </div>
                        
                </form>
            </React.Fragment>
        );
    }
}