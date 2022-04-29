import React, { useEffect } from 'react';
import { ArrowGif, ArrowShape, ButtonSubmit, ContactForm, ContactInput, ContactMessageBox, ContactUsContainer, GetInTouch, SocialMediaContainer, SocialMediaIcon, SocialMediaItem, SocialMediaLink, SocialMediaList, Text, Title, TriangleShape, XandDashesImage, Xshape, XsShapes } from './ContactUsElements';
import { Ellipse55 } from './ContactUsElements';
import ellipse from '../../images/ellipse.png';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import xShape2 from '../../images/X Shape 2.png';
import xSshapes1 from '../../images/X frame shape.png';
import triangleShape from '../../images/TriangleShape.png';
import xAndDashes from '../../images/Shape 1.png';
import arrowShape from '../../images/Arrow Shape.png';
import gifArrow from '../../images/Arrows.gif';

//icons
import faceBookIcon from '../../images/Facebook.svg';
import twitterIcon from '../../images/Twitter.svg';
import instaIcon from '../../images/Instagram.svg';
import linkedinIcon from '../../images/Linkedin.svg';
import youtubeIcon from '../../images/Youtube.svg';

const ContactUs = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    // async function sendEmail() {

    // }

    const navigate = useNavigate();

    function handleClick() {
        navigate("/ThankYou");
    }

    return (
        <>
            <ArrowGif src={gifArrow} />
            <ContactUsContainer>
                <GetInTouch data-aos="fade-up">
                    <Title>GET IN TOUCH <Xshape src={xShape2} data-aos="zoom-in" /> </Title>
                    <Text>Fill out the form to get our news and  our latest annoucements!</Text>
                    <ContactForm >
                        <ContactInput placeholder='Full Name' type="text" />
                        <ContactInput placeholder='Email' type='email' />
                        <ContactMessageBox placeholder='Message' />
                        <ButtonSubmit onClick={handleClick} > SUBMIT </ButtonSubmit>
                        <XsShapes src={xSshapes1} />
                        <ArrowShape src={arrowShape} data-aos="flip-down" />
                    </ContactForm>
                </GetInTouch>
                <SocialMediaContainer>
                    <Ellipse55 src={ellipse} data-aos="slide-left" />
                    <Title>LET’s CONNECT <TriangleShape src={triangleShape} data-aos="flip-right" /></Title>
                    <SocialMediaList data-aos="fade-right">
                        <SocialMediaItem >
                            <SocialMediaLink href='https://www.facebook.com/bunkerdigital.ca' target="_blank" > <SocialMediaIcon src={faceBookIcon} aria-hidden="true" /></SocialMediaLink>
                        </SocialMediaItem>
                        <SocialMediaItem >
                            <SocialMediaLink href='https://twitter.com/BunkerdigitalCa' target="_blank"> <SocialMediaIcon src={twitterIcon} aria-hidden="true" /></SocialMediaLink>
                        </SocialMediaItem>
                        <SocialMediaItem >
                            <SocialMediaLink href='https://www.instagram.com/bunkerdigital.ca' target="_blank"> <SocialMediaIcon src={instaIcon} aria-hidden="true" /></SocialMediaLink>
                        </SocialMediaItem>
                        <SocialMediaItem >
                            <SocialMediaLink href='https://www.linkedin.com/company/bunkerdigital-inc' target="_blank"> <SocialMediaIcon src={linkedinIcon} aria-hidden="true" /></SocialMediaLink>
                        </SocialMediaItem>
                        <SocialMediaItem >
                            <SocialMediaLink href='https://www.youtube.com/channel/UCupzzvWqsPlTah_sJfRyxjQ' target="_blank"> <SocialMediaIcon src={youtubeIcon} aria-hidden="true" /></SocialMediaLink>
                        </SocialMediaItem>
                    </SocialMediaList>
                    <XandDashesImage src={xAndDashes} />
                </SocialMediaContainer>
            </ContactUsContainer>
        </>
    )
}

export default ContactUs