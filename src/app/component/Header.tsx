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
import SideBarButtons from "../reusableComponent/sideBarButtons";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import UpdateIcon from '@mui/icons-material/Update';
import DescriptionIcon from '@mui/icons-material/Description';
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();
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
    <header className="bg-[#f9f9f9] px-[10px] py-2 lg:px-[50px] w-full shadow-md border-b border-gray-300">
      <nav className="flex justify-between items-center ">
        
        {/* Logo */}
        <div>
          <Image
            className="h-[34px] w-[154px] md:h-[48px] md:w-[200px]"
            src={logo}
            alt="Logo"
          />
        </div>
        
        <div className="flex gap-3 items-center">
          
          {/* search bar (hidden on md) */}
          <div className="flex max-md:hidden  w-3xs lg:w-md items-center gap-2 border border-transparent hover:border-indigo-500 cursor-pointer rounded-2xl bg-gray-100 p-2 text-gray-500 transition">
            <SearchIcon className=' text-gray-400'/>
            <input className="border-none focus:outline-none w-full bg-transparent" type="text" placeholder="search and discover" />
          </div>

          {/* Avatar */}
          <div className="flex items-center gap-2 text-gray-400 relative">
            <Avatar src={userImg.src} alt="Profile Image" sx={{width:40, height:40}} />

            {/* Toggle dropdown */}
            <ul className="list-none text-gray-400 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              <li className="flex gap-0 items-center">
                <span className="max-md:text-sm">Nikola James</span>
                <KeyboardArrowDownIcon />
              </li>
            </ul>

            {/* Drop down menu for mobile */}
            {menuOpen && (
              <div
                ref={menuRef}
                className="absolute top-12 right-0 bg-white w-56 shadow-lg rounded-xl p-4 flex flex-col gap-4 md:hidden"
              >
                {/* Search Bar */}
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-2 bg-gray-50">
                  <SearchIcon className="text-gray-400" />
                  <input
                    className="border-none focus:outline-none bg-transparent w-full text-sm"
                    type="text"
                    placeholder="search and discover"
                  />
                </div>

                {/* Links */}

                  <div className="text-gray-400 p4 flex  flex-col   gap-2">
                      
                        {/* dashboard */}
                      <SideBarButtons
                          text="Dashboard"
                          icon={<PersonAddAltIcon />}
                          href="/"
                          currentPath={pathname}
                        />
                        
                      {/* Job Management */}
                      <SideBarButtons
                          text="Job Management"
                          icon={<CollectionsBookmarkIcon />}
                          href="/job-management/1"
                          currentPath={pathname}
                        />
                  
                      {/* Sponsored Jobs */}
                      <SideBarButtons
                          text="Sponsored Jobs"
                          icon={<PersonAddAltIcon />}
                          href="/sponsored-jobs"
                          currentPath={pathname}
                        />

                      {/* Credits & Billing */}
                      <SideBarButtons
                          text="Credits & Billing"
                          icon={<DescriptionIcon />}
                          href="/credit-billing"
                          currentPath={pathname}
                        />

                      {/* Analytics & Insights */}
                      <SideBarButtons
                          text="Analytics & Insights"
                          icon={<UpdateIcon />}
                          href="/analytics-insights"
                          currentPath={pathname}
                  />
                  
                           {/* Setting */}
                          <SideBarButtons
                          text="Settings"
                          icon={<SettingsIcon/>}
                          href="/settings"
                          currentPath={pathname}
                  />
                  
                         {/* Notification */}
                          <SideBarButtons
                          text="Notification"
                          icon={<NotificationsIcon />}
                          href="/notification"
                          currentPath={pathname}
                        />
                    </div>

              </div>
            )}
          </div>

          {/* settings & notification (hidden on md) */}
          <div className="flex max-md:hidden items-center">
            <IconButton><NotificationsIcon /></IconButton>
            <IconButton><SettingsIcon/></IconButton>
          </div>
          
        </div>

      </nav>
    </header>
  );
}
