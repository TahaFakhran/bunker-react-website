import styled from "styled-components";

export const ContactUsContainer = styled.div`
    padding: 48px 24px;
    display: grid;
    flex-direction: row;
    margin-left: 1.5%;
    grid-template-columns: 1fr 1fr ;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const GetInTouch = styled.div`
  flex-direction: column;
    justify-content: flex-start;
    margin-left: 10%;
    align-items: center;
`

export const SocialMediaContainer = styled.div`
     flex-direction: column;
    justify-content: flex-start;
    margin-left: 10%;
    align-items: center;
`
export const Title = styled.h1`
    font-family: SF Sports Night NS Upright;
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    line-height: 104.28%;
    background: linear-gradient(92.05deg, #FDF1D5 -0.37%, #EE6B68 54.55%, rgba(255, 51, 255, 0.5) 139.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`

export const Text = styled.p`
    margin-top: 2%;
    font-size:1rem; 
    font-family: Ubuntu;
    color: #FFE9D2;
`

export const ContactForm = styled.form`
    display:flex;
    flex-direction:column;
    padding: 10px 0  0  0;
`

export const ContactInput = styled.input`
    display: block;
    margin-bottom: 1.5%;
    max-width: 500px;
    height: 60px;
    background-color: #000;
    background: linear-gradient(139.36deg, rgba(255, 255, 255, 0.45) 4.7%, rgba(255, 255, 255, 0.0765) 87.16%);
    letter-spacing: 1px;
    padding-left:2%;

    :focus{
        background: linear-gradient(92.03deg, #FFE9D2 -12.49%, rgba(255, 233, 210, 0) 117.76%);
    }

    ::placeholder{
        color:#FFE9D2;
        padding-left:2%;
    }

    @media screen and (max-width: 768px) {
        max-width: 300px;
    }
`

export const ContactMessageBox = styled.textarea`
    max-width: 500px;
    height: 193px;
    background-color: #000;
    background: linear-gradient(139.36deg, rgba(255, 255, 255, 0.45) 4.7%, rgba(255, 255, 255, 0.0765) 87.16%);
    letter-spacing: 1px;
    resize: none;
    padding-left:2%;
    padding-top:1%;
    margin-bottom: 1.5%;

    :focus{
        background: linear-gradient(92.03deg, #FFE9D2 -12.49%, rgba(255, 233, 210, 0) 117.76%);
    }

    ::placeholder{
        color:#FFE9D2;
        padding-left:2%;
    }

    @media screen and (max-width: 768px) {
        max-width: 300px;
    }
`

export const ButtonSubmit = styled.button`
    max-width: 500px;
    height: 60px;
    color: #FFFFFF;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 140%;
    cursor: pointer; 
    letter-spacing: 0.01em;
    background: linear-gradient(92.66deg, #FDF1D5 -76.47%, #EE6B68 24.06%, rgba(255, 51, 255, 0) 139.42%);

    @media screen and (max-width: 768px) {
        max-width: 300px;
    }

    :hover{
    background: linear-gradient(92.66deg,rgba(255, 51, 255, 0) -76.47% , #EE6B68 24.06%, #FDF1D5 139.42% );
}

`

export const Ellipse55 = styled.img`
    width: 172px;
    height: 172px;
    margin-bottom: 12%;

    @media screen and (max-width: 768px) {
        margin-top: 2%;
        width: 100px;
        height: 100px;
    }
`

export const SocialMediaList = styled.ul`
    position: relative;
`

export const SocialMediaItem = styled.li`
    position: relative; 
    display: inline-block;
    height: 75px;
    width: 75px;
    margin: 10px 5px;
    line-height: 60px;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer; 
    transition: all .2s ease-in-out;
   
    :hover{
        background: linear-gradient(92.66deg, #FDF1D5 -76.47%, #EE6B68 24.06%, rgba(255, 51, 255, 0) 139.42%);
    }
    
`

export const SocialMediaLink = styled.a`
    /* color: #260636; */
`

export const SocialMediaIcon = styled.img`
    
`

export const Xshape = styled.img`
    margin-bottom: 3%;

    @media screen and (max-width: 1300px) {
         display:none;
      }
`

export const XsShapes = styled.img`
    margin-top: 5%;
    width: 100px;
    height:20px;

    @media screen and (max-width: 1300px) {
         display:none;
      }
`
export const TriangleShape = styled.img`
    width: 22px;
    height: 22px;
    margin-left:5%;

    @media screen and (max-width: 1300px) {
      display:none;
    }
`

export const XandDashesImage = styled.img`
    margin-top: 15%;
    @media screen and (max-width: 1300px) {
          display:none;
    }
`

export const ArrowShape = styled.img`
    margin-left: 75%;
    width: 35px;
    height: 35px;
    @media screen and (max-width: 1300px) {
          display:none;
    }
`

export const ArrowGif = styled.img`
    margin-left: 2%;
    @media screen and (max-width: 1300px) {
        display:none;
    }
`
