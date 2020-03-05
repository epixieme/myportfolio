import React from 'react';
import './App.css';
import {Projects} from '../Projects'
import {profileimages} from '../component/Images/profileimages'
import ProfileImageList from '../component/Images/ProfileImageList'
import PortFolioList from '../PortFolioList'
import NavBar from '../component/navigation/NavBar'


const App=()=> {
  return (
  	<div className="toplevel">
      <NavBar />	
{/*<ProfileImageList profileimages={profileimages} />*/}
      	<div className='headline'>

      < h1 className = 'paragraphStyle'>Hello, I'm Kirstie </h1>
      
      </div>

      <div className = 'headline2'>
         <h3 className = 'paragraphStyle2'>...An East London based web developer</h3>

      </div>
      
      <div className ='contact'>
      <input className ='contactButton'type='button' value='Get in touch'/>
    </div>

   <div className='about'>
      	<h1>About me...</h1>
      	<p className="myBackground">My origins lie in Yorkshire but I moved to London to find my destiny. I am a full stack developer with modern Javascript, React, Css3 and HTML5</p>
      </div>
      <div className='banner3'>
      	<h1>Portfolio...</h1>
      	 
      </div>
       

  </div>
   
 
  )
}
export default App;

