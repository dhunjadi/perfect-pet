import {createContext, useState} from 'react'

export const AnswersContext = createContext();

export const AnswersContextProvider = ({children}) => {

    const [answers, setAnswers] = useState([])

    return(
        <AnswersContext.Provider value={{ answers, setAnswers }}>
        {children}
        </AnswersContext.Provider>
    )
}