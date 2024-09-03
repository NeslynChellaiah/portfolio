import Navbar from "./components/Navbar/navbar";
import Me from "./components/Me/me";
import Works from "./components/Works/works";
import "./App.css";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="position-relative main-container">
      <Navbar />
      <Me />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
