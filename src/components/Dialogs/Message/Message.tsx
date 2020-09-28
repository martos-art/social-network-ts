import React from 'react';
import dial from './../Dialogs.module.css';
import {MessagesType} from "../../../redux/state";


const Message: React.FC<MessagesType> = (props) => {
    return (
        <div className={dial.message}>{props.message}</div>
    )
};

export default Message;