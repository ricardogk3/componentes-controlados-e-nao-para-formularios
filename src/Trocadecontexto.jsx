import { useContext } from "react";
import { ThemeContext } from "./Context";
import Controlado from "./componentes/Controlado";
import Descontrolado from "./componentes/Descontrolado";
import CriarUsuarioNovo from "./componentes/CriarUsuarioNovo";


function Trocadecontexto(){
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", height: "100vh" }}>
      <h1>Modo {theme === "light" ? "Claro" : "Escuro"}</h1>
      <button onClick={toggleTheme}>Alternar Tema</button>
      {/* <Controlado/> */}
      {/* <Descontrolado/> */}
      <CriarUsuarioNovo/>
    </div>
  );
}

export default Trocadecontexto