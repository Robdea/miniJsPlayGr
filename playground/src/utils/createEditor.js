import { javascript } from "@codemirror/lang-javascript";
import { EditorView, basicSetup } from "codemirror";

export default function createEditor(editCont, editInst){
    editInst.current = new EditorView({
        doc: `console.log("Hello world") \n`,
        extensions: [
            basicSetup,
            javascript()
        ],
        parent: editCont.current
    });

    return () =>{
        if(editInst.current){
            editInst.current.destroy();
        }
    }
}

