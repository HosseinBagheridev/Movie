import React from 'react'
import { MainSwiper } from './MainSwiper';
import { useState } from "react";


export const Main = ({ setBgImage }) => {
  
  
  return (
    <div style={{
      
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
        <MainSwiper id = "Trending-tv" showTimeTabs={true} setBgImage={setBgImage}/>
        <MainSwiper  id="top-rated-tv" apiPath="/movie/top_rated" title='Top Rated Movies' showTimeTabs={false} setBgImage={setBgImage}/>
    </div>
  )
}
