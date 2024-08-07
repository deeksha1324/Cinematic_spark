
import React from 'react'
import Card from "../components/Card"
import useFetch from "../hooks/useFetch"
import { useSearchParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';


export default function Search({apiPath}) {
  
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const {data:movies} = useFetch(apiPath, queryTerm);

  const pagetitle=useTitle(`Search results for ${queryTerm}`)

  // useEffect(()=>{
  //   document.title=`Search results for ${queryTerm}/Cinematic Spark`
  // })

  return (
    <main>
      <section className='py-5'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length===0 ? `No results found for '${queryTerm}'` : `Results for '${queryTerm}' ` }</p>
      </section>
        <section className="max-w-7xl py-7 mx-auto">
          <div className="flex justify-start flex-wrap">
            { movies.map((movie) => (
              <Card key={movie.popularity} movieProp={movie}/> //we need to pass key for map()

              ) )}

          </div>
        </section>
      </main>
  )
}

