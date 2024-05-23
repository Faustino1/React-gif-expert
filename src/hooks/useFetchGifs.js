import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

const useFetchGifs = (categoria) => {


    const [images, setImages] = useState([])
    const [isLoading, setIsloading] = useState(true)
    

    const getImages = async () => {
        const newImages = await getGifs(categoria)
        setImages(newImages)
        setIsloading(false)
    }

    // para que e renderice una sola vez el componente
    useEffect(() => {
        getImages()
    }, [])


    return {
        images,
        isLoading
    }
}

export default useFetchGifs
