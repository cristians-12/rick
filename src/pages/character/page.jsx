import { useEffect } from "react";
import { useParams } from "react-router"

export default function CharacterPage() {

    const { id } = useParams();

    const getDetail = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const datos = await response.json();
        console.log(datos);
    }

    useEffect(
        () => {
            getDetail();
        }, [id]
    )

    return (
        <div>
            <h1>La id del personaje es {id}</h1>
        </div>
    )
}