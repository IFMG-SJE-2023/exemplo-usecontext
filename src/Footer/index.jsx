/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Debugar} from '../App.jsx'
import { Autenticacao } from '../Contexts.js';
export default function Footer(){

    // contextos separados num arquivo 
    let usuariologado = useContext(Autenticacao);
    
    // contexto criados num arquivo pai
    const debugar = useContext(Debugar);
    
    return(<>
    
        <p>
            devemos debugar {debugar}.

            <br />
            o usuario é {usuariologado.nome} de ID: {usuariologado.id}
        </p>
        
    
    
    </>)

}