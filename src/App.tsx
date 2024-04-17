import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from "./components/Productos/Productos";
import DescripcionInstrumento from "./components/DescripcionInstrumento/DescripcionInstrumento";
import { Home } from "./components/Home/Home";
import { DondeEstamos } from "./components/DondeEstamos/DondeEstamos";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={          
        <>
          <NavBar />
          <Home />
          <DondeEstamos />
          <p className='text-left h5 m-3'>Productos:</p>
          <Productos />         
          </>
        } />
        <Route path="/home" element={ <><NavBar /><Home /></> } />
        <Route path="/dondeEstamos" element={<><NavBar /><DondeEstamos /></>} />
        <Route path="/productos" element={<><NavBar /><Productos /></>} />
        <Route path="/descripcion-producto/:id" element={<><NavBar /><DescripcionInstrumento /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
