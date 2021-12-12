import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Favorites from "pages/Favorites/Favorites";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import { Home } from "pages/Home/style";
import { UserList } from "components/UserList/style";

const NavBar = () => {
  const [value, setValue] = useState(0);

  // Tabs
  const allTabs = ["/", "/favorites"];

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} component={Link} to={allTabs[0]} />
        <Tab label="Favorites" index={1} component={Link} to={allTabs[1]} />
      </Tabs>
      <Switch>
        <Route path={allTabs[1]} />
        <Route path={allTabs[0]} />
      </Switch>
    </AppBar>
  );
};

export default NavBar;
