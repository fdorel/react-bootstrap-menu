import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
/*
    let dialogs = [
        {id: 1, name: 'Ana'},
        {id: 2, name: 'Beatrix'},
        {id: 3, name: 'Zoya'}
        ];

    let messages = [
        {id: 1, message: 'Privet'},
        {id: 2, message: 'KAk ti?'},
        {id: 3, message: 'Prikolino'}
    ];*/
    let dialogsElements = props.state.dialogs.map( (d) => {
        return <DialogItem name={d.name} id={d.id}/>
    } );

    let messagesElements = props.state.messages.map( (m) => {
        return <Message message={m.message} /> });

    let newMessage = React.createRef();

    let addMessage = (props) => {
        let textInserted = newMessage.current.value;
        alert(textInserted);
    };

    return (
        <React.Fragment>
        <div className="row">
            <div className="col-lg-6 whites">
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        { dialogsElements }
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <div className={s.messages}>
                    { messagesElements }
                </div>
            </div>
        </div>

        <div className="row">
            <textarea ref={ newMessage } rows="10" cols="10" className="form-control col-md-8 col-sm-8 col-4-pull-Y" placeholder="Enter your text, please" required></textarea>
        </div>
        <div className="row">
            <button onClick={ addMessage } className="btn btn-success">Add post</button>
        </div>
        </React.Fragment>


    )
};

export default Dialogs;