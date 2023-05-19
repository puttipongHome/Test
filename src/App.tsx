import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Formperson/FormPerson";
import Layout from "./Components/Matrial/Layout";
import { Laguage } from "./Components/Laguage/Laguage";
import Default from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Laguage />
      <Routes>
        <Route path="/" element={<Default />}></Route>
        <Route path="/Layout" element={<Layout />}></Route>
        <Route path="/Form" element={<Form />}></Route>
      </Routes>
    </>
  );
}

export default App;
