import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Container,
  Tabs,
  Tab,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import logo from "../../Assets/img/logo.png";
import DrawerCom from "./DrawerCom";


const Index = ({ links }) => {
  const theme = useTheme();
  //console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  //console.log(isMatch)

  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar sx={{ background: "white" }} position="sticky">
      <Toolbar>
        {isMatch ? (
          <>
            <Box component="img" src={logo} alt="logo" width={200} />
            <DrawerCom links={links} />
          </>
        ) : (
          <Container>
            <Grid container justify="flex-end" sx={{ placeItems: "center" }}>
              <Grid item xs={3}>
                <Box component="img" src={logo} alt="logo" width={200} />
              </Grid>

              <Grid item xs={9}>
                <Box display="flex" justifyContent="flex-end">
                  <Tabs
                    component="nav"
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="nav tabs">
                    <Tab
                      sx={{ textTransform: "capitalize" }}
                      label="Home"
                      href="/"
                    />
                    <Tab
                      sx={{ textTransform: "capitalize" }}
                      label="About"
                      href="/about"
                    />
                    <Tab
                      sx={{ textTransform: "capitalize" }}
                      label="Menu"
                      href="/menu"
                    />
                    <Tab
                      sx={{ textTransform: "capitalize" }}
                      label="Reservations"
                      href="/bookings"
                    />
                    <Tab
                      sx={{ textTransform: "capitalize" }}
                      label="Order Online"
                      href="/order"
                    />
                    <Tab
                      sx={{ textTransform: "capitalize" }}
                      label="Contact"
                      href="/contact"
                    />
                    <Tab
                      sx={{ textTransform: "capitalize" }}
                      label="Login"
                      href="/login"
                    />
                  </Tabs>
                </Box>
              </Grid>
            </Grid>
          </Container>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Index;
