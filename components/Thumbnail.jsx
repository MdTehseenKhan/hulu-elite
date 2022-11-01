import Image from "next/image"

const Thumbnail = ({ result }) => {
	const baseURL = "https://image.tmdb.org/t/p/original"
	console.log(result)
	return !result.adult && (
		<div>
			<div>
				<Image
					src={`${baseURL}/${result?.backdrop_path || result?.poster_path}` || `${baseURL}/${result?.poster_path}`}
					alt={result?.title || "Image Not Found"}
					layout="responsive"
					height={1024}
					width={1920}
					className=""
				/>
				{result.title}
			</div>
		</div>
	)
}
export default Thumbnail