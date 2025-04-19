
import React, { useEffect } from 'react'
import { GifState } from '../context/gif-context'

const Home = () => {
  const {gf,gifs,setGifs,filter,setFilter} = GifState();

  const fetchTrendingGifs = async () => {
    const {data} = await gf.trending(
      {
        limit: 20,
        type: filter,
        rating: "g"
      }
    )
    setGifs(data);
  }

  //whenever filter changes this function will be called again
  useEffect(()=>{
    fetchTrendingGifs()
  },[filter])

  return (
    <div>
      Home
    </div>
  )
}

export default Home