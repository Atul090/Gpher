
import React, { useEffect } from 'react'
import { GifState } from '../context/gif-context'
import Gif from '../components/Gif';
import FilterGif from '../components/filter-gif';

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
      <img 
        src="/banner.gif" 
        alt="earth banner" 
        className='mt-2 rounder w-full' 
      />
      <FilterGif showTrending/>
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5'>
        {gifs.map((gif)=>{
          console.log(gif,"hi")
          return <Gif gif={gif} key={gif.title} />
        })}
      </div>
    </div>
  )
}

export default Home