import { AutoExecute } from "./AutoExecute";
import ButtnExecuter from "./ButtnExecuter";

export const Header = ({isAuto}) =>{
  
  return(
    <header>
        <img src="" alt="MiniJS Playground icon" />
        <section>{
            isAuto ? <AutoExecute/>:<ButtnExecuter />
          }
          
        </section>
      </header>
    );
}


