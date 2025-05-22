import { ReactNode } from "react"

interface IPropAcheivements {
	id: string,
	image: string,
	label: string,
	title: string,
	level: string,
	description: string,
	date: string
}

let AchievementsList: IPropAcheivements[] = [
	{
		id: 'lks-ai-province',
		image: '/image/lks.jpeg',
		label: 'lks-ai-province',
		title: '1st Winner in LKS Artificial Intelligence 🔢',
		level: 'Province - By Dikmen',
		description: 'A 2-day coding competition in building ML algorithms, but 5 months preps. I learn advanced mathematical concepts, data visualization and story telling.',
		date: 'April 2025'
	},
	{
		id: 'fiksi',
		image: '/image/fiksi.jpeg',
		label: 'fiksi',
		title: '1st Winner in FIKSI 2024 💡',
		level: 'National - by Pusresnas',
		description: 'I learn how to build a good problem-solution fit through design thinking, delivering tech benefits to clients through this entrepreneurship-based competition!',
		date: 'November 2024'
	},
	{
		id: 'mage',
		image: '/image/mage.jpeg',
		label: 'mage',
		title: '1st Winner in Mage IoT #9 🤖',
		level: 'National - by ITS',
		description: 'My first ever competition with TheNextWay, we made TheBrambang, an IoT-based application for tracking red onions conditions.',
		date: 'November 2023'
	},
	{
		id: 'ksn',
		image: '/image/ksn.jpeg',
		label: 'ksn',
		title: '1st Runner Up in National Standarization Competition 📝',
		level: 'National - by BSN',
		description: 'We made a standarization regarding Smart Home Appliances by considering requirements, testing and threahts especially in AI',
		date: 'May 2024'
	},
	{
		id: 'fedex',
		image: '/image/fedex.png',
		label: 'fedex',
		title: 'Top 10 Finalist FedEx International Trade Challenge 🤝',
		level: 'National - by FedEx',
		description: 'We recommend a solution to tackle an issue of water conservation in Australia through an rice husk based plastics that can degrade fast.',
		date: 'May 2024'
	},
	{
		id: 'steam',
		image: '/image/sft.jpeg',
		label: 'steam',
		title: '3rd Winner STEAM Competition 🔭',
		level: 'National - by Sampoerna Academy',
		description: 'We recommend a solution to tackle an issue of water conservation in Australia through an rice husk based plastics that can degrade fast.',
		date: 'March 2024'
	},
	{
		id: 'lks-ai-city',
		image: '/image/lks-city.jpeg',
		label: 'lks-ai-city',
		title: '2nd Winner LKS Artificial Intelligence 💻',
		level: 'City - by Dikmen',
		description: 'Me and my partner made an application for predicting a person has diabetes or with decision tree algorithm that saperates category based certain parameters',
		date: 'May 2024'
	},
	{
		id: 'sft',
		image: '/image/sft.jpeg',
		label: 'lks-ai-city',
		title: 'Semifinalist Samsung Solve For Tomorrow 👩🏻‍💻',
		level: 'City - by Dikmen',
		description: 'We brought and strengthen Revive through SFT workshops, particularly design thinking and AI as well as mentoring.',
		date: 'April 2024'
	},
	{
		id: 'binus',
		image: '/image/binus.jpeg',
		label: 'binus',
		title: 'Top 5 Binus Business Case Competition',
		level: 'National - by binus',
		description: 'We made a strategic solution through design thinking and reasearch approach to solve declining engagement trend in novo club by paragon',
		date: 'November 2024'
	}
]

export default AchievementsList
  
  