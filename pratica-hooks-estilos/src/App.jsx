import { useState, useEffect } from 'react';
import BotaoDinamico from "./components/BotaoDinamico";
import Alerta from "./components/Alerta";
import CardProduto from './components/CardProduto.jsx';

export default function App() {
  const [count, setCount] = useState(0);
  const [mensagem, setMensagem] = useState('');

  // Este efeito será executado SEMPRE que o estado 'count' for alterado.
  useEffect(() => {
    console.log('EFEITO EXECUTADO: O contador mudou para', count);
    // Efeito 1: Atualizar o título da aba do navegador.

    document.title = `Cliques: ${count}`;
    // Efeito 2: Exibir uma mensagem de confirmação temporária.

    if (count > 0) {
      setMensagem('Contador atualizado com sucesso!');
      // Agenda a remoção da mensagem após 2 segundos.

      const timer = setTimeout(() => {
        setMensagem('');
      }, 2000);

      // A função de limpeza será executada antes da próxima
      // execução do efeito ou quando o componente for desmontado.

      return () => {
        console.log('LIMPANDO O TIMER ANTERIOR');
        clearTimeout(timer);
      };
    }
  }, [count]); // Só execute o efeito se 'count' mudar.

  console.log('COMPONENTE RENDERIZADO');
  return (
    <>
      <h1>Aula Prática - Ciclo 4</h1>
      {/* Botão dinamico */}

      <h1>Atividade 1: Botão com Estilo Dinâmico</h1>
      <BotaoDinamico />

      {/* Alerta */}
      <h1>Atividade 2: Alertas com CSS Modules</h1>
      {/* Passamos 'type' e 'message' como props. */}
      <Alerta
        type="sucesso"
        message="Operação realizada com sucesso!"
      />
      <Alerta
        type="erro"
        message="Falha ao processar a requisição."
      />

      {/* Card Produto */}
      <h1>Atividade 3: Styled Components</h1>
      <CardProduto nome="Café Especial" preco="45,00" />

      {/* Contador */}
      <h1>Atividade 4: useEffect em Ação</h1>
      <p>Você clicou {count} vezes</p>

      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>

      {mensagem && (
        <p style={{ color: 'green', marginTop: '10px' }}>
          {mensagem}
        </p>
      )}
      
    </>
  )
}