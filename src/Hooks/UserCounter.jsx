// Exercício 1
// 1. Criar um hook chamado useCounter que aumenta e diminui um contador. Ele deve disponibilizar para o componente que o consumir as seguintes propriedades count, increment (função que adiciona) e decrement (função que remove)

// 2. Crie um componente e aplique o hook useCounter deve exibir o valor do contador e disparar as funções increment e decrement através de click em botões.
import React, { useState } from 'react';

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement
  };
}

function CounterComponent() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default CounterComponent;
