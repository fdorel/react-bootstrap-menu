import React from 'react';
import s from './../Dialogs.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
// import {NavLink} from "react-router-dom";



const Message = (props) => {
    return(
        <div className={s.dialog}>{props.message} <FontAwesomeIcon icon={faCoffee} /></div>
    )
};

export default Message;