"use client"

import React, { useEffect, useState } from "react";
import { ExternalLink, EyeIcon } from "lucide-react";
import { IProject } from "@/app/types";
import Link from "next/link";

export default function Projects({ projects, id }: { projects: IProject[], id: string }) {
	
	return (
		<section id={id} className="w-full justify-center mx-auto">
			<h2 className="lg:text-[10vh] md:text-[8vh] text-[6vh] w-fit mx-auto text-wrap leading-[100%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
				Projects
			</h2>
			<div className="w-full flex flex-wrap mt-[7vh] justify-center gap-8">
				{
					projects.map((data) => (
						<div key={data.id}
						className="lg:w-[30%] md:w-full sm:w-full w-full rounded-lg bg-slate-800 hover:-translate-y-3 transition-all duration-200">
								<div className="w-full h-[35vh] rounded-t-lg overflow-hidden">
									<img className="rounded-t-lg w-full h-full object-cover" src={`${data.thumbnail_url}`} alt="" />
								</div>
								<div className="p-5 h-auto">
									<div className="inline-block tracking-wide font-semibold w-fit p-1 px-3 bg-slate-200 text-slate-900 rounded-full text-sm">
										<p>{data.category}</p>
									</div>
									<h3 className="text-2xl font-bold mt-2 tracking-tight">{data.title}</h3>
									<p className="text-sm mt-2 tracking-[-0.2px] max-h-[20vh] truncate">{data.description}</p>
									<div className="mt-4 flex gap-3">
										<Link href={data.github_url} target="_blank" rel="noreferrer" className="px-4 py-2 text-sm tracking-tighter bg-slate-700 rounded-md flex flex-row gap-x-2">
											<ExternalLink />
											<p>GitHub</p>
										</Link>
										<Link href={`/projects/${data.id}/${data.title.toLowerCase().replace(/[\s/]+/g, '-')}`} target="_blank" rel="noreferrer" className="px-4 py-2 text-sm tracking-tighter bg-slate-700 rounded-md flex flex-row gap-x-2">
											<EyeIcon />
											<p>Detail</p>
										</Link>
									</div>
								</div>
						</div>
					))
				}
			</div>
			
		</section>
	);
}