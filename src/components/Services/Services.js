import React, { useEffect } from 'react';
import { BackgroundBlur, PlusShape, ServicesBox, ServicesContainer, ServicesContent, ServicesContentImage, ServicesH2, ServicesList, ServicesListItems, ServicesSubtitle, ServicesTitle, ServicesTitlesWrapper, ServicesWrapper, ShapeHearts, XBoxIcons } from './ServicesElements';
import contentCreationIcon from '../../images/Content Creation icon.svg';
import integrationIcon from '../../images/Integration.svg';
import realtimeRederingIcon from '../../images/Realtime Rendering.svg';
import Aos from 'aos';
import "aos/dist/aos.css";
import heartShapes from '../../images/ShapeHearts.png';
import xboxIcon from '../../images/Geometrical Shapes.png';
import shapePlus from '../../images/Plus Shape.png';

const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <ServicesTitlesWrapper>
                <ServicesTitle>
                    Our Services
                </ServicesTitle>
                <ServicesSubtitle>
                    WHAT WE OFFER <ShapeHearts src={heartShapes} data-aos="fade-up" />
                </ServicesSubtitle>

            </ServicesTitlesWrapper>
            <ServicesWrapper>
                <ServicesContainer >
                    <ServicesBox data-aos="fade-left">
                        <ServicesContent>
                            <ServicesContentImage src={contentCreationIcon} />
                            <ServicesH2>CONTENT CREATION</ServicesH2>
                            <ServicesList>
                                <ServicesListItems>Realtime Assets</ServicesListItems>
                                <ServicesListItems>Character Creation</ServicesListItems>
                                <ServicesListItems>Art Direction</ServicesListItems>
                                <ServicesListItems>Worldbuilding</ServicesListItems>
                                <ServicesListItems>Realtime VFX</ServicesListItems>
                            </ServicesList>
                        </ServicesContent>
                    </ServicesBox>
                    <ServicesBox data-aos="fade-down">
                        <ServicesContent>
                            <ServicesContentImage src={realtimeRederingIcon} />
                            <ServicesH2>REALTIME RENDERING</ServicesH2>
                            <ServicesList>
                                <ServicesListItems>Lighting</ServicesListItems>
                                <ServicesListItems>Scene Cleanup</ServicesListItems>
                                <ServicesListItems>Asset Optimization</ServicesListItems>
                                <ServicesListItems>Training</ServicesListItems>
                                <ServicesListItems>Consultancy</ServicesListItems>
                            </ServicesList>
                        </ServicesContent>
                    </ServicesBox>
                    <ServicesBox data-aos="fade-right">
                        <ServicesContent>
                            <ServicesContentImage src={integrationIcon} />
                            <ServicesH2>INTEGRATION</ServicesH2>
                            <ServicesList>
                                <ServicesListItems>Production</ServicesListItems>
                                <ServicesListItems>Management</ServicesListItems>
                                <ServicesListItems>Technical Art</ServicesListItems>
                                <ServicesListItems>Pipeline Tools</ServicesListItems>
                                <ServicesListItems>Hardware Interfaces</ServicesListItems>
                                <ServicesListItems>LBE Systems</ServicesListItems>
                            </ServicesList>
                        </ServicesContent>
                    </ServicesBox>
                    <PlusShape src={shapePlus} data-aos="fade-right" />
                    <XBoxIcons src={xboxIcon} data-aos="flip-up" />
                </ServicesContainer>
            </ServicesWrapper>
        </>
    )
}

export default Services