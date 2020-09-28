import React from 'react';
// import prof from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../redux/state";

const Profile: React.FC< {state: ProfilePageType} > = (props) => {
  
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}/>
    </div>
  )
};

export default Profile;