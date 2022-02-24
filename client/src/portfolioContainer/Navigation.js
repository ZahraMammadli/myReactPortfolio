import * as React from "react";

// Import icons for nice styling of navigation component
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import InfoIcon from "@mui/icons-material/Info";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AttachmentIcon from "@mui/icons-material/Attachment";
import NavNames from "./NavNames";

export default function LabelBottomNavigation({ setCurrDiv, value }) {
  const handleChange = (event, newValue) => {
    setCurrDiv(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="AboutMe"
        value={NavNames.PROFILE}
        icon={<InfoIcon />}
      />
      <BottomNavigationAction
        label="Projects"
        value="Projects"
        icon={<FolderIcon />}
      />
      <BottomNavigationAction
        label="ContactMe"
        value="ContactMe"
        icon={<ContactPhoneIcon />}
      />
      <BottomNavigationAction
        label="Resume"
        value="Resume"
        icon={<AttachmentIcon />}
      />
    </BottomNavigation>
  );
}
