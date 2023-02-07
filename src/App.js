import "./App.css";

import NewApp from "./NewApp";
import ProductList from "./component/ecommerce/ProductList/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error from "./Error";
import User from "./User";
import Project from "./Project";
import Converter from "./Converter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewApp />} />
          <Route path="/shopping" element={<ProductList />} />
          <Route path="/news" element={<NewApp />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="*" element={<Error />} />
          <Route path="/user/:userID" element={<User />} />
          <Route path="/user/:userID/:project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
