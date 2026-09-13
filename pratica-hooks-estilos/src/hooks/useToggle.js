// src/hooks/useToggle.js
import { useState } from 'react';
// Um hook personalizado é apenas uma função que começa com "use"
// e pode chamar outros hooks.

export function useToggle(initialValue = false) {
    // Usamos o useState internamente para gerenciar o estado booleano.
    const [value, setValue] = useState(initialValue);

    // Criamos uma função para alternar o valor do estado.
    const toggle = () => {
        setValue((currentValue) => !currentValue);
    };

    // O hook retorna o estado atual e a função para alterá-lo.
    return [value, toggle];
}