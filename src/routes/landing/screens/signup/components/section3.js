import React from 'react'

export default class Section3 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="container" style={{backgroundColor: '#ffffff', padding: '20px', paddingBottom: '40px'}}>
                    <h3 style={{color: '#042A9B', paddingTop: '30px', textAlign: 'center', fontSize: '30px', paddingBottom: '20px'}}>STEP 3 - Educational Background</h3>
                    <div class="row">                                
                        <div class="col-lg-7">
                            <form>
                                <div class="row row-field">
                                    <div class="col-md-12">
                                        <label>School Attended</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>

                                <div class="row row-field">
                                    <div class="col-md-6">
                                        <label>Date From</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-md-6">
                                        <label>Date To</label>
                                        <input type="email" class="form-control" />
                                    </div>
                                </div>

                                <div class="row row-field">
                                    <div class="col-md-6">
                                        <label>Certificate Awarded</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-md-6">
                                        <label>Registration/Matric Number</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>

                                <div class="row row-field">
                                    <div class="col-md-6">
                                        <label>Country</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-md-6">
                                        <label>State</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                                <button type="button" style={{backgroundColor: '#042A9B', borderColor: '#042A9B', marginBottom: '20px', marginTop: '20px'}} class="btn btn-primary">Add</button>
                            </form>
                        </div>
                        <div class="col-lg-5">
                            <div class="row">
                                <div class="col-md-8">
                                    <label><strong>Obafemi Awolowo University</strong></label><br/>
                                    <span>Phd Computer Science</span><br/>
                                    <span>May, 2017</span>
                                </div>
                                <div class="col-md-4">
                                    <button class="btn-primary" style={{marginRight: '10px'}}>edit</button>
                                    <button class="btn-danger">remove</button>
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-md-8">
                                    <label><strong>Obafemi Awolowo University</strong></label><br/>
                                    <span>Msc Computer Science</span><br/>
                                    <span>May, 2013</span>
                                </div>
                                <div class="col-md-4">
                                    <button class="btn-primary" style={{marginRight: '10px'}}>edit</button>
                                    <button class="btn-danger">remove</button>
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-md-8">
                                    <label><strong>Obafemi Awolowo University</strong></label><br/>
                                    <span>Bsc Computer Science</span><br/>
                                    <span>May, 2009</span>
                                </div>
                                <div class="col-md-4">
                                    <button class="btn-primary" style={{marginRight: '10px'}}>edit</button>
                                    <button class="btn-danger">remove</button>
                                </div>
                            </div>
                            <hr/>
                            <div class="row row-field" style={{marginTop: '40px'}}>
                                <div class="col-md-6">
                                    <button type="button" onClick={this.props.handleBackClick} style={{width: '100px', fontSize: '20px', backgroundColor: '#042A9B', borderColor: '#042A9B'}} class="btn btn-primary">Back</button>
                                </div>
                                <div class="col-md-6" style={{textAlign: 'right'}}> 
                                    <button type="button" onClick={this.props.handleNextClick} style={{width: '100px', fontSize: '20px', backgroundColor: '#042A9B', borderColor: '#042A9B'}} class="btn btn-primary">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}