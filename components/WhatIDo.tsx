"use client"

import { Code, Palette, Zap, Award } from 'lucide-react';

export default function WhatIDo({id}: {id: string}) {
	return (
		<section id={id} className="w-[95%] justify-center mx-auto">
			<div className="">
				<h2 className="lg:text-[10vh] md:text-[8vh] text-[6vh] w-fit mx-auto text-wrap leading-[100%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
					What I Do
				</h2>
				<div className="grid md:grid-cols-3 gap-8 mt-[7vh]">
					{[
						{ icon: Code, title: 'Full-Stack Development', desc: 'Building robust applications with modern frameworks and best practices' },
						{ icon: Palette, title: 'AI / Machine Learning', desc: 'Designing intelligent systems and deliver impactful, automated insights.' },
						{ icon: Zap, title: 'Content Writing', desc: 'Crafting clear, engaging content that simplifies complex ideas in education, science, and technology.' }
					].map((service, i) => (
					<div key={i} className="bg-gray-800 p-8 rounded-xl hover:-translate-y-2 transition-all border border-gray-700 hover:border-emerald-400/50">
						<service.icon className="text-emerald-400 mb-4" size={40} />
						<h3 className="text-2xl font-bold mb-4">{service.title}</h3>
						<p className="text-gray-400 tracking-wide">{service.desc}</p>
					</div>
					))}
				</div>
			</div>
		</section>
	)
}