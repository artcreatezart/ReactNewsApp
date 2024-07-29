import { ArticleContext } from "../context/ArticleContext";
import { useContext } from "react";

export const useArticlesContext = () => {
    const context = useContext(ArticleContext) // providing state and dispatch

    // Error Prevention
    if (!context) {
        throw Error('useArticlesContext hook must be used inside of ArticlecontextProvider')
    }

    return context 
}