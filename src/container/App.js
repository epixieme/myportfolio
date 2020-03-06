import React from 'react';
import './App.css';
import {Projects} from '../component/portfolio/Projects'
import PortFolioList from '../component/portfolio/PortFolioList'
import NavBar from '../component/navigation/NavBar'
import Headline from '../component/headline/Headline'
import Contact from '../component/Contact'
import About from '../component/About'
// import Portfolio from '../component/Portfolio'


const App=()=> {
  return (
  	<div className="toplevel">
      <NavBar />	
      <Headline />
      <Contact />
      <About />
	<PortFolioList Projects={Projects} />

  </div>
   )
}
export default App;

{/*<ProfileImageList profileimages={profileimages} />*/}