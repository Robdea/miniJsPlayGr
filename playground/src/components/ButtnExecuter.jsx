import { useContext } from "react"
import { GlobalStateConsole } from "../App"

const ButtnExecuter = () =>{
    // using the global values
    const {editorInstanceRef,outputRef, setOutput} = useContext(GlobalStateConsole)

    const executeCode = () =>{
        try{
            //
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
