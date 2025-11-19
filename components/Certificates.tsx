"use client"

import { ReactNode } from "react"
import { ICertificate } from "@/app/types"

interface IPropAcheivements {
	id: string,
	image: string,
	label: string,
	title: string,
	level: string,
	description: string,
	date: string
}


export default function Certificates({certificates, id}: {certificates: ICertificate[], id: string}) {
	return (
		<section id={id} className="flex items-center justify-center mx-auto">
			<div className="">
				<h2 className="lg:text-[10vh] md:text-[8vh] text-[6vh] w-fit mx-auto text-wrap leading-[100%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
					Certificates
				</h2>
				<div className="mt-[7vh]">
					<div className="flex flex-wrap justify-center mx-auto gap-8">
					{
						certificates.sort((a, b) => {
							const dateA = new Date(a.created_at)
							const dateB = new Date(b.created_at)

							return dateB.getTime() - dateA.getTime()
						}).map((data, index) => 
							<div key={data.id} className="lg:w-[30%] rounded-lg bg-slate-800 hover:-translate-y-3 transition-all duration-200">
								<div className="w-full h-[35vh] rounded-t-lg overflow-hidden">
									<img className="rounded-t-lg w-full h-full object-cover" src={data.thumbnail_url ?? ''} alt={data.title} />
								</div>
								<div className="p-5">
									<div className="inline-block tracking-wide font-semibold w-fit p-1 px-3 bg-slate-200 text-slate-900 rounded-full text-sm">
									<p>{data.category}</p>
									</div>
									<h3 className="text-2xl font-bold mt-2 tracking-tight">{data.title}</h3>
									<p className="text-sm mt-2 tracking-[-0.2px]">{data.desc}</p>
								</div>
							</div>
							)
						}
					</div>
				</div>
			</div>
		</section>
	)
}