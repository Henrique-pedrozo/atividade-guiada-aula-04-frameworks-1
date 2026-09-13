import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@mui/material';

export default function CardProdutoMUI({ imagem, nome, descricao, preco }) {
  return (
    // Passo 3: Montando a estrutura aninhada
    <Card sx={{ maxWidth: 300 }}>
      
      {/* Área da Imagem */}
      <CardMedia
        component="img"
        height="160"
        image={imagem}
        alt={nome}
      />
      
      {/* Área de Texto (Nome, Descrição e Preço) */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nome}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {descricao}
        </Typography>
        
        <Typography variant="h6" component="div">
          {preco}
        </Typography>
      </CardContent>
      
      {/* Área do Botão */}
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          COMPRAR
        </Button>
      </CardActions>
      
    </Card>
  );
}