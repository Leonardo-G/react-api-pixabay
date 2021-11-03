import { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { ListadoImagenes } from "./components/ListadoImagenes";

function App() {

  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  const consultarApi = async () => {
    
    const imagenesPorPagina = 30;
    const key = "22833219-081a3a2cdcda8582997c3882c";
    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    setImagenes(resultado.hits);

    //Calcular el total de paginas
    const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
    setTotalPaginas(calcularTotalPaginas);

    const jumbotron = document.querySelector(".form_container");
    jumbotron.scrollIntoView({behavior: "smooth"})
  }
  
  //Acutalizamos la pagina actual a 1, cuando se realiza una nueva busqueda
  useEffect( () => {
    setPaginaActual(1)
  }, [busqueda])

  useEffect(() => {
    if(busqueda === "") return;

    consultarApi()
    
    // eslint-disable-next-line
  }, [busqueda, paginaActual])

  //Ir pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;

    if(nuevaPaginaActual === 0) return;

    setPaginaActual(nuevaPaginaActual);
  }

  //Ir pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if(nuevaPaginaActual > totalPaginas) return

    setPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="container">
      <div className="form_container">
        <p className="form_title">Buscador de imagenes</p>
        <Formulario setBusqueda={setBusqueda}/>
      </div>
      <div className="imgResultados">
        <ListadoImagenes imagenes={imagenes} />
      </div>

      {(paginaActual === 1) ? null 
      : <button
          type="button"
          className="btn-page"
          onClick={paginaAnterior}
        >&laquo; Anterior</button>
      }
      {(paginaActual === totalPaginas) ? null
      : <button
          type="button"
          className="btn-page"
          onClick={paginaSiguiente}
        >Siguiente &raquo;</button>
      }
    </div>
  );
}

export default App;
