import { Mail, MapPin, Send, Github, Linkedin, Instagram, Youtube, IconNode, LucideIcon } from 'lucide-react';
import { FaTiktok, FaDiscord } from 'react-icons/fa6';
import { FormEvent, ReactElement, ReactInstance, useState } from 'react';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { resend } from '@/global';
import { ToastContainer, toast } from 'react-toastify';
import { EmailTemplate } from './EmailTemplate';
import { Resend } from 'resend';
import { sendCollaborationEmail } from '@/app/actions/email';



export default function Collaborate({id}: {id: string}) {

	const [formData, setFormData] = useState({
		name: '', // Replace with actual form values
		email: '',
		subject: '',
		message: ''
	})

	async function handleSubmit(e: FormEvent) {
		try {
			e.preventDefault()
			const result = await sendCollaborationEmail(formData);

			if (result.error) {
				toast.error(result.error);
			}

			toast.success('✅ Email sent successfully!');
			console.log('✅ Email sent successfully!')
		} catch (error) {
			toast.error("❌ something wrong")
			console.log("❌ something wrong: ", error)
		}
	}

	return (
		<section id={id} className="lg:w-[95%] mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10 flex flex-col items-center justify-center rounded-lg">
			<ToastContainer position='top-right'/>
			<div className='flex flex-col  gap-y-2 mb-[7vh] pt-5'>
				<h2 className="lg:text-[10vh] md:text-[8vh] text-[6vh] w-fit text-center justify-center mx-auto text-wrap leading-[100%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
					Let's Collaborate
				</h2>
				<p className='tracking-normal lg:text-[2.5vh] md:text-[2vh] text-[1vh] flex flex-wrap w-full text-center justify-center mx-auto text-gray-400'>
					Interested in my work? would love to have me in your project? Let's connect and collaborate!
				</p>
			</div>
			<div className="max-w-6xl w-full flex lg:flex-row flex-col gap-8 tracking-normal">
				{/* Left Side - Form */}
				<div className="lg:w-3/5 w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
								Name
							</label>
							<input
								type="text"
								id="name"
								placeholder="Your name"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
							/>

						</div>

						<div>
							<label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
								Email
							</label>
							<input
								type="email"
								id="email"
								placeholder="your.email@example.com"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
							/>
						</div>

						<div>
							<label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
								Message
							</label>
							<textarea
								id="message"
								rows={6}
								placeholder="Tell me about your project or idea..."
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-gray-900 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition"
							>
							<Send size={20} />
							Send Message
						</button>
					</form>
				</div>

				{/* Right Side - Contact Info */}
				<div className="lg:w-2/5 w-full flex flex-col justify-between tracking-normal">
					{/* Get in Touch */}
					<div className="space-y-8">
					<h2 className="text-4xl font-bold text-white">Get in Touch</h2>

					<div className="space-y-6">
					<div className="flex items-start gap-4">
						<div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
						<Mail className="text-gray-400" size={24} />
						</div>
						<div>
						<p className="text-gray-400 text-sm">Email</p>
						<p className="text-white text-lg">faqilahz53@gmail.com</p>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
						<MapPin className="text-gray-400" size={24} />
						</div>
						<div>
						<p className="text-gray-400 text-sm">Location</p>
						<p className="text-white text-lg">Nomaden</p>
						</div>
					</div>
					</div>
					</div>

					{/* Follow Me */}
					<div className="mt-12 flex flex-col">
					<h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
					<div className='flex flex-wrap gap-x-4'>
							{
								[
									{name: "Github",  href:  "https://github.com/akiraverse", icon: Github},
									{name: "Linkedin", href: "https://linkedin.com/in/fathimah-aqilah", icon: Linkedin},
									{name: "Instagram", href: "https://instagram.com/aqilahhhxx___", icon: Instagram},
									{name: "Youtube", href: "https://youtube.com", icon: Youtube},
									{name: "Tiktok", href: "https://www.tiktok.com/@aqilahhhxx___", icon: FaTiktok},
									{name: "Discord", href: "https://discord.com", icon: FaDiscord},
								].map((data) => {
									const IconComponent = data.icon;
									return (
										<div key={data.name} className="flex gap-6">
										<a
											href={data.href}
											target="_blank"
											rel="noopener noreferrer"
											className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition group"
										>
											<div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-green-400  transition">
											<IconComponent size={32} />
											</div>
											<span className="text-sm">{data.name}</span>
										</a>
									</div>
									);
								})
							}
					</div>  
					</div>
				</div>
			</div>
		</section>
	);
}