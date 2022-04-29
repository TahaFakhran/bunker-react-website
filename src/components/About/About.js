import React, { useEffect } from 'react';
import { AboutContainer, AboutParagraph, AboutSection, AboutSubtitle, AboutTitle, CircleShape, Ellipse55, GlobeImageSection, GlobeImg, TriangleShape } from './AboutElements';
import Aos from 'aos';
import "aos/dist/aos.css";
import globe from '../../images/Globe.png';
import ellipse from '../../images/Circles.svg';
import triangleShape from '../../images/TriangleShape.png';
import circleShape from '../../images/CircleShape.png';

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <AboutContainer >
            <AboutSection data-aos="fade-up-right">
                <AboutTitle>A new breed of studio <TriangleShape src={triangleShape} data-aos="zoom-in" />  </AboutTitle>
                <AboutSubtitle>FULLY VIRTUALIZED.</AboutSubtitle>
                <AboutSubtitle>FULLY REMOTE.</AboutSubtitle>
                <AboutParagraph>
                    Our founders have decades of experience in realtime content creation and tools development for the world's largest digital media projects - for feature films, cinematics, games, theme park attractions and VR experiences.
                </AboutParagraph>
                <AboutParagraph>
                    We provide an innovative mix of production tools and services that enable the digital entertainment industry to work efficiently in real-time, speeding up creative development and reducing costs.
                </AboutParagraph>
                <CircleShape src={circleShape} data-aos="zoom-in-up" />
            </AboutSection>
            <GlobeImageSection>
                <GlobeImg src={globe} data-aos="slide-up" />
                <Ellipse55 src={ellipse} data-aos="slide-right" />
            </GlobeImageSection>
        </AboutContainer>
    )
}

export default About