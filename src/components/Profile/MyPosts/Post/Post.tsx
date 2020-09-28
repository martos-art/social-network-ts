import React from 'react';
import prof from './Post.module.css';
import {PostsType} from "../../../../redux/state";

const Post: React.FC<PostsType> = (props) => {
  return (
    <div className={prof.posts}>
      <div className={prof.item}>
        <img src="https://www.w3schools.com/howto/img_avatar2.png" />

        <span>{props.message}</span>
        
            <div>
          <span>Like {props.likesCount} </span>
        </div>
      </div>
    </div>
  )
};

export default Post;