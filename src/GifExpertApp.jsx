import { useState } from "react"
import AddCategorias from "./componentes/AddCategorias"
import GifGrid from "./componentes/GifGrid"

//const ApiKery = PcEnm1H3NSo4QLHte7Os8OrBOcbgTffx;
export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Barca'])
    
    const onCategoria = ( newCategoria ) =>{
        if (categorias.includes(newCategoria)) return;
        //Agregar categorias eje categoria.push
        //setCategorias(['Nueva', ...categorias])
        setCategorias([newCategoria, ...categorias])
        //console.log(newCategoria);
    }

  return (
    <>
      <h1>GifExperApp</h1>

      <AddCategorias 
      //setCategorias={setCategorias}
        onNewCategoria={onCategoria}
        currentCategoria = {categorias}
      
      />
        {
            categorias.map( categoria =>
               <GifGrid key={categoria} categoria = {categoria}/>
            )
        }
    </>
  )
}

export default GifExpertApp
