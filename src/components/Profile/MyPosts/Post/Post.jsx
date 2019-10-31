import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='post' src={require('./../../../../avatar.png')} />
            {props.message}
            <div>
                <button className="btn btn-danger">Like</button>
                <span></span>{props.likesCount}
            </div>
        </div>
    );
};

export default Post;