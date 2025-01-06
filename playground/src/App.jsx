import { createContext, useRef, useState } from "react"
import { Header } from "./components/Header"
import { ConsoleDisplay } from "./components/ConsoleDisplay"
import { Change } from "./components/Change"
import { TemplateEditor } from "./utils/TemplateEditor"

/* This context will contain the values necessary for accessing
the console value*/
export const GlobalStateConsole = createContext(null)

// The principal compo
function App() {
  // Hooks for the console value and state
  const [isAuto, setIsAuto] = useState(false)
  const [output, setOutput] = useState([])

  const editorContainRef = useRef(null)
  const editorInstanceRef = useRef(null)
  
  const outputRef = useRef([])

  return (
    // Here is where the global context is a assigned the values
    <>
      <Change isAuto={isAuto} setIsAuto={setIsAuto}/>
      <GlobalStateConsole.Provider value={{ editorInstanceRef,outputRef, setOutput, output, editorContainRef}}>
        <Header isAuto={isAuto}/>
        <section className="container-displays" id="container-displays">
          <TemplateEditor isAuto={isAuto}/>
          
          {/* <section className="container-template-editor">
          <div className="editor-template" ref={editorContainRef} ></div>
          </section> */}
          
          {/* This compo create the console output */}
          <ConsoleDisplay />
        </section>
      </GlobalStateConsole.Provider>
    </>
  )
}

export default App
