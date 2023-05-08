/* eslint-disable no-unused-vars */
import { useState ,  useContext, createContext } from 'react';
import './App.css';
import Footer from './Footer';
import { Autenticacao } from './Contexts';


export const Debugar = createContext('nao');

 


function App() {
  const [count, setCount] = useState(0);

  let user = { 'id': 123 , 'nome': 'fulano'};
  let usuario = useContext(Autenticacao);
  usuario = { 'id': 123 , 'nome': 'fulano'};

  
  function handleLogin(event){
    setCount(event.target.value)
  }
  return (
    
    <>

      <h1>Exemplo de uso do hook useContext</h1>
      <div className="card">
        <input  type="text"  name="login" value={count} onChange={handleLogin} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>

    <Debugar.Provider value="tudo">
    <Autenticacao.Provider value={user}>

      <Footer />
    </Autenticacao.Provider >
    </Debugar.Provider>
    </>
  )
}

export default App
