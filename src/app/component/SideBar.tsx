"use client";

import SideBarButtons from "../reusableComponent/sideBarButtons";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import UpdateIcon from '@mui/icons-material/Update';
import DescriptionIcon from '@mui/icons-material/Description';
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname(); // current URL path

  return (
    //  side bar menus
      <div className="text-gray-400 py-12 flex flex-col px-4 gap-2">
        
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
    </div>
  );
};

export default SideBar;
