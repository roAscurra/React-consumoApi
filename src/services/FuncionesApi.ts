import Instrumento from "../entities/Instrumento";


export async function getInstrumentosJSONFetch(){
	const urlServer = 'http://localhost/BackendInstrumentos/funciones.php';
	const response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	console.log(response);
	return await response.json();
}

export async function getInstrumentoPorIdFecth(id:number){
	const urlServer = 'http://localhost/BackendInstrumentos/funciones.php?id='+id;
    console.log(urlServer);
	const response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	return await response.json() as Instrumento;
}