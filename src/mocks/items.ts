import { ItemType } from '../models/Item'
import hiokiImg from '../assets/images/hioki_sushui.png'
import dolceVitaImg from '../assets/images/laDolceVita.png'
import mariaCaseiraImg from '../assets/images/MariaCaseira.png'
import articoSul from '../assets/images/acaiteriaArtico.png'

export const mockItems: ItemType[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiokiImg,
    rating: '4.9',
    tags: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: dolceVitaImg,
    rating: '4.6',
    tags: ['Italiana']
  },
  {
    id: 3,
    title: 'Pensão Maria Caseira',
    description:
      'A Pensão Maria Caseira traz o melhor da culinária brasileira! Comida gostosa, no estilo caseira e  um bom MPB pra acompanhar a sua ilústre visita! Venha experimentar a melhor feijoada do nosso estado! Entregamos na sua residência também!',
    image: mariaCaseiraImg,
    rating: '4.5',
    tags: ['Brasileira']
  },
  {
    id: 4,
    title: 'Ártico do Sul Açaíteria',
    description:
      'Ártico Sul Açaíteria: Mais do que açaí, uma experiência gelada! Se você busca uma explosão de sabor e frescor, a Ártico Sul é o lugar certo! Nosso açaí é preparado com frutas selecionadas e ingredientes de alta qualidade que você merece.',
    image: articoSul,
    rating: '4.8',
    tags: ['Sobremesas']
  }
]
