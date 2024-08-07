import React, { useEffect } from "react";
import Pagenotfound  from "../assets/404img.jpg";
import {Link} from 'react-router-dom';


export default function PageNotFound() {
useEffect(()=>{
  document.title='Page Not found/ Cinematic Spark'
})

  return (
    <main>
      <section className="flex flex-col">
        <div className="flex flex-col items-center">
          <p  className="text-gray-800 font-bold text-3xl my-5 dark:text-white">Page not found !!!</p>
          <div className="max-w-md">
          <img className="rounded" src={Pagenotfound} alt="page not found" />
          </div>
        </div>
        
        <div className="flex justify-center my-10">
        <Link to="/">
        <button className="text-white w-60 text-bold font-medium text-2xl rounded-lg p-3 bg-gradient-to-r from-red-700 to-purple-700 hover:from-green-600 hover:to-blue-600">Back to Home</button> 
        </Link>
        </div>
      </section>
    </main>
  )
}
