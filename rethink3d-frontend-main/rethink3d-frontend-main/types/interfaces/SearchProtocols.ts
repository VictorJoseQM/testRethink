export type SearchedProductProtocol = {
  id: number;
  nome: string;
  image: string;
  preco: number;
  desconto: number | null;
  parcelasMax: number;
};

export type SearchedMakerProtocol = {
  id: number;
  nome: string;
  image: string;
  descricao: string;
  servicos: string[];
  categorias: string[];
};
