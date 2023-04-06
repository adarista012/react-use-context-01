import React, { useContext } from 'react'
import { FlagsContext } from '../contexts/FlagsContext'
import ContentContext from '../contexts/ContentContext'
import { valores } from '../languajes'

const Flag = ({ flag }) => {

  const { setFlag } = useContext(FlagsContext)
  const { setContent }  = useContext(ContentContext)

  const changeFlag = () => {
    setFlag(flag.flag)
    if(flag.flag.includes('spain'))
      setContent(valores[0])
    if(flag.flag.includes('uk'))
      setContent(valores[1])
    if(flag.flag.includes('francia'))
      setContent(valores[2])
    
  }

  return (

    <img 
        src={flag.flag} 
        className='flag' 
        onClick={changeFlag}
    />

  )
}

export default Flag
