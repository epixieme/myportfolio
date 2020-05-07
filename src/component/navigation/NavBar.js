import React from 'react'
import './NavBar.css'
import logo from './logo.svg'
function NavBar(){

	return (


<header className ='NavBar'>
<div className="logo">
<img src={logo} alt="website logo" style={{width:'350px',height:'200px'}}/>
</div>	
	<nav className='Nav'>
		<a href="#aboutme">About me</a>
		<a href="#portfolio">Portfolio</a>
		<a href="#contactme">Get in touch</a>
</nav>
</header>

		)
}

export default NavBar