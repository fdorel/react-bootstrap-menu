import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

/*In these props there will be posts*/
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            {/*props.posts == we redirect posts from the upper place to these posts*/}
            <MyPosts posts={props.state.posts} addPost = {props.addPost} />
        </div>);
};

export default Profile;