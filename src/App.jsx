import { useState , createContext } from 'react';
import './App.css';
import Footer from './Footer';
import { Autenticacao } from './Contexts';

export const Debugar = createContext('nao');

function App() {
  //  formulario
  const [username, setUsername] = useState(0);
  function handleInput(event){ setUsername(event.target.value); }

  // simulando um login
  const [user, setUser] = useState({ 'id': null  , 'nome': '' });

  function handleLogin(){
    // busca login no banco de dados  ...
    setUser ( { 'id': 123  , 'nome': username } );
  }

  return (
    <>
      <h1>Exemplo de uso do hook useContext</h1>
      <div className="card">
          <input  type="text"  name="login" 
            value={username} onChange={handleInput} />
          <button onClick={handleLogin}> logar</button>
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
