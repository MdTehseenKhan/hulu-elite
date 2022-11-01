
import { createContext, useContext } from "react"

const MoviesContext = createContext()

export const useMovies = () => useContext(MoviesContext)

export const MoviesProvider = ({ children }) => {
	
	return (<MoviesContext.Provider value={{}}>
		{children}
	</MoviesContext.Provider>)
}