import { useContext } from "react"
import { GlobalStateConsole } from "../App"

// This component create the button runner of code
const ButtnExecuter = () =>{
    // using the global values
    const {editorInstanceRef,outputRef, setOutput} = useContext(GlobalStateConsole)


    // This funct create the logic that get the code and then execute that code with the bttn
    const executeCode = () =>{
        try{
            //Get the code of editor
            const editor = editorInstanceRef.current
            const code = editor.state.doc.toString();
      

            //
            const customLog = (...args) =>{
              outputRef.current.push(args.join(" "))
              setOutput([...outputRef.current])
            }

            const originalCon = console.log
            console.log = customLog

            new Function(code)();

            console.log = originalCon
        }catch(e){
            outputRef.current.push(`Error: ${e.message}`);
            setOutput([...outputRef.current]);
        }
    }

    return <button onClick={executeCode}>Run</button>
}

export default ButtnExecuter
