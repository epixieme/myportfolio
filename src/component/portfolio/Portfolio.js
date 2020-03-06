import React from 'react'


const Portfolio=(props)=>{
return (
	<div>
      	<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
	    <p>{props.title}</p>
	    <div>{props.image}</div>
		<a href={props.url}></a></div>
      </div>

	)


}
export default Portfolio