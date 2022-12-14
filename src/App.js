import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Singel.jsx";
import New from "./pages/new/New.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New title="Add New User" />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New title="Add New Product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
