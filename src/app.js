import "babel-polyfill"; // Add Promises polyfill to global environment

//Import local css
import "react-widgets/lib/less/react-widgets.less";
import "css/tour.scss";
//import 'react-joyride/lib/react-joyride.scss';
import "css/style.less";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

const listeningFunctin = location => {
  var full_path = location.pathname + location.search;

  if (__PRODUCTION__) {
    if (window.ga) {
      window.ga("set", "page", full_path);
      window.ga("send", "pageview");
    }
    if (window.twq) {
      window.twq("track", "PageView");
    }
  }

  console.log("Page View sent", full_path);

  if (window.optimizely) {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({ type: "activate" });
  }
};

if (__PRODUCTION__) {
  // Configure raven
  Raven.config(
    "https://3b4b870154ce496c9d3dd9673a529bb9@sentry.io/121717"
  ).install();
}

// Control overlay pop up on landing pages
window.tungaCanOpenOverlay = false;

// import all_routes from './old_route'
import OldRouter from "./old_route";
import NewRouter from "./new_route";
ReactDOM.render(
  <Provider store={store}>
    <OldRouter listeningFunction={listeningFunctin} />
  </Provider>,
  document.getElementById("content")
);
