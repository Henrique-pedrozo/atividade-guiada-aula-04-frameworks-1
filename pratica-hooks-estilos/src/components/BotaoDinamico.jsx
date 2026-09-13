// src/components/BotaoDinamico.jsx
import { useState } from 'react';
export default function BotaoDinamico() {
    // O hook useState declara uma variável de estado 'clicado'
    // e uma função 'setClicado' para atualizá-la.
    // Começa como 'false'.
    const [clicado, setClicado] = useState(false);
    // Cria um objeto de estilo. O valor de 'backgroundColor'
    // muda com base no estado 'clicado'.
    const estiloBotao = {
        backgroundColor: clicado ? '#10B981' : '#3B82F6',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    };
    return (
        <>
            {/* O evento onClick chama uma função que inverte o valor booleano de 'clicado'. */}
            <button
                style={estiloBotao}
                onClick={() => setClicado(!clicado)}
            >
                {/* O texto do botão também muda com base no estado. */}
                {clicado ? 'Ativado!' : 'Clique Aqui'}
            </button>
        </>
    );
}