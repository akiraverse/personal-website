import React from 'react';
import Link from "next/link"

interface MenuItemProps {
	label: string;
	path: string;
	active?: boolean;
}
  
const MenuItem = ({ label, path, active }: MenuItemProps) => {
	return (
		<Link  href={path} className={`w-auto flex items-center p-2 my-2 ${active ? 'text-slate-200 font-normal' : 'text-slate-50 font-bold'}`}>
			<span className="w-full flex-1 text-[#D1D1D1] font-semibold text-xs tracking-wide">{label}</span>
		</Link>
	);
};
    
export default MenuItem