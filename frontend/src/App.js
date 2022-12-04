import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/places/new" exact element={<NewPlace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
