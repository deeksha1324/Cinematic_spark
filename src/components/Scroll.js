// import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Scroll() {
    const {pathname} = useLocation()

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])

  return null
}


// every time we open a page that will be opened to the bottom. To make a page open from the top we are 
// using this window.scrollTo()
