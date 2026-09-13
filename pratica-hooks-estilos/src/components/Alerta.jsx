// src/components/Alerta.jsx
// Importamos o CSS Module como um objeto chamado 'styles'.
import styles from './Alerta.module.css';
export default function Alerta({ type, message }) {
    // Acessamos as classes CSS como propriedades do objeto 'styles'.
    const tipoClasse =
        type === 'sucesso' ? styles.sucesso : styles.erro;
    return (
        <>
            {/* Usamos template literals para combinar múltiplas classes. */}
            <div className={`${styles.alertaCard} ${tipoClasse}`}>
                {message}
            </div>
        </>
    );
}