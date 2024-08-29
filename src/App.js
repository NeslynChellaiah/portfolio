import Navbar from "./components/navbar";
import Me from "./components/me";
import "./App.css";

function App() {
  return (
    <div className="position-relative main-container">
      <Navbar />
      <Me />
      <section className="min-vh-100 bg-secondary p-5" id="works"></section>
      <section className="min-vh-100 bg-primary p-5" id="contact"></section>
    </div>
  );
}

export default App;
