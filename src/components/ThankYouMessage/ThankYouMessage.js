import React from 'react';
import { MessageButton, MessageContent, MessageH1, MessageWrapper } from './ThankYouMessageElements'
import { useNavigate } from 'react-router-dom';

const ThankYouMessage = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }
    return (
        <MessageWrapper visibility={false}>
            <MessageContent>
                <MessageH1>THANK YOU FOR <br /> SUBSCRIBING!</MessageH1>
                <MessageButton onClick={handleClick} >DONE</MessageButton>
            </MessageContent>
        </MessageWrapper>
    )
}

export default ThankYouMessage;
