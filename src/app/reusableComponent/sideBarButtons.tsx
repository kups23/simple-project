"use client";

import { Stack, Button } from "@mui/material";
import { ReactNode } from "react";
import Link from "next/link";


type SideBarButtonProps = {
  text: string;
  icon?: ReactNode;
  href: string; // URL to navigate to
  currentPath: string; // current path to check active
};

const SideBarButtons = ({ text, icon, href, currentPath }: SideBarButtonProps) => {
  const isActive = currentPath === href;

  return (
    <Link href={href} className="w-full">
      <Button
        variant={isActive ? "contained" : "text"}
        color={isActive ? "primary" : "inherit"}
        startIcon={icon}
        fullWidth
        sx={{
            justifyContent: "flex-start", // align left
          textTransform: "none",        // keep original text casing
          fontSize: {
            sm: "10px",
            md: "1rem",     // ~16px default
          },
          }}
      >
        {text}
      </Button>
    </Link>
  );
};

export default SideBarButtons;
