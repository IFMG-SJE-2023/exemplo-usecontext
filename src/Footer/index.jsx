import { useContext } from "react";
import { Debugar} from '../App.jsx'
import { Autenticacao } from '../Contexts.js';
export default function Footer(){
    let usuariologado = useContext(Autenticacao);  // contextos separados num arquivo 
    const debugar = useContext(Debugar); // contexto criados num arquivo pai
    return(<>
        <p>
            devemos debugar {debugar}.
            <br />
            o usuario é {usuariologado.nome} de 
            ID: {usuariologado.id}
        </p>
    </>)
}