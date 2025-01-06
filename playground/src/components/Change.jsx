export function Change({isAuto, setIsAuto}) {
    function handleAutoOrManualMode (){
        setIsAuto(prev => !prev)
    }

    return(
        <div>
            <button onClick={handleAutoOrManualMode} disabled={isAuto}>Auto</button>
            <button onClick={handleAutoOrManualMode} disabled={!isAuto}>Manual</button>
        </div>
    )
}