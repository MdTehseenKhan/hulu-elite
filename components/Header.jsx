import Image from "next/image"
import Link from "next/link"
import { Logo } from "../assets/images"
import { navContent } from "../constants"

const Header = () => {
	return (<>
		<header className="flex flex-col md:flex-row justify-between items-center">
			<div className="flex justify-evenly pt-5">
				{ navContent?.map(({ navText, Icon }, i) => (
					<div key={`${i}-${navText}`} className="flex flex-col items-center cursor-pointer group w-12 md:w-20">
						<Icon className="h-8 mb-1 group-hover:text-white group-hover:animate-bounce" />
						<p className="opacity-0 group-hover:opacity-100 uppercase tracking-widest ml-2">{navText}</p>
					</div>
				))}
			</div>
			<div className="">
				<Link href="/">
					<Image
						src={Logo}
						alt="logo"
						width={200}
						height={100}
						layout="fixed"
						className="object-contain"
					/>
				</Link>
			</div>
		</header>
	</>)
}
export default Header