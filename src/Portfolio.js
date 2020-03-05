import React from 'react'

function Portfolio(props){
return (
<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
<p>{props.title}</p>
<a href={props.url}>This is the link</a>
</div>
	)
}
export default Portfolio

