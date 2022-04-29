import styled, { keyframes } from "styled-components";
import arrowLI from '../../images/ArrowLI-removebg-preview.png';
import blurImage from '../../images/Blur Shape.png';

export const ServicesWrapper = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    flex-wrap: wrap;
`

export const ServicesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 auto;
`

export const ServicesBox = styled.div`
    position: relative;
    width: 320px;
    height: 450px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 40px 30px;
    transition: 0.5s;
`

export const ServicesContent = styled.div`

    left: 0;
    padding: 20px 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 367px;
    height: 450px;
    color: white;
    background: linear-gradient(139.36deg, rgba(255, 255, 255, 0.2) 4.7%, rgba(255, 255, 255, 0.034) 87.16%);
    flex-direction: column;
    border:1px solid;
    
    border-color:  rgba(255, 255, 255, 0.034);
   
    border-radius: 10px;

    :hover{
        border-top-color: #FF33FF;
        border-left-color: #FDF1D5;
        border-bottom-color: #FF33FF;
        border-right-color:#FDF1D5;
        background: rgb(147,46,122);
        background: radial-gradient(circle, rgba(147,46,122,1) 0%, rgba(240,240,240,0) 74%);
    }
    

`

export const BackgroundBlur = styled.div`
    background: linear-gradient(0deg, #932E7A, #932E7A);
    filter: blur(100px);
`

export const ServicesContentImage = styled.img`
    margin-left: -50%;
    margin-top: -15%;
    margin-bottom: 20%;
`

export const ServicesH2 = styled.h2`
    font-size: 1.2rem;
    font-family:SF Sports Night NS Upright;
    color: #fff;
    margin-bottom: 10px;
    color: #FFE9D2;
    margin-bottom: 10%;
`

export const ServicesList = styled.ul`
    list-style-image: url(${arrowLI});
`

export const ServicesListItems = styled.li`
    font-size: 1.1em;
    margin-bottom: 10px;
    line-height: 1.4em;
    font-family:Ubuntu;
    color: #FFE9D2;
`

export const ServicesTitle = styled.p`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 110.78%;
    letter-spacing: 0.01em;

    color: #FFE9D2;
    margin-bottom: 1%;

    @media screen and (max-width: 768px) {
        margin-top: 5%;
    }
`

export const ServicesSubtitle = styled.h1`
    font-family: SF Sports Night NS Upright;
    font-style: normal;
    font-weight: 400;
    font-size: 2.25rem;
    line-height: 104.28%;

    background: linear-gradient(92.82deg, #FDF1D5 -4.96%, #EE6B68 36.05%, rgba(255, 51, 255, 0.5) 99.49%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-text-fill-color:transparent;
`

export const ServicesTitlesWrapper = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 8%;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding-left :5%;
    }
    
`

export const ShapeHearts = styled.img`
`
export const XBoxIcons = styled.img`

    @media screen and (max-width: 1300px) {
      display:none;
    }
`

export const PlusShape = styled.img`
    margin-top:20%;

    @media screen and (max-width: 1300px) {
      display:none;
    }
`
