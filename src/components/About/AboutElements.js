import styled from "styled-components";


export const AboutContainer = styled.div`
    padding: 48px 44px;
    display: grid;
    flex-direction: row;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr ;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const AboutSection = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10%;
    align-items: center;
`

export const AboutTitle = styled.p`
    margin-top: 130%;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 110.78%;
    letter-spacing: 0.01em;

    color: #FFE9D2;
    margin-bottom: 1%;

    @media screen and (max-width: 1300px) {
        margin-top: 250%;
    }

    @media screen and (max-width: 768px) {
        margin-top: 150%;
    }

    @media screen and (max-width: 480px) {
        margin-top: 350%;
    }
`

export const AboutSubtitle = styled.h1`
    font-family: SF Sports Night NS Upright;
    font-style: normal;
    font-weight: 400;
    font-size: 2.25rem;
    line-height: 104.28%;

    background: linear-gradient(92.82deg, #FDF1D5 -4.96%, #EE6B68 36.05%, rgba(255, 51, 255, 0.5) 99.49%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const AboutParagraph = styled.p`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 173%;
    letter-spacing: 0.01em;
    color: #FFE9D2;
    margin-bottom: 2%;
    margin-top: 1%;
`

export const ImageSection = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10%;
    align-items: center;
`
export const GlobeImageSection = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10%;
    align-items: center;
`
export const GlobeImg = styled.img`
    margin-top: 110%;
    background-repeat: no-repeat;
    width: 65%;
    height: 40%;

    @media screen and (max-width: 1300px) {
        display:none;
    }
`
export const Ellipse55 = styled.img`
    width: 172px;
    height: 172px;
    margin-bottom: 50%;

    @media screen and (max-width: 1300px) {
      display:none;
    }
`

export const TriangleShape = styled.img`
    width: 22px;
    height: 22px;

    @media screen and (max-width: 1300px) {
      display:none;
    }
`

export const CircleShape = styled.img`

    @media screen and (max-width: 1300px) {
       display:none;
    }
`