import { useContext, useEffect } from "react"
import { GlobalStateConsole } from "../App"
import { javascript, javascriptLanguage } from "@codemirror/lang-javascript";
import { EditorView, basicSetup } from "codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { StateEffect } from "@codemirror/state";
import langJS from "./Catalog.json"

export function TemplateEditor({isAuto}){
    const {editorInstanceRef,editorContainRef} = useContext(GlobalStateConsole)

    function createEditor(){

        const tagOptions = langJS.map(tag => ({
            label:tag.label, 
            info: tag.info,
            apply: tag.apply,
            
        }))
    
        function completeJsDoc(context){
            let textBefore = context.state.sliceDoc(0, context.pos); // Obtiene todo el texto antes del cursor
            let wordBefore = /\w*$/.exec(textBefore); // Captura la palabra actual o parte de ella
        
            if (!wordBefore && !context.explicit) return null; // Si no hay palabra o no se solicita explícitamente, no hacer nada
        
            return {
                from: context.pos - (wordBefore ? wordBefore[0].length : 0), // Calcula el inicio de la palabra actual
                options: tagOptions, // Opciones de autocompletado
                validFor: /^\w*$/ // Valida que se autocomplete para cualquier palabra
            };
        }
     
        const jsDocCompletions = javascriptLanguage.data.of({
            autocomplete: completeJsDoc
        })
        
        // In this instance of EditorView is where create the template of the code editor
        const editorView = new EditorView({
            doc: `console.log("Hello world") \n\n\n\n\n\n`,
            extensions: [
                basicSetup,
                javascript(),
                jsDocCompletions,
                oneDark
            ],
            parent: editorContainRef.current
        });
 
        editorInstanceRef.current = editorView;
        return editorView; 
    }

    useEffect(()=>{
        const editor = createEditor();

        const dynamucUpdate = EditorView.updateListener.of(update =>{
            if(update.docChanged){
                console.log(update.state.doc.toString())
            }
        })   
        
        if(isAuto){
            editor.dispatch({
                effects: StateEffect.appendConfig.of([dynamucUpdate])
            })    
        }
        
        return ()=> {
            if(editor) editor.destroy()
            } 
    },[isAuto])

    return (
        <section className="container-template-editor">
            <div className="editor-template" ref={editorContainRef} ></div>
        </section>)
}