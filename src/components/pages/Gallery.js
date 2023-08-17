import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { userList } from '../../config';
import './Gallery.css';

const Gallery = () => {
  return (
    <div>
    <Header user={userList} />
    <Sidebar />
    <div className='gallery'>
    Coming Soon
    </div>
  </div>
  )
}

export default Gallery;
