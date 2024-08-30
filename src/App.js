import Navbar from "./components/navbar";
import Me from "./components/Me/me";
import Works from "./components/Works/works";
import "./App.css";

function App() {
  return (
    <div className="position-relative main-container">
      <Navbar />
      <Me />
      <Works />
      <section className="min-vh-100 bg-primary p-5" id="contact"></section>
    </div>
  );
}

export default App;
