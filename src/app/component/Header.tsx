"use client";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import Image from "next/image";
import logo from "../../../public/images/logo/LogoLight.webp";
import userImg from "../../../public/images/profile/avarter.jpg"
import { useState, useEffect, useRef } from "react";
import { Avatar } from "../../../node_modules/@mui/material/index";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#f9f9f9] py-2 px-[50px] w-full shadow-md border-b border-gray-300">
      <nav className="flex justify-between items-center ">
        {/* Logo */}
        <div>
          <Image
            className="h-[34px] w-[154px] md:h-[48px] md:w-[200px]"
            src={logo}
            alt="Logo"
          />
        </div>
        
        <div className="flex gap-3">
          {/* search bar  */}
          <div className="flex  w-md items-center gap-2 border border-transparent hover:border-indigo-500 cursor-pointer rounded-2xl bg-gray-100 p-2 text-gray-500 transition">
            <SearchIcon className=' text-gray-400'/>
            <input className="border-none focus:outline-none w-full bg-transparent" type="text" placeholder="search and discover" />
          </div>

          {/* Avatar */}
          <div className="flex items-center gap-2 text-gray-400">
            <Avatar src={userImg.src} alt="Profile Image" sx={{width:40, height:40}} />
            <ul className="list-none text-gray-400 cursor-pointer"><li className="flex gap-0.5">
              <span>Nikola James</span>
              <KeyboardArrowDownIcon />
              {/* Drop down menu can be added here */}
            </li></ul>
          </div>

          {/* setting and notification */}
          <div className="flex items-center">
            {/* Notification */}
            <IconButton><NotificationsIcon /></IconButton>
            
            {/* Setting */}
            <IconButton><SettingsIcon/></IconButton>
          </div>
          
        </div>

      </nav>


    </header>
  );
}
