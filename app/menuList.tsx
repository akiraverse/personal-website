import { ReactNode } from "react"

interface IPropMenu {
	id: string,
	path: string,
	label: string,
}

let MenuList: IPropMenu[] = [
	{
		id: `about-me`,
		path: `/aboutme`,
		label: `About me`,
	},
	{
		id: `what-i-do`,
		path: `/whatido`,
		label: `What I do`,
	},
	{
		id: `projects`,
		path: `/projects`,
		label: `Projects`,     
	},
	{
		id: `connect`,
		path: `/connect`,
		label: `Connect`,
   
	},
	{
		id: `curriculum-vitae`,
		path: `https://drive.google.com/file/d/1RX6HxPKwuej9yvYN7v_2hY_g9_9Cp2V2/view?usp=sharing`,
		label: `Curriculum Vitae`,
   
	},
]

export default MenuList
  
  