import React from 'react';
import s from './Dialogs.module.css';
import sidebar from './../../redux/state';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Friends = (props) => {

    let bestFriends = props.state.friends.map( (d) => {
        return <Friends name={d.name} id={d.id}/>
    } );



    return (
        <div className="row">
            <div className="col-lg-12 whites">
                <div className={s.friends}>
                    { bestFriends }
                </div>
            </div>
        </div>
    )
};

export default Friends;