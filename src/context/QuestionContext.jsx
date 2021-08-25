import {createContext, useState} from 'react'

export const QuestionContext = createContext();

export const QuestionContextProvider = ({children}) => {

    const [displayQuestion, setDisplayQuestion] = useState(0)

    return(
        <QuestionContext.Provider value={{ displayQuestion, setDisplayQuestion }}>
        {children}
        </QuestionContext.Provider>
    )
}