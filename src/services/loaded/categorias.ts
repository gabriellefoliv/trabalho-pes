import Categoria from '@/app/api/models/categoria';

const data = [
  {
    codCategoria: 0,
    nome: 'Lanches',
  },
  {
    codCategoria: 1,
    nome: 'Brasileira',
  },
  {
    codCategoria: 2,
    nome: 'Pizza',
  },
  {
    codCategoria: 3,
    nome: 'Japonesa',
  },
];

const loadedCategorias: Categoria[] = [];

data.map(({ codCategoria, nome }) => {
  loadedCategorias.push(new Categoria(codCategoria, nome));
});

export default loadedCategorias;