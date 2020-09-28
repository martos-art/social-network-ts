import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import dial from './Dialogs.module.css';

import { NavLink } from 'react-router-dom';
import {DialogsPageType} from "../../redux/state";

const Dialogs: React.FC <{state: DialogsPageType}> = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageElements = props.state.messages.map((message) => <Message message={message.message} id={message.id} />)

    return (
        <div className={dial.dialogs} >
            <div className={dial.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={dial.messages}>
                {messageElements}
            </div>
        </div>
    )
};
export default Dialogs;