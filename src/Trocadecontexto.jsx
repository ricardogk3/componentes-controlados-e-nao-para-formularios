import { useContext } from "react";
import { ThemeContext } from "./Context";

function Trocadecontexto(){
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", height: "100vh" }}>
      <h1>Modo {theme === "light" ? "Claro" : "Escuro"}</h1>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  );
}

export default Trocadecontexto