import React from 'react';
import dial from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import {DialogsType} from "../../../redux/state";


const DialogItem: React.FC <DialogsType> = (props) => {
    return (
        <div className={dial.dialog + ' ' + dial.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};


export default DialogItem ;