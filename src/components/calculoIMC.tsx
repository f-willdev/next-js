'use client'

import React from "react";


export default function CalculoIMC() {
  const [peso, setPeso] = React.useState('')
  const [altura, setAltura] = React.useState('')
  const [imc, setImc] = React.useState('')

  function calcularIMC() {
    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    setImc(total);
  }

  return(<div className="flex items-center justify-center w-60 p-5 flex-col text-white bg-gray-500 rounded-md mt-5 m-auto">
      <label htmlFor="peso">Peso: {peso}</label>
      <input className="mb-3 text-black p-2 rounded-md " type="text" placeholder="Peso: 80" value={peso} onChange={(e) => setPeso(e.target.value)}/>
      <label htmlFor="altura">Altura:</label>
      <input className="text-black p-2 rounded-md" type="text" placeholder="Altura: 180" value={altura} onChange={(e) => setAltura(e.target.value)}/>
    <button className="bg-black p-3 rounded-md mt-4" onClick={calcularIMC}>Calcular</button>
    <p className="text-white">IMC: {imc}</p>  
  </div>
  
  
  
  );
}