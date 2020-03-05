import React from 'react'
import Portfolio from './Portfolio'

function PortFolioList({Projects}){
	return (
<div>
{
Projects.map((items, i)=>{
return (<Portfolio 
		title= {Projects[i].title} 
        id={Projects[i].id} 
        url ={Projects[i].url}
      />)

	})
}</div>
	)}

export default PortFolioList