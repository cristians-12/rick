import { useEffect, useState } from 'react'
import './swiper.css'

export default function Swiper({images}){

    const [contador, setContador] = useState(1);

    useEffect(
        ()=>{
            setInterval(
                ()=>{

                }, [4000]
            )
        }, []
    )

    return(
        <div className="container">
            <div style={{width:`${images.length * 100}vw`, height: '100%', display:'flex' }}>
                {images.map(
                    (image)=>(
                        <img src={image} alt="" />
                    )
                )}
            </div>
        </div>
    )
}