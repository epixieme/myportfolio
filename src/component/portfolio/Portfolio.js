import React from 'react'
import './portfolio.css'
//this function renders the props from PortfolioList.js to the page
const Portfolio=(props)=>{
return (
	<div>
      	<p className='title'>{props.title}</p>
	    <p>{props.image}</p>
		<a className='url' href={props.url}></a>
      </div>

	)
}
export default Portfolio