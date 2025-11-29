"use client";

import { Button } from "@mui/material";
import { Bloodtype } from "../../../node_modules/@mui/icons-material/index";

interface MatchButtonProps {
  value: number; // the number to display and determine color
}

const MatchButton = ({ value }: MatchButtonProps) => {
  let bgColor = "";
  let textColor = "";
  let text = `Match: ${value} %`;

  if (value >= 0 && value <= 49) {
    bgColor = "#fca5a5";     // light red (bg)
    textColor = "#dc2626";   // bright red (text)
  } else if (value >= 50 && value <= 79) {
    bgColor = "#fef08a";     // light yellow (bg)
    textColor = "#ca8a04";   // bright yellow (text)
  } else if (value >= 80 && value <= 100) {
    bgColor = "#86efac";     // light green (bg)
    textColor = "#16a34a";   // bright green (text)
  }

  return (
    <Button
      variant="contained"
      disabled
      sx={{
        backgroundColor: bgColor,
          color: textColor,
          fontSize: 10,
          fontWeight:900,
        borderRadius: "9999px",   // fully rounded
        textTransform: "none",    // preserve text casing
        "&.Mui-disabled": {
          backgroundColor: bgColor,
          color: textColor,
          opacity: 1,             // override default opacity for disabled
        },
      }}
    >
      {text}
    </Button>
  );
};

export default MatchButton;
