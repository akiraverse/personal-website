import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { IBlog } from '@/app/types';

export default function Blogs({ blogs, id }: { blogs: IBlog[], id: string }) {
	return (
		<section id={id} className="lg:w-[95%] md:w-full sm:w-full justify-center mx-auto">
			<h2 className="lg:text-[10vh] md:text-[8vh] text-[6vh] w-fit mb-[7vh] mx-auto text-wrap leading-[100%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
				Blogs
			</h2>
			<div className="flex-shrink-0">
				{
					blogs.map((data) => (
						<div key={data.id} className='w-full h-fit flex flex-col rounded-lg bg-slate-800 tracking-wide gap-y-1 mb-[3vh] p-10 hover:border hover: hover:border-green-400'>
							{/* Content */}
							<h1 className="text-xl font-bold text-white hover:text-green-300 transition-colors ">
								{data.title}
							</h1>

							<div className="text-base flex items-center hover:text-slate-200">
								<Calendar size={14} className="text-green-600" />
								<span>{new Date(data.created_at).toLocaleDateString()}</span>
							</div>

							<div className="flex items-center gap-2 text-sm ">
								<span className="bg-slate-700 p-1 px-2 rounded-full text-slate-300 font-bold">{data.category}</span>
							</div>

							<div className="w-full truncate overflow-hidden relative items-center text-base">
								<p className='leading-relaxed text-lg'>{data.description}</p>
							</div>
						</div>
					))
				}
				
			</div>
		</section>
	);
};
