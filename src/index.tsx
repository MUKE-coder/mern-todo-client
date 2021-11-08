import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Landing from "./pages/Landing";

import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./components/Auth/RequireAuth";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={RequireAuth(Dashboard)} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
