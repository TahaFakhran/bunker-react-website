import styled from "styled-components";

export const MessageWrapper = styled.div`
    display:${({ visibility }) => (visibility ? 'none' : 'block')};
    height: 100vh;
    position: sticky;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`

export const MessageContent = styled.div`
    max-width: 25rem;
    background-color: #FFFFFF;;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 1rem;
    padding: 4rem .5rem;
    box-shadow: 1px 1px 2rem rgba(0,0,0,.3);
    text-align: center;
`

export const MessageH1 = styled.h1`
    font-family: 'SF Sports Night NS Upright';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 117.28%;

    text-align: center;

    background: linear-gradient(0deg, #690E6F, #690E6F), linear-gradient(92.82deg, #FDF1D5 -19.23%, #EE6B68 36.05%, #FF33FF 99.49%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 1rem 0;
`

export const MessageButton = styled.button`
    background: linear-gradient(93.71deg, #FDF1D5 -78.84%, #EE6B68 25.48%, #FF33FF 145.19%);
    padding: .8rem 2rem;
    width: 200px;
    height: 50px;
    color: #fff;
    font-size: .7rem;
    border: none;
    outline: none;
    cursor: pointer;
`