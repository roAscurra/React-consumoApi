import { useEffect, useState } from "react";
import ItemInstrumento from "../ItemInstrumento/ItemInstrumento";
import { getInstrumentosJSONFetch } from "../../services/FuncionesApi";
import Instrumento from "../../entities/Instrumento";
import { NavBar } from "../NavBar/NavBar";


function Productos() {
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    
    const getInstrumentos =  async () => {
      const datos:Instrumento[] = await getInstrumentosJSONFetch();
      setInstrumentos(datos);
      console.log(datos)
    }

    useEffect(() => {
        getInstrumentos();
    }, []);
  return (
    <div className="row">
      <NavBar></NavBar>
      {instrumentos.map((instrumento: Instrumento) => (
          <ItemInstrumento key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento} imagen={instrumento.imagen} precio={instrumento.precio} costoEnvio={instrumento.costoEnvio} cantidadVendida={instrumento.cantidadVendida}/>
      ))}
    </div>
  
  );
}

export default Productos;
