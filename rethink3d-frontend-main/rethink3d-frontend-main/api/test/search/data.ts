import {
  SearchedMakerProtocol,
  SearchedProductProtocol,
} from "@/types/interfaces/SearchProtocols";

export const makers: SearchedMakerProtocol[] = [
  {
    id: 0,
    nome: "R3D (teste)",
    image:
      "https://yt3.googleusercontent.com/lSrNSJGA8D78ktETqsJMPyUTvLsziUrDom93Ff8gf3KtEJdYpgvbIOylSHTCBbvysGaglnA1=s900-c-k-c0x00ffffff-no-rj",
    descricao:
      "Faço modelos 3D com alto detalhamento. Tenho experiência com modelos de video-games, animes e cultura pop.",
    servicos: ["Modela"],
    categorias: ["Action Figure", "Video-games"],
  },
  {
    id: 1,
    nome: "SE Nordeste (teste)",
    image:
      "https://t.ctcdn.com.br/AbFafGNrw5u11SAbL12ja95t9jA=/1080x1080/smart/i490039.jpeg",
    descricao:
      "Traga seu modelo para impressão. Trabalhamos principalmente com material polimérico de alta qualidade. Estamos há 3 anos no mercado de impressão 3D.",
    servicos: ["Imprime"],
    categorias: [
      "Industrial",
      "Casa",
      "Action Figure",
      "Assets",
      "Cenográfico",
      "Video-games",
      "Polímeros",
    ],
  },
  {
    id: 2,
    nome: "Koji3D (teste)",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/7/75/Kojima_Productions_logo.png",
    descricao:
      "Especializado em impressão de assets 3D para cenários e figures.",
    servicos: ["Modela", "Imprime"],
    categorias: [
      "Action Figure",
      "Assets",
      "Cenográfico",
      "Terror",
      "Video-games",
      "Polímeros",
    ],
  },
];

export const produtos: SearchedProductProtocol[] = [
  {
    id: 0,
    nome: "Escultura Itadori (teste)",
    image:
      "https://fantasticloot.com.br/cdn/shop/products/01_38334d70-e00a-4606-ab39-8b4fcb436ef3_1024x1024.jpg?v=1707089991",
    preco: 100.99,
    desconto: 20,
    parcelasMax: 6,
  },
  {
    id: 1,
    nome: "Estatueta Kratos e Garoto (teste)",
    image:
      "https://homenge.com.br/cdn/shop/products/S6bfa777064b647ce995be1d87bd27ea7y.jpg?v=1668131653&width=2048",
    preco: 249.0,
    desconto: 40,
    parcelasMax: 6,
  },
  {
    id: 2,
    nome: "Action Figure Naruto (teste)",
    image:
      "https://www.atacadocollections.com/produtos_img/g/estatua-banpresto-naruto-shippuden-vibration-stars-naruto-uzumaki-29397-img_86684_1.jpg",
    preco: 120.0,
    desconto: null,
    parcelasMax: 6,
  },
];

export async function getData(time?: number) {
  return new Promise<{
    makers: SearchedMakerProtocol[];
    produtos: SearchedProductProtocol[];
  }>((resolve, reject) => {
    setTimeout(() => {
      resolve({ makers, produtos });
    }, time || 2000);
  });
}
