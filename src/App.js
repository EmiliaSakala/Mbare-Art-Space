import Topbar from "./components/topBar/Topbar";
import Intro from "./components/intro/intro";
import About from "./components/about/About";
// import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from "./components/testimonials/Testimonials";
// import Contact from "./components/contact/Contact";
import './App.scss';
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <div className="sections">
         <Intro />
         <About />
         {/* <Portfolio />
         <Testimonials />
         <Contact /> */}
       </div>
    </div>
  );
}

export default App;
