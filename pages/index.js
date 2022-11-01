
import { PageTitle, Header, Tabs, Thumbnail } from "../components"
import { tabs } from "../constants"

export default function Home({ results }) {
	
  return (<>
		<PageTitle>Hulu elite | Home</PageTitle>
    <div>
      <Header />
			<Tabs />
			
			<main>
				<div className="p-10">
					{ results?.map((result, i) => (
							<Thumbnail
								key={result?.id}
								result={result}
							/>
						)) }
				</div>
			</main>
    </div>
	</>)
}

export async function getServerSideProps(context) {
	const genre = context.query.genre
	const index = genre?.split("_")?.slice(-1) || 0

	const res = await fetch(`https://api.themoviedb.org/3/${tabs[index]?.endpointURL}`)
	const { results } = await res.json()

	return {
		props: {
			results
		}
	}
}