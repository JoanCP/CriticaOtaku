import { useState } from "react"
import Footer from '../components/footer'


const Directorio = () =>{
    const [contador, setContador] = useState(0)
    return (
        <>
        <h1>estos es un botton</h1>
        <button onClick={() => setContador(contador+1)}>{contador}</button>

        <Footer/>
        </>
    )
    }

export default Directorio