import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import ScrollManager from "./components/SchrollManager/SchrollManager";

import About from "./pages/About";
import Logement from "./pages/Logement";
import Error from "./pages/Error";

import "./App.css";

function App() {
  return (
    <ScrollManager>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </ScrollManager>
  );
}
export default App;
