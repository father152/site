import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Header/Home/Home";
import { About } from "./Components/Header/About/About";
import { Products } from "./Components/Header/Products/Products";
import { Contacts } from "./Components/Header/Contacts/Contacts";
import { Layout } from "./Components/Layout/Layout";
import { Portfolio } from "./Components/Header/Portfolio/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contacts" element={<Contacts />}/>
          </Route>
          </Routes>

        
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
