import React from 'react'
import {Avatar} from '@mui/material/Avatar';
import './Header'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Header = () => {
  return (
    <div>
      <div className="header">
      //npm config set legacy-peer-deps true 
      //it is used to resolved the console.error during install matarial ui;
        <div className='header_left'>
          <Avatar
          className='header_left'
          alt='Shivam'
          src=''
          />
        <AccessTimeIcon/>
             {/*............... */}
               {/*...................... */}
         </div>
        <div className='header_Search'>
        <AccessTimeIcon/>
               {/*............... */}
               {/*...................... */}
          </div>
          <div className='header_right'>
               {/*............... */}
               {/*...................... */}
          </div>
     
    </div>
    </div>
  )
}

export default Header
