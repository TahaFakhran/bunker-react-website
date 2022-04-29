import styled from "styled-components";
import backgroungImageMobile from '../../images/BackgroundMobile.png';
import backMobileMobile from '../../images/BackgroundMobileMobile.png';

export const LandingPageContainer = styled.html`
    height: 100%;
    
`

export const BackgroundImage = styled.div`
    background-image: url(${backgroungImageMobile});
    background-position: center center;
    background-size:  100% 100%;
    background-repeat: no-repeat;

    @media screen and (max-width: 1300px) {
        background-image: url(${backMobileMobile});
    }
`

export const AllRights = styled.div`
    align-items: center;
    justify-content:center;
    display:flex;
    
`

export const FooterText = styled.h6`
    font-size: 1.125rem;
    font-family: Ubuntu;
    color: #ffe9d2;
    margin-bottom: 18px;

    @media screen and (max-width: 768px) {
        font-size: 0.75rem;
    }
`

export const ComingSoon = styled.img`
    margin-left: 75%;
    margin-top: 5%;

    @media screen and (max-width: 1300px) {
        display: none;
    }

`