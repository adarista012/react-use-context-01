import React, { useContext, useState } from 'react'
import ContentContext from '../contexts/ContentContext'

function Content() {
  const { content } = useContext(ContentContext)
  const [card1, setCard1] = useState(false)
  const [card2, setCard2] = useState(false)
  
  const setVisible = () => {
    setCard1(true)
    setCard2(false)
  }
  const setVisiblePlace = () => {
    setCard2(true)
    setCard1(false)
  }
  return (
    <>
      <br/>  
      <h2> { content.titulo } </h2>
      <h3> { content.texto } </h3>
      <div className='containerButtons'>
        <div className='buttonGreen' onClick={ setVisible }> { content.boton1 } </div>
        <div className='buttonGreen' onClick={ setVisiblePlace }> { content.boton2 } </div>
      </div>
      <div className='containerCard'>
        {
          card1 ?
          <div className='card'>
            {content.boton1}
            <img className='cardImage' src={`${content.foto}`}/>
            {content.nombre}
          </div>
          : 
          <>
          </>
        }
        {
          card2 ?
          <div className='card'>
            {content.boton1}
            <br/>
            {content.direccion}
          </div>
          :
          <>
          </>
        }
        
      </div>
    </>
  )
}

export default Content
