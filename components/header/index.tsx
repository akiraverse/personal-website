"use client"
import Head from "next/head";
import { ReactNode } from "react";
import MenuItem from "./menuItem";

type MenuType = {
   id: string,
   path: string,
   label: string
}

type ManagerProp = {
   children: ReactNode,
   id: string,
   title: string,
   menuList: MenuType[]
}


interface MenuItemProps {
	icon: React.ReactNode;
	label: string;
	path: string;
	active?: boolean;
}

//{children, id, title, menuList}: ManagerProp
const Header = ({children, id, title, menuList}: ManagerProp) => {
	return (
      <div className="w-[85%] justify-center mx-auto">
         <div className="w-[100%] border-b-2 border-b-[#4D4D4D] mt-2">
            <header className="w-[90%] flex flex-row text-slate-50 justify-center mx-auto py-4">
               <div className="w-auto mr-auto overflow-y-auto">
                  <h1 className="font-bold flex items-center p-2 my-2">Akiraverse</h1>
               </div>

               <div className="w-auto h-auto">
                  <div className="w-auto h-full flex flex-row gap-x-8">
                     {
                        menuList.map((menu, index) => (
                           <MenuItem label={menu.label} path={menu.path} active={menu.id === id} key={`keyMenu${index}`} />
                        ))
                     }
                  </div>
               </div>
            </header>
         </div>

         <div className="mt-24">
            {children}
         </div>
      </div>
	)
}

export default Header