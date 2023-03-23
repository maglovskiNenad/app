import { Route, Routes } from "react-router-dom";

import MainNavbar from "./components/header/navbar/MainNavbar";
import Main from "./components/main/Main";
import Home from "./components/main/Home/Home";
import Blog from "./components/main/Blog/Blog";
import About from "./components/main/About/About";
import Projects from "./components/main/Projects/Projects";

import "./App.css";
import ErrorPage from "./UI/error-page/ErrorPage";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Main />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
