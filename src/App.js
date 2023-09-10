import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div>
      <NavBar title="TextUtils" />
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </div>
  );
}

export default App;
