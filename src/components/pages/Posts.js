import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { userList } from '../../config';
import './Posts.css';

const Posts = () => {
  return (
    <div>
      <Header user={userList} />
      <Sidebar />
      <div className='post'>
      Coming Soon
      </div>
    </div>
  )
}

export default Posts;
