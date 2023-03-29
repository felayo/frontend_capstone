import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerCom = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer PaperProps={{ sx: {backgroundColor: 'blue'}}} open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((link, index) => (
            <ListItemButton onClick={() => setOpen(!open)} key={index} divider>
              <ListItemIcon>
                <ListItemText sx={{color: 'white'}}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerCom;
