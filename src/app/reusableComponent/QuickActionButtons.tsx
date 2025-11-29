"use client";

import { Stack, Button } from "@mui/material";
import { ReactNode } from "react";
import Link from "next/link";


type QuickActionButtonProps = {
  text: string;
    icon?: ReactNode;
    color?: "primary" | "inherit" | "error";
    variant: 'contained' | 'outlined';
    href: string;
};

const QuickActionButtons = ({ text, icon,href, variant='outlined',color='inherit',}: QuickActionButtonProps) => {

  return (
    <Link href={href} className="w-full">
      <Button
        variant={variant}
        color= {color}
        startIcon={icon}
              fullWidth
              sx={{
                // Border stays gray for red + text
                borderColor: color === "primary" ? undefined : "gray",
              
                // Text color logic  if color is primary default button font else if text gray text and border if red gray border and text red
                color:
                  color === "primary"
                    ? undefined              // use MUI primary text color
                    : color === "error"
                    ? "red"                  // red text
                    : "gray",                // gray text for "text"
              
                "&.MuiButton-outlined": {
                  borderColor: color === "primary" ? undefined : "gray",
                },
              }}
      >
        {text}
      </Button>
    </Link>
  );
};

export default QuickActionButtons;
