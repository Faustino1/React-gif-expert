import React, { useState, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs'
import useFetchGifs from '../hooks/useFetchGifs'
import GifItem from './GifItem'

//const APPI_KEY = api.giphy.com/v1/gifs/trending?api_key=PcEnm1H3NSo4QLHte7Os8OrBOcbgTffx

 const GifGrid = ({ categoria }) => {

const {images, isLoading} = useFetchGifs( categoria )
console.log({images, isLoading});



  return (
    <>
      <h3>{categoria}</h3>
      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem 
            key={image.id}
            title={image.title}
            url={image.url}
            npm 
            />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid
