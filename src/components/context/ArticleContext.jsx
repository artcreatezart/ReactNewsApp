// allowing us to access the state however usereducer has multiple different methods to it 
import { createContext, useReducer } from "react";

export const ArticleContext = createContext()

export const articlesReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ARTICLES': {
            return {
                articles: action.payload
            }
        }
        default:
            return state
    }
}

export const ArcticleContectProvider = ({children}) => {
    const [state, dispatch] = useReducer(articlesReducer)
    return (
        <ArticleContext.Provider value={{...state, dispatch}}>
            {children}
        </ArticleContext.Provider>
    )
}