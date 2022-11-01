import  {
	HomeIcon,
	BoltIcon,
	CheckBadgeIcon,
	CollectionIcon,
	SearchIcon,
	UserIcon
} from "../assets/icons"

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const baseURL = "https://api.themoviedb.org/3"

const navContent = [
	{
		navText: "Home",
		Icon: HomeIcon
	},
	{
		navText: "Trending",
		Icon: BoltIcon
	},
	{
		navText: "Verified",
		Icon: CheckBadgeIcon
	},
		{
		navText: "Collection",
		Icon: CollectionIcon
	},
		{
		navText: "Search",
		Icon: SearchIcon
	},
		{
		navText: "Account",
		Icon: UserIcon
	},
]

const discover = `discover/movie?api_key=${API_KEY}&with_genres`

const tabs = [
	{
		tabText: "Trending",
		endpointURL: `trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	{
		tabText: "Top Rated",
		endpointURL: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	{
		tabText: "Action",
		endpointURL: `${discover}=28`,
	},
	{
		tabText: "Comedy",
		endpointURL: `${discover}=35`,
	},
	{
		tabText: "Horror",
		endpointURL: `${discover}=27`,
	},
	{
		tabText: "Romance",
		endpointURL: `${discover}=10749`,
	},
	{
		tabText: "Mystery",
		endpointURL: `${discover}=9648`,
	},
	{
		tabText: "Sci-Fi",
		endpointURL: `${discover}=878`,
	},
	{
		tabText: "Western",
		endpointURL: `${discover}=37`,
	},
	{
		tabText: "Animation",
		endpointURL: `${discover}=16`,
	},
	{
		tabText: "TV Movie",
		endpointURL: `${discover}=10770`,
	},
]




export {
	navContent,
	tabs,
	baseURL
}