import { Route, Routes } from "react-router-dom";

import MainNavbar from "./components/header/navbar/MainNavbar";
import Main from "./components/main/Main";
import Home from "./components/main/Home/Home";
// import Blog from "./components/main/Blog/Blog";
// import About from "./components/main/About/About";
// import Projects from "./components/main/Projects/Projects";
import Footer from "./components/footer/Footer";

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
        <Route path="/blog" element={<ErrorPage />} />
        <Route path="/about" element={<ErrorPage />} />
        <Route path="/projects" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
