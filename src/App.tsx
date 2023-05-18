import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Formperson/FormPerson";
import Example from "./Components/Matrial/Example";
import { Laguage } from "./Components/Laguage/Laguage";
import Default from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Laguage />
      <Routes>
        <Route path="/" element={<Default />}></Route>
        <Route path="/Example" element={<Example />}></Route>
        <Route path="/Form" element={<Form />}></Route>
      </Routes>
    </>
  );
}

export default App;
