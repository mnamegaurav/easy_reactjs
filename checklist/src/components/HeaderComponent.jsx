import React from "react";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LogoImage from "../assets/images/logo.png";

export default function HeaderComponent() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">
            <img src={LogoImage} alt="logo" width="35" />
            Keep
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
