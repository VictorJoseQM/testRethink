import {
  SearchedMakerProtocol,
  SearchedProductProtocol,
} from "@/types/interfaces/SearchProtocols";

export async function getSearchedProducts(
  param: string
): Promise<SearchedProductProtocol[] | []> {
  try {
    const dataProducts = await fetch("http://127.0.0.1:5555/produtos");
    const produtos = await dataProducts.json();

    // Conversão dos dados para o protocolo
    const products: SearchedProductProtocol[] = produtos.map(
      (product: any) => ({
        id: product.idProduto ?? 0, // Valor padrão caso esteja ausente
        nome: product.nome ?? "Sem nome",
        preco: product.preco ?? 0,
        image: product.image ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxZR0_1ISIJx_T4oB5-5OJVSNgSMFLe8eCw&s",
        desconto: null,
        parcelasMax: null,
      })
    );

    console.log(products)

    // TODO: Pensar num filtro melhor (possívelmente no back-end)
    const filteredProducts = products.filter((product) =>
      product.nome.toLowerCase().includes(param.toLowerCase())
    );

    return filteredProducts;
  } catch {
    console.log("Error");
    return [];
  }
}

// TODO: Implementar quando controller estiver pronto
export async function getSearchedMakers(
  param: string
): Promise<SearchedMakerProtocol[] | []> {
  return new Promise<SearchedMakerProtocol[] | []>((resolve, reject) => {
    resolve([
      {
        id: 99,
        nome: "NÃO IMPLEMENTADO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxZR0_1ISIJx_T4oB5-5OJVSNgSMFLe8eCw&s",
        descricao: "Esse fetch precisa ser implementado",
        servicos: ["Teste", "Teste"],
        categorias: ["Teste", "Teste", "Teste"],
      },
    ]);
  });
}
