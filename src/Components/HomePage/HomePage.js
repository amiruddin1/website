import React, { useEffect } from "react";
import "./Homepage.css";
import Carousel from './Carousel/Carousel';
import AboutUs from './AboutUs/AboutUs';
import Expertise from "./OurExpertise/Expertise";
import Feedback from "./Feedbacks/Feedback";
import Services from "./OurServices/OurServices";
import OurClients from "./OurClients/OurClients";
export default function HomePage() {

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Carousel />
            <AboutUs />
            <Expertise />
            <Services />
            <OurClients />
            <Feedback />
        </>
    )
}