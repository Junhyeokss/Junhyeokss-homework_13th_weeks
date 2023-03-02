import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { NAV } from "./components/Data";

function App() {
  return (
    <>
      <Header NAV={NAV} />
      <Main />
      <Footer />;
    </>
  );
}

export default App;
