import { useState } from "react"

const AddCategorias = ({ onNewCategoria }) => {

    const [inpuValue,setInpuValue] = useState('')
    
  const onInputChange = ( {target}) =>{
    setInpuValue(target.value)
  }

  const onSubmit=(event) =>{
    event.preventDefault()
    //inpuValue.trim().length <=1 ? not : inpuValue
    if(inpuValue.trim().length <=1) return;
    //setCategorias(setCategorias =>[inpuValue, ...setCategorias])
    onNewCategoria( inpuValue.trim() );
    setInpuValue('')
  }

  return (
    <form onSubmit={ onSubmit } >
    <input 
        type="text" 
        placeholder="Busar gifs"
        value={ inpuValue }
        onChange = {onInputChange}
    />
    </form>  
  )
}

export default AddCategorias
