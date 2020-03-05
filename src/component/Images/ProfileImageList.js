import React from 'react'
import BodyImages from './BodyImages'

const ProfileImageList=({profileimages})=>{
  return (
    
<div className="zone grid-wrapper">
{
profileimages.map((items, i)=>{
return (
 <BodyImages image = {profileimages[i].image} />)

  })
}
</div>
  )}

export default ProfileImageList
