import React from 'react'
import Portfolio from './Portfolio'

//this function passes the object properties in projects array to the following prop names
function PortFolioList({Projects}){
	return (
<div>
	<div className='portfolio'>
	<h1 id='portfolio'>Portfolio...</h1>
	<p className='portfolioprologue'>I am constantly working on new and open source projects, if you wish take a look at my work and contributions below: </p>
	</div>
<div className ='images grid-wrapper'>
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
}
</div>
</div>
	)}

export default PortFolioList