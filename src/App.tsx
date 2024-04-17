import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from "./components/Productos/Productos";
import DescripcionInstrumento from "./components/DescripcionInstrumento/DescripcionInstrumento";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Productos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/descripcion-producto/:id" element={<DescripcionInstrumento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
