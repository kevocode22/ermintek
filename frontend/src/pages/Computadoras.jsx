import { useEffect, useState } from 'react'
import Computers from '../components/Computers/Computers'
import LoadingHome from '../helpers/Loaders/LoadingHome'

const Computadoras = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 1000);
}, []);

  return (
    <div className={`${loading ? "h-screen flex justify-center items-center" : null}`}>
    {loading ? <LoadingHome/> : <Computers/> }
    </div>
    )
}

export default Computadoras