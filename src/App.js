import { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [darkmode, setdarkmode] = useState("light");
  const toggleMode = () => {
    if (darkmode == "light") {
      setdarkmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils Dark Mode";
    } else {
      setdarkmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils Light Mode";
    }
  };
  return (
    <Router>
      <NavBar title="TextUtils" mode={darkmode} toogleMode={toggleMode} />
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <TextForm heading="Enter the text to analyze" mode={darkmode} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
