import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from "./components/Productos/Productos";
import DescripcionInstrumento from "./components/DescripcionInstrumento/DescripcionInstrumento";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Productos />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/descripcion-producto/:id" element={<DescripcionInstrumento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
