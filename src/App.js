import Navbar from "./navbar";
import "./App.css";

function App() {
  return (
    <div className="position-relative main-container">
      <div className="fixed-top z-1">
        <Navbar />
      </div>
      <section className="min-vh-100 bg-primary p-5" id="me"></section>
      <section className="min-vh-100 bg-secondary p-5" id="works"></section>
      <section className="min-vh-100 bg-primary p-5" id="contact"></section>
    </div>
  );
}

export default App;
