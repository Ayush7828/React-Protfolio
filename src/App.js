import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProtFolio from "./components/ProtFolio";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <ProtFolio></ProtFolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
