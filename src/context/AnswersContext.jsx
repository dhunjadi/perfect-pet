import {createContext, useState, useEffect} from 'react'

export const AnswersContext = createContext();

export const AnswersContextProvider = ({children}) => {

    const [answers, setAnswers] = useState([])

    // Spremanje odgovora iz local storage-a u state

    useEffect(() => {
        const data = localStorage.getItem('my-answers') // Spremanje vrijednosti u state
        if(data) {
            setAnswers(JSON.parse(data))
        }
    }, [])

    // Spremanje odgovora u local storage

    useEffect(()=>{
        localStorage.setItem('my-answers', JSON.stringify(answers)) //Izrada Key-a
    })

    return(
        <AnswersContext.Provider value={{ answers, setAnswers }}>
        {children}
        </AnswersContext.Provider>
    )
}