/* 
Para adicionar uma nova rota, que filtra por categoria, 
basta adicionar esta categoria nova na propriedade "category":
isso fará com que uma nova rota seja criada para essa categoria.
*/

export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  isDailySpecial?: boolean
  isPromotional?: boolean
}

export const menuItems: MenuItem[] = [
  // PETISCOS
  {
    id: 1,
    name: 'Bruschetta Tradicional',
    description: 'Pão italiano, tomate, manjericão fresco e azeite extra virgem.',
    price: 18.9,
    image: '/img/pratos/BruschettaTradicional.jpg',
    category: 'Petiscos',
  },
  {
    id: 2,
    name: 'Tábua de Queijos',
    description: 'Seleção de queijos finos, castanhas e geleia artesanal.',
    price: 42.5,
    image: '/img/pratos/TábuadeQueijos.jpg',
    category: 'Petiscos',
    isPromotional: true,
  },
  {
    id: 3,
    name: 'Bolinho de Bacalhau',
    description: 'Bolinhos crocantes de bacalhau, servidos com molho de pimenta.',
    price: 32.0,
    image: '/img/pratos/BolinhodeBacalhau.jpg',
    category: 'Petiscos',
  },
  {
    id: 4,
    name: 'Iscas de Frango',
    description: 'Iscas de frango empanadas e fritas, acompanhadas de molho barbecue.',
    price: 28.5,
    image: '/img/pratos/IscasdeFrango.jpg',
    category: 'Petiscos',
  },
  {
    id: 5,
    name: 'Batata Frita',
    description: 'Porção generosa de batatas fritas crocantes com sal e páprica.',
    price: 22.0,
    image: '/img/pratos/BatataFrita.jpg',
    category: 'Petiscos',
  },
  {
    id: 6,
    name: 'Mini Coxinhas',
    description: 'Coxinhas de frango cremosas e bem temperadas, servidas em porção.',
    price: 25.0,
    image: '/img/pratos/MiniCoxinhas.jpg',
    category: 'Petiscos',
  },
  {
    id: 7,
    name: 'Onion Rings',
    description: 'Anéis de cebola crocantes, empanados e fritos, servidos com molho especial.',
    price: 26.5,
    image: '/img/pratos/OnionRings.jpg',
    category: 'Petiscos',
  },
  {
    id: 8,
    name: 'Pastel de Carne',
    description: 'Pastéis de massa fina e crocante, recheados com carne moída temperada.',
    price: 18.0,
    image: '/img/pratos/PasteldeCarne.jpg',
    category: 'Petiscos',
  },
  {
    id: 9,
    name: 'Pão de Alho',
    description: 'Pão de alho gratinado com queijo, servido quente.',
    price: 19.5,
    image: '/img/pratos/PaodeAlho.jpg',
    category: 'Petiscos',
  },

  // PRATOS PRINCIPAIS
  {
    id: 11,
    name: 'Risoto de Camarão',
    description: 'Cremoso, com camarões frescos e toque de limão siciliano.',
    price: 58.9,
    image: '/img/pratos/RisotodeCamarão.jpg',
    category: 'Pratos Principais',
    isDailySpecial: true,
  },
  {
    id: 12,
    name: 'Filé ao Molho Madeira',
    description: 'Acompanha purê de batata e legumes grelhados.',
    price: 72.5,
    image: '/img/pratos/FileaoMolhoMadeira.jpg',
    category: 'Pratos Principais',
  },
  {
    id: 13,
    name: 'Penne ao Pesto',
    description: 'Molho pesto fresco com parmesão e pinolis.',
    price: 46.0,
    image: '/img/pratos/PenneaoPesto.jpg',
    category: 'Pratos Principais',
  },
  {
    id: 14,
    name: 'Salmão Grelhado',
    description: 'Salmão grelhado com molho de maracujá, servido com arroz de brócolis.',
    price: 68.0,
    image: '/img/pratos/SalmaoGrelhado.jpg',
    category: 'Pratos Principais',
  },
  {
    id: 15,
    name: 'Lasanha à Bolonhesa',
    description: 'Lasanha com massa fresca, molho bolonhesa, presunto e queijo, gratinada.',
    price: 52.0,
    image: '/img/pratos/LasanhaBolonhesa.jpg',
    category: 'Pratos Principais',
    isPromotional: true,
  },
  {
    id: 16,
    name: 'Frango Parmegiana',
    description: 'Filé de frango empanado, coberto com molho de tomate e queijo, gratinado.',
    price: 48.0,
    image: '/img/pratos/FrangoParmegiana.jpg',
    category: 'Pratos Principais',
  },

  {
    id: 18,
    name: 'Bife Ancho com Batata Rústica',
    description: 'Bife ancho grelhado, servido com batata rústica e farofa.',
    price: 85.0,
    image: '/img/pratos/BifeAnchocomBatataRustica.jpg',
    category: 'Pratos Principais',
  },
  {
    id: 19,
    name: 'Spaghetti Carbonara',
    description: 'Massa com ovo, queijo pecorino, pancetta e pimenta preta.',
    price: 54.0,
    image: '/img/pratos/SpaghettiCarbonara.jpg',
    category: 'Pratos Principais',
  },

  // DRINKS
  {
    id: 21,
    name: 'Mojito',
    description: 'Rum, hortelã, limão e água com gás.',
    price: 24.0,
    image: '/img/pratos/Mojito.jpg',
    category: 'Drinks',
    isPromotional: true,
  },

  {
    id: 23,
    name: 'Suco Natural de Laranja',
    description: 'Laranja fresca espremida na hora.',
    price: 14.0,
    image: '/img/pratos/SucoNaturaldeLaranja.jpg',
    category: 'Drinks',
  },
  {
    id: 24,
    name: 'Caipirinha',
    description: 'Cachaça, limão, açúcar e gelo, a clássica brasileira.',
    price: 22.0,
    image: '/img/pratos/Caipirinha.jpg',
    category: 'Drinks',
  },

  {
    id: 26,
    name: 'Gin Tônica',
    description: 'Gin, água tônica e fatias de limão siciliano.',
    price: 30.0,
    image: '/img/pratos/GinTonica.jpg',
    category: 'Drinks',
  },
  {
    id: 27,
    name: 'Suco de Abacaxi com Hortelã',
    description: 'Suco natural e refrescante de abacaxi com hortelã.',
    price: 15.0,
    image: '/img/pratos/SucoAbacaxi.jpg',
    category: 'Drinks',
  },

  {
    id: 29,
    name: 'Chopp Pilsen',
    description: 'Chopp gelado, claro e refrescante.',
    price: 16.0,
    image: '/img/pratos/ChoppPilsen.jpg',
    category: 'Drinks',
  },
  {
    id: 30,
    name: 'Vinho Tinto',
    description: 'Taça de vinho tinto da casa (consultar safra).',
    price: 25.0,
    image: '/img/pratos/VinhoTinto.jpg',
    category: 'Drinks',
  },

  // SOBREMESAS
  {
    id: 31,
    name: 'Tiramisu',
    description: 'Sobremesa italiana com café e cacau.',
    price: 28.0,
    image: '/img/pratos/Tiramisu.jpg',
    category: 'Sobremesas',
  },
  {
    id: 32,
    name: 'Petit Gateau',
    description: 'Bolo de chocolate com recheio cremoso e sorvete de creme.',
    price: 32.0,
    image: '/img/pratos/PetitGateau.jpg',
    category: 'Sobremesas',
  },
  {
    id: 33,
    name: 'Cheesecake de Frutas Vermelhas',
    description: 'Base crocante com creme suave e calda artesanal.',
    price: 29.5,
    image: '/img/pratos/Cheesecake.jpg',
    category: 'Sobremesas',
  },
  {
    id: 34,
    name: 'Brownie com Sorvete',
    description: 'Brownie de chocolate quentinho, servido com uma bola de sorvete de creme.',
    price: 25.0,
    image: '/img/pratos/Brownie.jpg',
    category: 'Sobremesas',
  },
  {
    id: 35,
    name: 'Pudim de Leite Condensado',
    description: 'Pudim tradicional de leite condensado com calda de caramelo.',
    price: 18.0,
    image: '/img/pratos/Pudim.jpg',
    category: 'Sobremesas',
  },
  {
    id: 36,
    name: 'Mousse de Chocolate',
    description: 'Mousse aerada de chocolate meio amargo, decorada com raspas.',
    price: 20.0,
    image: '/img/pratos/Mousse.jpg',
    category: 'Sobremesas',
    isPromotional: true,
  },

  {
    id: 38,
    name: 'Sorvete Artesanal',
    description: 'Duas bolas de sorvete artesanal, escolha os sabores.',
    price: 19.0,
    image: '/img/pratos/Sorvete.jpg',
    category: 'Sobremesas',
  },
  {
    id: 39,
    name: 'Pavê de Limão',
    description: 'Camadas de biscoito e creme de limão, com merengue por cima.',
    price: 22.0,
    image: '/img/pratos/Pave.jpg',
    category: 'Sobremesas',
  },
  {
    id: 40,
    name: 'Salada de Frutas',
    description: 'Mix de frutas frescas da estação, servida com iogurte ou granola.',
    price: 17.0,
    image: '/img/pratos/Salada.jpg',
    category: 'Sobremesas',
  },
]
