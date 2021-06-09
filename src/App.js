// src/App.js

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import Buttons from "./components/Buttons";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Buttons} path="/" />
      </div>
      <div>
        <Route component={AllPosts} path="/" exact />
        <Route component={OnePost} path="/:slug" />
        <Route component={Signup} path="/signup" />
      </div>
    </BrowserRouter>
  );
}
export default App;
