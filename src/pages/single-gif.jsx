import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/gif-context';
import Gif from '../components/Gif';

const contentType=["stickers","gifs","texts"]

const GifPage = () => {
  const {type,slug}=useParams();
  const [gif,setGif]=useState({});
  const {gf}=GifState();
  const [related,setRelated]=useState({})
  const fetchGif=async ()=>{
    const gifID=slug.split("-")
    const {data} = await gf.gif(gifID[gifId.length-1]);
    const {data:related} = await gf.related(gifID[gifId.length-1],{
      limit: 10
    });
    setGif(data);
    setRelated(related)
  }

  useEffect(()=>{
    if(!contentType.includes(type)){
      throw new Error("Invalid content type")
    }
    fetchGif();
  },[])


  return (
    <div className='grid grid-cols-4 my-10 gap-4'>
      <div className='hidden sm:block'>
        sidebar
      </div>
      <div className='col-span-4 sm:col-span-3'>
        <div className='flex gap-6'>
          <div className='w-full sm:w-3/4'>
            <div className='faded-text truncate mb-2'>{gf.title}</div>
            <Gif gif={gif} hiver={false}/>
          </div>
          favourites/ share .embed
        </div>
        <div>
          <span className='font-extrabold'>Related Gifs</span>
        </div>
      </div>
    </div>
  )
}

export default GifPage