import React from 'react';
import dial from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props: { id: any; name: React.ReactNode; }) => {
    return (
        <div className={dial.dialog + ' ' + dial.active}>
            <NavLink to={/dialogs/ + props.id}>{props.name}</NavLink>
        </div>
    )
};


export default DialogItem ;