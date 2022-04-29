import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css';
import LandingWelcome from "./pages/Landing/LandingWelcome";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ThankYou" element={<LandingWelcome />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);