import React, { createContext, useState } from 'react'



export const FlagsContext = createContext()

export const FlagsProvider = ({ children }) => {

    const [flag, setFlag] = useState('')

    return (
        <FlagsContext.Provider value={{ flag, setFlag }}>
            { children }
        </FlagsContext.Provider>
    )
}