import { useContext, useEffect, useRef } from "react";
import { GlobalStateConsole } from "../App";

export const AutoExecute= () =>{
    const {editorInstanceRef,outputRef, setOutput} = useContext(GlobalStateConsole)
    
    function executeCode(){
        try{
            const editor = editorInstanceRef.current
            const code = editor.state.doc.toString();

            
        }catch(e){
            outputRef.current.push(`Error: ${e.message}`);
            setOutput([...outputRef.current]);
        }
    }

    useEffect(() => {

        executeCode()

        console.log(editorInstanceRef)
    }, [editorInstanceRef])

    return null;
}
