import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return (
    <div>
      <Cabecalho/>
       <div className="container">
         <Outlet/> {/* Renderiza o componente da rota filha aqui */}
       </div>
       <Rodape/>
    </div>
  );
}
