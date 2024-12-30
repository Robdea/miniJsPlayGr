import { createContext, useEffect, useRef, useState } from "react"
import  createEditor  from "./utils/createEditor"
import ButtnExecuter from "./components/ButtnExecuter"

/* This context will contain the values necessary for accessing
the console value*/
export const GlobalStateConsole = createContext(null)

// The principal compo
function App() {
  // Hooks for the console value and state
  const editorContainRef = useRef(null)
  const editorInstanceRef = useRef(null)
  const [output, setOutput] = useState([])
  const outputRef = useRef([])

  useEffect(() =>{
    /*This function will be replaced by a component */
    createEditor(editorContainRef, editorInstanceRef);

    // Destoys the extra editor that is created by this hook (useEffect)
    return () => {
      if(editorInstanceRef.current){
        editorInstanceRef.current.destroy()
      }
    };
  }, [])

  return (
    // Here is where the global context is a assigned the values
    <GlobalStateConsole.Provider value={{ editorInstanceRef,outputRef, setOutput}}>
    <section>
      <h1>Ejemplo con CodeMirror</h1>
      <div ref={editorContainRef} ></div>

      <ButtnExecuter />
      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", backgroundColor: "#000" }}>
        <h2>Consola</h2>
        <div>
          {output.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </section>
    </GlobalStateConsole.Provider>
  )
}

export default App
