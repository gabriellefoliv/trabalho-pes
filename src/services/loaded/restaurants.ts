import Restaurante from '@/app/api/models/restaurante';

const data = [
  {
    codRestaurante: 0,
    nome: 'Olaria Lanches',
    cnpj: '12.345.678/0001-90',
    endereco: 'Rua das Flores, 123 - Centro',
  },
  {
    codRestaurante: 1,
    nome: 'Graça da Vila',
    cnpj: '98.765.432/0001-10',
    endereco: 'Avenida Brasil, 456 - Centro',
  },
];

const loadedRestaurants: Restaurante[] = [];

data.map(({ codRestaurante, nome, cnpj, endereco }) => {
  loadedRestaurants.push(new Restaurante(codRestaurante, nome, cnpj, endereco));
});

export default loadedRestaurants;