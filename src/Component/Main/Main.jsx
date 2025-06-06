import React from 'react'
import { MainSwiper } from './MainSwiper';
import { useState } from "react";


export const Main = ({ setBgImage }) => {
  
  
  return (
    <div style={{
      
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
        <MainSwiper showTimeTabs={true} setBgImage={setBgImage}/>
        <MainSwiper apiPath="/movie/top_rated" title='Top Rated Movies' showTimeTabs={false} setBgImage={setBgImage}/>
    </div>
  )
}
