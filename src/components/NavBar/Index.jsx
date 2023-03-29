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

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

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
                    {links.map((link, index) => (
                      <LinkTab
                        sx={{ textTransform: "capitalize" }}
                        key={index}
                        label={link}
                        href="/"
                      />
                    ))}
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
