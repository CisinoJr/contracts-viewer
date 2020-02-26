/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import './contractItem.css';

function ContractItem({ contract }) {

  const [detailUrl, setDetailUrl] = useState('');

  useEffect(() => {
    function createDetailUrl() {
      setDetailUrl(createUrl());
    }

    createDetailUrl();
  }, []);

  const createUrl = () => {
    let urlBase = `http://compras.dados.gov.br/contratos/v1/contratos.html?uasg=${contract.uasg}`;

    if (contract.cnpj_contratada) {
      urlBase += `&cnpj_contratada=${contract.cnpj_contratada}`;
    }

    if (contract.numero) {
      urlBase += `&numero=${contract.numero}`
    }

    return urlBase;
  }

  return (
    <li className="contract-item">
      <header>
        <div className="contract-info">
          Identificador: {contract.identificador}
        </div>

        <div className="contract-info">
          Número do processo: {contract.numero_processo}
        </div>
      </header>


      <p>
        {contract.objeto}
      </p>

      <div className="contract-info">
        <span>Data Início Vigência: {contract.data_inicio_vigencia}</span>
      </div>
      <div className="contract-info">
        <span>Data Término Vigência: {contract.data_termino_vigencia}</span>
      </div>

      <a target={"_blank"} href={detailUrl}>Detalhes</a>
    </li>
  );
}

export default ContractItem;
