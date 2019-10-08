import React from 'react';

export default class AboutSection extends React.Component {
    render() {
        return <React.Fragment>
            
            <section class="about_part section_padding">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-md-6">
                            <div class="about_part_text">
                                <h5>About Us</h5>
                                <h2>Income & Asset Declaration</h2>
                                <p>
                                    There winged grass midst moving earth seed herb fifth you're
                                    multiply, you divide cattle stars first cattle was had spirit
                                    you're thing, night darkness. Which itself stars creature.
                                </p>
                                <a href="#" class="btn_1">explore us</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="about_part_img">
                                <img src="img/about_part_img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   
        </React.Fragment>
    }
}