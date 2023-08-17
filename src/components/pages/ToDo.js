import React from 'react'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { userList } from '../../config';
import './ToDo.css';

const ToDo = () => {
  return (
    <div>
      <Header user={userList} />
      <Sidebar />
      <div className='to-do'>
      Coming Soon
      </div>
    </div>
  )
}

export default ToDo;
