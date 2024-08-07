import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import logo from '../assets/logo.png'
import useTitle from '../hooks/useTitle';


export default function MovieDetails() {
const params =useParams();
console.log(params);
const [data, setData] =useState([]);
const image= data.poster_path? (`https://image.tmdb.org/t/p/w500//${data.poster_path}`)  : logo ;
const pagetitle=useTitle(data.title)



useEffect(()=>{
  async function fetchMovie(){
    const response= await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d2bad6e42765fba3854d90bb2762cab2&language=en-US&page=1`)
    const json=await response.json()
    setData(json)
    console.log (json)
  }
  fetchMovie()
  
})

// useEffect(()=>{
//   document.title=`${data.title}/Cinematic Spark`
// })


  return (
    <main>
      <section className='flex justify-around  flex-wrap py-5'>
        <div className='max-w-sm'>
          <img className='rounded' src={image} alt={data.title} />
        </div>
        <div className='max-w-xl text-gray-900 dark:text-white'>
          <h1 className=' text-3xl font-bold my-4 text-center lg:text-left'>{data.title}</h1>
          <p className='dark:text-gray-300'>{data.overview}</p>
          
            {data.genres? 
              (<p className='my-6 flex flex-wrap gap-3'>
              {data.genres.map((gen)=>(
              <span key={gen.id} className='border-gray-600 border rounded-md p-1 my-2 dark:border-gray-500 dark:text-gray-300'>{gen.name}</span>
            ))}
            </p>) : ""}

              <div className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <p className="ms-2 text-gray-900 dark:text-white">{data.vote_average}</p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <span className=" text-gray-900 dark:text-white">{data.vote_count} reviews</span>
              </div>

              <p className='mt-4 mb-2'> 
                <span className='font-bold dark:text-gray-300 mr-2'>Release Date:</span>
                <span className='dark:text-gray-300'>{data.release_date}</span>
              </p>
              <p className='mb-2'>
                <span className='font-bold dark:text-gray-300 mr-2'> Runtime:</span> 
                <span className='dark:text-gray-300'>{data.runtime} min.</span>
              </p>
              
                  {/* {data.spoken_languages? ({data.spoken_languages.map((lang)=>(
                  <span>{lang.english_name}</span>
                ))}) : ""} */}


              <p>
                <span className='font-bold dark:text-gray-300 mr-2'>Imdb Id:</span>
                <a href={`https://www.imdb.com/title/${data.imdb_id}/`} target='_blank' rel='noreferrer' className='dark:text-gray-300 underline hover:no-underline'>{data.imdb_id}</a>
              </p>
              

          
        </div>
      </section>
    </main>
  )
}

