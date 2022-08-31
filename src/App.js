import "./App.css";
import TextForms from "./components/TextForms";
import Navbar from "./components/Navbar";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
//import { Route } from "react-router";

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toogleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode in enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = ("TextUtils - Rana Awais")

      // }, 1000);

      // setInterval(() => {
      //   document.title = ("TextUtils - M Awais")

      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode in enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" title1="Home" title2="About" mode={Mode} toogleMode={toogleMode} />
      <Alert alert={alert} />

      <div className="container">    
          {/* <TextForms showAlert={showAlert} title="TextForms" mode={Mode} titleHeading=""  /> */}
          {/* <About/> */}

    
          <Routes>
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Home" element={<TextForms showAlert={showAlert} title="TextForms" mode={Mode} titleHeading=""  />} />
          
          </Routes>
     
      </div>

      </BrowserRouter>
    </>
  );
}

export default App;
