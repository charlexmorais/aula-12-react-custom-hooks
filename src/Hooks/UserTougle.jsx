
// Exercício 2
// 1. Criar um hook chamado useToggle que alterna entre verdadeiro e falso. Ele também deve retornar o valor para componente que for consumi lo ex: toggled = useToggle();

// 2. Crie um componente Box que deve ser uma div com fundo vermelho e crie um botão dentro dessa div. Sempre que o botão for clicado a cor do box deve alternar de vermelho para azul e de azul para vermelho. Utilize o custom hook useToggle para gerenciar esse comportamento.  





import React from 'react';
import { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}

function Box() {
  const [toggled, toggle] = useToggle();

  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: toggled ? 'blue' : 'red',
  };

  return (
    <div style={boxStyle}>
      <button onClick={toggle}>Alternar Cor</button>
    </div>
  );
}

export default Box;
