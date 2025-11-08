import Produto from '@/app/api/models/produto';
import loadedCategories from './categories';
import loadedRestaurants from './restaurants';

const data = [
  {
    codProduto: 0,
    nome: 'Pizza Calabresa',
    imagem: '/pizzacalabresa.png',
    descricao: 'Pizza sabor calabresa com borda recheada de catupiry.',
    preco: 45.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[0],
    tempoPreparo: 30,
  },
  {
    codProduto: 1,
    nome: 'Lasanha',
    imagem: '/lasanha.png',
    descricao: 'Lasanha de carne com molho bechamel.',
    preco: 30.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[0],
    tempoPreparo: 40,
  },
  {
    codProduto: 2,
    nome: 'Sushi',
    imagem: '/sushi.png',
    descricao: 'Sushi variado com peixe fresco e arroz temperado.',
    preco: 20.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[1],
    tempoPreparo: 20,
  },
  {
    codProduto: 3,
    nome: 'Batata Frita',
    imagem: '/batatafrita.png',
    descricao: 'Batata frita crocante e saborosa.',
    preco: 15.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[0],
    tempoPreparo: 10,
  },
  {
    codProduto: 4,
    nome: 'Hamburguer',
    imagem: '/xtudo.png',
    descricao: 'Hamburguer suculento com queijo e bacon.',
    preco: 25.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[0],
    tempoPreparo: 15,
  },
  {
    codProduto: 5,
    nome: 'Salgadinhos',
    imagem: '/salgadinhos.png',
    descricao: 'Salgadinhos variados e saborosos.',
    preco: 24.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[0],
    tempoPreparo: 10,
  },
  {
    codProduto: 6,
    nome: 'Pastel',
    imagem: '/pasteis.png',
    descricao: 'Pastel frito com recheio de carne.',
    preco: 20.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[0],
    tempoPreparo: 15,
  },
  {
    codProduto: 7,
    nome: 'Especial Japonês',
    imagem: '/pratojapones.jpg',
    descricao: 'Sushi, camarão empanado e hot roll.',
    preco: 45.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[0],
    tempoPreparo: 30,
  },
  {
    codProduto: 8,
    nome: 'Pizza Marguerita',
    imagem: '/pizzamarguerita.jpg',
    descricao: 'Pizza sabor marguerita com molho de tomate e queijo.',
    preco: 45.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[0],
    tempoPreparo: 30,
  },
  {
    codProduto: 9,
    nome: 'Prato de Peixe',
    imagem: '/food.png',
    descricao: 'Prato de peixe grelhado com legumes.',
    preco: 45.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[0],
    tempoPreparo: 30,
  },
  {
    codProduto: 10,
    nome: 'Prato Executivo',
    imagem: '/almoco.png',
    descricao: 'Prato com arroz, feijão, bife e salada.',
    preco: 45.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[0],
    tempoPreparo: 30,
  },
  {
    codProduto: 11,
    nome: 'X-Batata',
    imagem: '/xbatata.png',
    descricao: 'Combo com hamburguer e batata frita.',
    preco: 45.0,
    quantidade: 50,
    categoria: loadedCategories[0],
    restaurante: loadedRestaurants[0],
    tempoPreparo: 30,
  },
  
];

const loadedProducts: Produto[] = [];

data.map(
  ({ codProduto, nome, imagem, descricao, preco, quantidade, categoria, restaurante, tempoPreparo }) => {
    loadedProducts.push(
      new Produto(
        codProduto,
        nome,
        imagem,
        descricao,
        preco,
        quantidade,
        categoria,
        restaurante,
        tempoPreparo
      )
    );
  }
);

export default loadedProducts;