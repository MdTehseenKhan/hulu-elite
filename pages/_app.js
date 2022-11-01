import Router from "next/router"
import { MoviesProvider } from "../contexts/MoviesContext"
import ProgressBar from "@badrap/bar-of-progress"

import '../styles/globals.css'

const progress = new ProgressBar({
	size: 4,
	color: "#22c55e",
	className: "z-50",
	delay: 100
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

function MyApp({ Component, pageProps }) {
  return (
		<MoviesProvider>
		  <Component {...pageProps} />
		</MoviesProvider>
	)
}

export default MyApp
