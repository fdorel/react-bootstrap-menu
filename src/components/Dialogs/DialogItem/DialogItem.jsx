import React from 'react';
import s from './../Dialogs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import {faCoffee} from '@fortawesome/fontawesome-free-solid';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}<FontAwesomeIcon icon={faCoffee} /></NavLink>
        </div>
    )
};

export default DialogItem;