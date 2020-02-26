/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './App.css';
import ContractItem from './components/ContractItem';
import ContractsService from './services/contracts.service';

import './global.css';
import './App.css';
import './Main.css';

function App() {
  const contractsService = new ContractsService();
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    async function loadContracts() {
      const response = await contractsService.getAll();
      setContracts(response);
    }

    loadContracts();
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <a className="navbar-title" href={'#'}>
            <h1>Visualizador de Contratos </h1>
          </a>
        </nav>
      </header>
      <div id="app">
        <main>
          <ul>
            {contracts.map(contract => (
              <ContractItem key={contract.identificador} contract={contract} />
            ))}
          </ul>
        </main>
      </div>

    </div>
  );
}

export default App;
