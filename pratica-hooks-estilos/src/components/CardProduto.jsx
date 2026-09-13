// src/components/CardProduto.jsx
import styled from 'styled-components';
// 'styled.div' cria um componente React 'div' com os estilos definidos.
const CardContainer = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    max-width: 250px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

// Criamos um componente 'h3' estilizado.
const TituloProduto = styled.h3`
    color: #333;
`;

// Criamos um componente 'p' estilizado
const PrecoProduto = styled.p`
    color: #15803d;
    font-weight: bold;
    font-size: 1.2rem;
`;

// O componente principal exportado usa os styled components como tags HTML.
export default function CardProduto({ nome, preco }) {
    return (
        <CardContainer>
            <TituloProduto>{nome}</TituloProduto>
            <PrecoProduto>R$ {preco}</PrecoProduto>
        </CardContainer>
    );
}