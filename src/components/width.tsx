'use client';

import React from "react";

export default function Width() {

  const Button = () => {
    const [ativo, setAtivo] = React.useState(false);
    

    function handleClick() {
      setAtivo(!ativo);
    }

    return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
  }

  return (
    <div>
      <h2>Largura da teal: <Button /></h2>
    </div>
  )
}