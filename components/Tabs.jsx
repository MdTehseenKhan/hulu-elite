import { useRouter } from "next/router"
import { tabs } from "../constants"

const Tabs = () => {
	const router = useRouter()
  
	return (<nav className="relative">
		<div className="fade-effect left-0 bg-gradient-to-l" />

		<div className="flex items-center space-x-4 px-5 pr-10 whitespace-nowrap overflow-x-auto scrollbar-hide">
			{ tabs.map(({ tabText, endpointURL }, i) => {
				const genre = tabText.replace(" ", "_").toLowerCase()
				return <button
					key={`${i}-${tabText}`}
					onClick={() => router.push(`/?genre=${genre}_${i}`)}
					className="px-5 py-2.5 outline-none hover:scale-125 hover:text-white active:text-green-500">
					{tabText}
				</button>
			}) }
		</div>

		<div className="fade-effect right-0 bg-gradient-to-r" />
	</nav>)
}
export default Tabs