import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import Instrumeno from "../../entities/Instrumento";
import { getInstrumentoPorIdFecth } from "../../services/FuncionesApi";

function DescripcionInstrumento() {
  const { id } = useParams();
  const [instrumento, setInstrumento] = useState<Instrumeno>();
  const getInstrumeto = async () => {
    const instrumentoSelect: Instrumeno = await getInstrumentoPorIdFecth(Number(id));
    setInstrumento(instrumentoSelect)
  }

  useEffect(() => {
    getInstrumeto();
  }, []);

  if (!instrumento) {
    return <div>Cargando...</div>;
  }

  const costoEnvioText = instrumento.costoEnvio === "G" ? (
    <>
      <img src="../img/camion.png" alt="Camión" /> Envío gratis
    </>
  ) : (
    `Costo de Envío Interior de Argentina $${instrumento.costoEnvio}`
  );

  const classEnvio = instrumento.costoEnvio === "G" ? "text-green" : "text-orange";

  return (
    <div>
      <div className="card col-md-9 mb-3 m-3">
        <div className="row">
          <div className="col-md-5">
            <div className="mb-3">
              <img src={`/img/${instrumento.imagen}`} style={{ width: '100%' }} className="img-fluid" alt={`imagen ${instrumento.instrumento}`}></img>
            </div>
            <div className="card-md-3">
              <p className="card-text"><b>Descripción:</b> {instrumento.descripcion}</p>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card h-100">
              <div className="card-body">
                <label className='card-text text-black-50 bg-white'>{instrumento.cantidadVendida} vendidos</label>
                <p className="h2">{instrumento.instrumento}</p>
                <br />
                <p className="h1 precio">$ {instrumento.precio}</p>
                <br />
                <p className="card-text"><b>Modelo:</b> {instrumento.modelo}</p>
                <p className="card-text"><b>Marca:</b> {instrumento.marca}</p>
                <br />
                <p className="card-text"><b>Costo Envío:</b></p>
                <p className={`card-text ${classEnvio}`}>{costoEnvioText}</p>
                <button className="btn btn-green mt-5">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescripcionInstrumento;
