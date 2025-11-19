"use client"

import { SiPandas } from "react-icons/si"

export default function TechStack({id}: {id: string}) {
	return (
		<section id={id} className="flex items-center justify-center mx-auto">
			<div className="">
				<h2 className="lg:text-[10vh] md:text-[8vh] text-[6vh] w-fit mx-auto text-wrap leading-[100%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
					Tech Stack
				</h2>
				<div className="mt-[7vh] flex flex-wrap justify-center mx-auto">
					{
						[
							{ alt: "python", src:"/svg/python-original.svg"},
							{ alt: "css", src:"/svg/css3-original.svg"},
							{ alt: "html5", src:"/svg/html5-original.svg"},
							{ alt: "tailwindcss", src:"/svg/tailwindcss-plain.svg"},
							{ alt: "nodejs", src:"/svg/nodejs-plain-wordmark.svg"},
							{ alt: "nextjs", src:"/svg/Next.js.svg"},
							{ alt: "javascript", src:"/svg/javascript-plain.svg"},
							{ alt: "typescript", src:"/svg/Typescript.svg"},
							{ alt: "pandas", src:"/svg/pandas-original.svg"},
							{ alt: "seaborn", src:"/svg/seaborn.svg"},
							{ alt: "keras", src:"/svg/Keras.svg"},
							{ alt: "tensorflow", src:"/svg/Tensorflow.svg"},
							{ alt: "java", src:"/svg/java-original.svg"},
							
						].map((icon, i) => (
							<div key={i} className="p-4 rounded-xl hover:-translate-y-2 transition-all">
								<div className="mx-5 w-[10vh] h-[10vh] flex items-center">
									<img src={icon.src} alt={icon.alt} />
								</div>
							</div>
						))
					}
				</div>
			</div>
		</section>
	)
}