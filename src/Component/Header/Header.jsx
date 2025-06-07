import React, { use, useState } from 'react'
import { Navigation } from '../Navigation/Navigation'
import { Searchbar } from './Searchbar'
import { FollowUs } from '../Footer/FollowUs'
import HeaderSwiper from './HeaderSwiper'
import { useLocation } from 'react-router-dom'

 



export const Header = ({ bgImage, setBgImage }) => {
  
  const location = useLocation()
  console.log(location)
 

  const bg ={
    backgroundImage: bgImage ? `url(${bgImage})` : "none",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "background-image 0.5s ease-in-out",
   
  }
  return (
    <header style={bg} className= {location.pathname !== '/' ? '' : ''}>
      <Navigation />
      {location.pathname === '/' && <Searchbar />}
      {location.pathname == '/' && (
        <div className= {`${location.pathname !== '/' ? 'hidden' : ''}`}>
        <HeaderSwiper setBgImage={setBgImage}/>
        </div>

      )}
      
    </header>
  )
}
