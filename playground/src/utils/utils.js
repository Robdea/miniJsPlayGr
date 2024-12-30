
export function executeCode (editInst, opRef, setOp){
    try {
        //
        const code = editInst.state.doc.toString();

        const customLog = (...args) =>{
            opRef.current.push(args.join(" "))
            setOp([...opRef.current])
        }
        
        const originalConsole = console.log
        console.log = customLog

        new Function(code)()

        console.log = originalConsole
    } catch (error) {
        opRef.current.push(`Error: ${error.message}`)
        setOp([...opRef.current])
    }
}


export const $ = el => document.querySelector(el)
export const $$ = el => document.querySelectorAll(el)

