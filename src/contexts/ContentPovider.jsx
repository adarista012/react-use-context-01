import React, { useState } from 'react'
import ContentContext from './ContentContext'
import { valores } from '../languajes'

function ContentPovider({ children }) {
  const [content, setContent] = useState(valores[0])  
  return (
    <ContentContext.Provider value={{ content, setContent }}>
        { children }
    </ContentContext.Provider>
  )
}

export default ContentPovider
