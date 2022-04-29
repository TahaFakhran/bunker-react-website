import React, { useEffect } from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import Services from '../../components/Services/Services';
import About from '../../components/About/About';
import ThankYouMessage from '../../components/ThankYouMessage/ThankYouMessage';
import { BackgroundImage, LandingPageContainer, AllRights, FooterText } from './LandingPageElements';
import goUp from '../..//functions/Scroll';

const LandingWelcome = () => {

    useEffect(() => {
        goUp();
    }, []);

    return (
        <LandingPageContainer>
            <BackgroundImage>
                <ThankYouMessage />
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

export default LandingWelcome;