'use client'

import { VideoIcon } from "@radix-ui/react-icons";
import { Link } from "react-scroll";
import { MenuItemProps, menuItems } from "./Header";

const FooterComponent = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto p-12">
        <div className="grid grid-cols-4 gap-8 w-full h-full">
          <div className="w-auto h-full flex justify-items-center">
            <div className="flex items-center gap-1.5">
              <VideoIcon width={40} height={40} className="text-[#FA4032]" /> 
              <p className="text-4xl font-semibold">MOVIES</p>
              <p className="text-4xl text-[#FA4032] font-semibold">ZONE</p>
            </div>
          </div>

          <div className="grid gap-5 justify-center">
            <FootHeader title="Useful Links"/>
            <div className="grid gap-5 text-start pl-3">
              {[...menuItems.map((menu: MenuItemProps, idx: number) => (
                <FootMenu key={menu.href || idx} to={menu.href} name={menu.name} />
              )),
              <FootMenu key="series" to="/" name="Series" />]}
            </div>
          </div>

          <div className="flex gap-10">
            <div>
              <FootHeader title="Address"/>
              <div className="grid gap-9 mt-4">
                <FootBorderMenu 
                  head="Address:" 
                  content="Phnom Penh, Cambodia" 
                />
                <FootBorderMenu 
                  head="Email:" 
                  content="dang.dangmakara@gmail.com" 
                />
              </div>
            </div>

            <div>
              <FootHeader title="Phone"/>
              <div className="mt-4">
                <FootBorderMenu 
                  head="Service:" 
                  content="012345678" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div 
        className="
          flex 
          justify-center 
          bg-slate-black
          backdrop-blur-3xl 
          py-2.5
          border-t 
          border-slate-800
        "
      >
        <p className="text-slate-400 text-lg">Made by makaradang 🌱</p>
      </div>
    </div>
  )
}

const FootMenu = ({to, name}:{to: string; name: string;}) => {
  return (
    <Link 
      to={to} 
      href='' 
      spy={true}
      delay={0}
      duration={500}
      smooth={true}
      activeClass="!text-[#FA4032]" 
      className="hover:!text-[#FA4032]"
    >
      {name}
    </Link>
  )
}

const FootBorderMenu = ({head, content}:{head: string; content: string;}) => {
  return (
    <div className="border-t border-slate-500">
      <div className="mt-3.5 flex items-center gap-1.5">
        <p className="font-medium text-slate-200 text-lg">{head}</p>
        <p className="text-slate-400 text-lg">{content}</p>
      </div>
    </div>
  )
}

const FootHeader = ({title}:{title: string;}) => {
  return (
    <p className="text-2xl font-semibold">{title}</p>
  )
}
export default FooterComponent;