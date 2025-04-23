import Context from './context';
import { useState } from "react";

function Provider({ children }) {
    const [nameLogin, setNameLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");



    const contextValue = {
        nameLogin,
        senhaLogin,
        setSenhaLogin,
        setNameLogin
    };


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}


export default Provider;