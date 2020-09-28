import React from 'react';
import mp from './MyPosts.module.css';
import Post from './Post/Post'
import {ProfilePageType} from "../../../redux/state";

const MyPosts: React.FC<ProfilePageType> =  (props) => {
  
  let postsElements = props.posts.map((posts)=><Post message={posts.message} likesCount={posts.likesCount}  id={posts.id}/>)
  return (
    <div className={mp.postsBlock}>
      <h1>My posts</h1>
          <div>
            <textarea >Что нового?</textarea>
          <div/>
            <button>Add post</button>
          </div>
      <div className={mp.posts}>
      {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;