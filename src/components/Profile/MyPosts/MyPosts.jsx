import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

/*these props will be  transmitted to posts below */
const MyPosts = (props) => {

/*    let posts = [
        {id: 1, message: 'Privet kak dela?', likesCount: 2},
        {id: 2, message: 'Normalino?', likesCount: 6},
        {id: 3, message: 'Vseo OK?', likesCount:15}
    ];*/

    let postsElements =
        /*Without props. we are iterating through posts, with.props.posts.map
        we are iterating through props
        it means that the object props from above has posts property*/
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost( text );
    };

    return (
        <div className={s.postsBlock}>
                <div className="row">
                    <textarea ref={ newPostElement } rows="10" cols="10" className="form-control col-md-8 col-sm-8 col-4-pull-Y" placeholder="Enter your text, please" required></textarea>
                </div>
                <div className="row">
                    <button onClick={ addPost } className="btn btn-success">Add post</button>
                </div>
                <div className={s.posts}>
                    { postsElements }
                </div>
        </div>);
};

export default MyPosts;