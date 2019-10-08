import React from 'react';

export default class FooterScreen extends React.Component {

    render() {
        return <React.Fragment>
        
            <footer class="footer-area">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-sm-6 col-md-3 col-xl-3">
                            <div class="single-footer-widget footer_1">
                                <a href="/" style={{color: 'black', fontSize: '20px', fontWeight: 'bold'}}>
                                    Income & Asset Declaration
                                    {/* <img src="img/footer_logo.png" alt="" /> */}
                                </a>
                                <ul>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Our Offer</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-md-3">
                            <div class="single-footer-widget footer_2">
                                <h4>Services</h4>
                                <ul>
                                    <li>
                                        <a href="#">Income Declaration</a>
                                    </li>
                                    <li>
                                        <a href="#">House Declaration</a>
                                    </li>
                                    <li>
                                        <a href="#">Vehicle Declaration</a>
                                    </li>
                                    <li>
                                        <a href="#">Office Declaration</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-md-3">
                            <div class="single-footer-widget footer_2">
                                <h4>Resources</h4>
                                <ul>
                                    <li>
                                        <a href="#">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Center</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-md-3">
                            <div class="social_icon">
                                <a href="#"><i class="ti-facebook"></i></a>
                                <a href="#"><i class="ti-twitter-alt"></i></a>
                                <a href="#"><i class="ti-dribbble"></i></a>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="copyright_part_text text-center">
                                <div class="row">
                                    <div class="col-lg-12">
                                    <p class="footer-text m-0">
                                        &copy; 2019 Income & Asset Declaration
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

            </footer>
            
        </React.Fragment>
    }
}