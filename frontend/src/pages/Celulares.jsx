import {useEffect, useState} from 'react'
import CellPhones from '../components/CellPhones/CellPhones'
import LoadingHome from '../helpers/Loaders/LoadingHome'


const Celulares = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 1000);
  }, []);

  return (
    <section className={`${loading ? "h-screen flex justify-center items-center" : null}`}>
     {loading ? <LoadingHome/> : <CellPhones/> }
    </section>
  )
}

export default Celulares
