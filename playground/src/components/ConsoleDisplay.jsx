import { useContext } from "react";
import { GlobalStateConsole } from "../App";

export const ConsoleDisplay = ()=>{
    const {output, setOutput, outputRef, isAuto} = useContext(GlobalStateConsole)

    function handleCleanConsole() {
        setOutput([outputRef.current = []])
    }

    return(
        <section>
                <h2>Consola</h2>
                {
                    isAuto ? <></>:<button onClick={handleCleanConsole}>Clean console</button> 
                }
                <div className="container-display-console">
                    <div className="display-console">
                    {output.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                    </div>
                </div>
        </section>
    );
}
