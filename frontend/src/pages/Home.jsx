import React from 'react'
import Hero from '../components/Home/Hero'
import Steps2 from '../components/Home/Steps2'
import LoadingHome from '../helpers/Loaders/LoadingHome'
import { useState, useEffect } from 'react'

const Home = () => {

  const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 900);
    }, []);

  return (
    <section className={`${loading ? "w-full h-full flex justify-center" : null}`}>
  { loading ? <LoadingHome/> : <Hero /> }
      
      <Steps2/>
    </section>
  )
}

export default Home