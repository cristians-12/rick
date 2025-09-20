import { useEffect, useState } from 'react'
import './App.css'
import Swiper from './components/swiper/Swiper';
import { Link } from 'react-router';

function App() {

  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(1)

  const aumentarPagina = () => {
    setPagina(pagina + 1);
  }

  const disminuirPagina = () => {
    setPagina(pagina - 1);
  }

  const obtenerPersonajes = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    const datos = await response.json();
    setPersonajes(datos.results);
    console.log(datos)
  }

  useEffect(() => {
    obtenerPersonajes();
  }, [pagina])

  const renderStatus = (status) => {
    if (status == 'Alive') {
      return 'green';
    } else if (status == 'Dead') {
      return 'red';
    } else {
      return 'gray';
    }
  }

  if (personajes.length == 0) {
    return (
      <h1>Cargando..</h1>
    )
  }

  const imagenes = [
    'https://imgs.search.brave.com/WZP0ghG5O5yrQRZGxQDfSruH0DkUEsD20TZdrmDTBwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM1/MzE1Nzg3L2RlL2Zv/dG8vbmludGVuZG8t/ZW50ZXJ0YWlubWVu/dC1zeXN0ZW0tdmlk/ZW8tZ2FtZS1jb250/cm9sbGVyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1tdTJO/ckxkOGFQOE82WXlo/Y19QOTRtSkduN0xT/dkIwSXFFZ3hPbFh2/R0dvPQ',
    'https://imgs.search.brave.com/110P8aIkPDbEIHsES3cVJ_gp58NxUdbug0dCvIWBX14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM0L05FU19UZXN0/X1N0YXRpb25fJl9T/TkVTX0NvdW50ZXJf/VGVzdGVyXzIwMTYw/ODE0LmpwZw'
  ]

  return (
    <>
      <Swiper images={imagenes} />
      <div className="container">
        {
          personajes.length > 0 ?
            (
              personajes.map(
                (personaje) => (
                  <Link to={`/personaje/${personaje.id}`} key={personaje.id}>
                    <img src={personaje.image} alt={personaje.name} />
                    <p>{personaje.name}</p>
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: renderStatus(personaje.status),
                        borderRadius: '50%'
                      }}></div>
                  </Link>
                )
              )
            )
            :
            (
              <h2>No hay personajes disponibles.</h2>
            )
        }
      </div>

      {
        pagina > 1
        &&
        <button onClick={disminuirPagina}>Pagina anterior</button>
      }
      <button onClick={aumentarPagina}>Siguiente pagina</button>
    </>
  )
}

export default App
