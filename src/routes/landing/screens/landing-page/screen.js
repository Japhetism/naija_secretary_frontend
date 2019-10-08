import React from 'react';
import TitleSection from './components/title-section';
import AboutSection from './components/about-section';
import ServiceSection from './components/service-section';
import TestimonialSection from './components/testimonial-section';
import AdvertSection from './components/advert-section';

export default class LandingPageScreen extends React.Component {
  render() {
    return <React.Fragment>
    
      <TitleSection/>
      <AboutSection/>
      <ServiceSection />
      <TestimonialSection />
      <AdvertSection />
      
    </React.Fragment>
  }
}