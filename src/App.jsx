import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./interface/home/home";
import Footer from "./components/footer/footer";
import About from "./interface/about/about";
import Contact from "./interface/contact/contact";
import Services from "./interface/services/services";

function App() {
  return (
    <main>
      <Navbar />
      <div className="overflow-x-hidden app mt-[88px] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
