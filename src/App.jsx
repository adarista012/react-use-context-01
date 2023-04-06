import { useContext, useState } from 'react'
import { FlagsProvider, FlagsContext } from './contexts/FlagsContext'
import Flag from './components/Flag'
import './App.css'
import Content from './components/Content'
import { valores } from './languajes'
import ContentPovider from './contexts/ContentPovider'

function App() {

  const list = valores.map((e, index) => <Flag key={index} flag={e}/>)

  return (
    <>
    <FlagsProvider>
      <ContentPovider>
        <div className='containerFlags'>
          { list }
        </div>
        <div>
          <Content />
        </div>
      </ContentPovider>
    </FlagsProvider>
    </>
  )
}

export default App
