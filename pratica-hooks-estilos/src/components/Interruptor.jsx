// src/components/Interruptor.jsx
import { useToggle } from '../hooks/useToggle';
export default function Interruptor() {
    // Usamos nosso hook personalizado da mesma forma que o useState.
    const [ligado, toggleLuz] = useToggle(false);
    return (
        <>
            <p>
                A luz está: {ligado ? 'Ligada' : 'Desligada'}
            </p>
            <button onClick={toggleLuz}>
                Alternar Luz
            </button>
        </>
    );
}