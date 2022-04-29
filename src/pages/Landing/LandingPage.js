import React, { useEffect } from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import Services from '../../components/Services/Services';
import About from '../../components/About/About';
import { BackgroundImage, LandingPageContainer, AllRights, FooterText, ComingSoon } from './LandingPageElements';
import goUp from '../../functions/Scroll';
import comingSoon from '../../images/Website coming soon.png';

const LandingPage = () => {

    useEffect(() => {
        goUp();
    }, []);

    return (
        <LandingPageContainer>
            <BackgroundImage>
                <ComingSoon src={comingSoon} />
                <About />
                <Services />
                <ContactUs />
                <AllRights>
                    <FooterText >Copyright © 2022. All rights reserved.</FooterText>
                </AllRights>
            </BackgroundImage>
        </LandingPageContainer>
    )
}

export default LandingPage;