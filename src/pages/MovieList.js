// import React, { useEffect, useState } from 'react'
// import { json } from "react-router-dom"
import { useEffect } from "react"
import Card from "../components/Card"
import useFetch from "../hooks/useFetch";
import useTitle from '../hooks/useTitle'

export default function MovieList({apiPath, title}) { 

  const {data:movies} = useFetch(apiPath)

  const pagetitle=useTitle(title);

  // useEffect(()=>{
  //   document.title=`${title}/Cinematic Spark`
  // })


  return(
    
      <main>
        <section className="max-w-7xl py-7 mx-auto">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            { movies.map((movie) => (
              <Card key={movie.popularity} movieProp={movie}/> //we need to pass key for map()

              ) )}

          </div>
        </section>
      </main>
    
  )
}
