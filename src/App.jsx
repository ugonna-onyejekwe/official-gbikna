import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Services } from "./pages/services/services";
import { Products } from "./pages/products/products";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </main>
  );
}

export default App;
