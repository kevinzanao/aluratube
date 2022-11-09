import React from "react";

export const ColorModeContext = React.createContext({
  mode: "light",
  setMode: () => { alert("você precisa me configurar primeiro!") },
  toggleMode: () => { alert("você precisa me configurar primeiro!") }
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = React.useState(props.initialMode);

  function toggleMode() {
    if(mode === "dark") setMode("light")
    if(mode === "light") setMode("dark")
  }

  return (
    // Entender porque está sendo ignorado (mode: "")
    <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
      {props.children} 
    </ColorModeContext.Provider>
  )
}