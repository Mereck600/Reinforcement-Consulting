import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Training from "./pages/Training";
import Consulting from "./pages/Consulting";
import Grants from "./pages/Grants";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Training" element={<Training />} />
          <Route path="/Consulting" element={<Consulting />} />
          <Route path="/Grants" element={<Grants />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
