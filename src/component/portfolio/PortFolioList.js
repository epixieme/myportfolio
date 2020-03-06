import React from 'react'
import Portfolio from './Portfolio'

function PortFolioList({Projects}){
	return (
<div>
	<div className='portfolio'><h1>Portfolio...</h1></div>
{
Projects.map((items, i)=>{
return (

	<Portfolio 
		title= {Projects[i].title} 
		image={Projects[i].image}
        id={Projects[i].id} 
        url ={Projects[i].url}
      />)

	})
}</div>
	)}

export default PortFolioList