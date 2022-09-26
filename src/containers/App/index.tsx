import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { Context } from "helpers/context";

import ProgressIndicator from "components/ProgressIndicator";
import PersonsPage from "containers/PersonsPage";

import theme from "stylesheets/theme";

export default () => {
  const [{ isProgressIndicatorVisible }] = React.useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isProgressIndicatorVisible && <ProgressIndicator />}
      <BrowserRouter>
        <Switch>
          <Route exact path={"/about"}>
            <div>About Page</div>
          </Route>
          <Route>
            <PersonsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};
