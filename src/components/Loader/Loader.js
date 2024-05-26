import React from 'react'
import LoderImg from "../../images/loader.svg"
import "./Loader.css"
function Loader() {
  return (
    <div className='loader flex felx-c '>
        <img src={LoderImg} alt="Loader" />
    </div>
  )
}

export default Loader