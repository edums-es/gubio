import { Proposal, CampaignEvent, Testimonial, DownloadMaterial } from '../types';

export const CANDIDATE_INFO = {
  name: 'Gubio Heringer',
  shortName: 'Gubio',
  number: '36181',
  party: 'Coligação Renovação e Trabalho',
  position: 'Deputado Estadual',
  state: 'Espírito Santo',
  stateAbbr: 'ES',
  slogan: 'O Homem do Povo',
  subSlogan: 'Trabalho de Verdade pelo Espírito Santo',
  whatsappUrl: 'https://wa.me/5527997036181?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20assessoria%20da%20campanha%20de%20Gubio%20Heringer%2036181!',
  instagramUrl: 'https://instagram.com/gubioheringer36181',
  facebookUrl: 'https://facebook.com/gubioheringeroficial',
  youtubeUrl: 'https://youtube.com/@gubioheringer36181',
  cnpj: '68.344.839/0001-80',
};

export const ES_MUNICIPALITIES = [
  'Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Cachoeiro de Itapemirim',
  'Linhares', 'São Mateus', 'Colatina', 'Guarapari', 'Aracruz',
  'Viana', 'Nova Venécia', 'Barra de São Francisco', 'Marataízes', 'Santa Maria de Jetibá',
  'Castelo', 'Domingos Martins', 'Afonso Cláudio', 'Itapemirim', 'Guaçuí',
  'Iúna', 'Anchieta', 'Pinheiros', 'Jaguaré', 'Conceição da Barra',
  'Baixo Guandu', 'Ecoporanga', 'Mimoso do Sul', 'Iconha', 'Venda Nova do Imigrante',
  'Outro Município do ES'
];

export const PROPOSALS: Proposal[] = [
  {
    id: 'saude-1',
    category: 'saude',
    title: 'Saúde Ágil: Fim das Filas do SUS no ES',
    shortDescription: 'Mutirões permanentes de consultas com especialistas, exames de alta complexidade e cirurgias eletivas em todas as microrregiões capixabas.',
    fullDescription: 'A saúde não pode esperar. Vamos criar o programa Estadual de Descentralização Médica, fortalecendo os hospitais regionais do Norte, Noroeste, Sul e Região Serrana, para que o cidadão não precise se deslocar até a Grande Vitória para conseguir um exame ou cirurgia.',
    iconName: 'HeartPulse',
    keyInitiatives: [
      'Corujão da Saúde: exames e consultas no contraturno e fins de semana em clínicas conveniadas.',
      'Farmácia do Povo 24h com remédios essenciais gratuitos nos 78 municípios.',
      'Unidades Móveis de Especialidades nos bairros periféricos e comunidades rurais.',
      'Valorização salarial e plano de carreira digno para enfermeiros, médicos e técnicos do SUS.'
    ],
    impactTarget: 'Meta: Reduzir em até 70% o tempo de espera por cirurgias eletivas no ES.'
  },
  {
    id: 'educacao-2',
    category: 'educacao',
    title: 'Futuro Capixaba: Educação Técnica & Universitária',
    shortDescription: 'Cursos profissionalizantes gratuitos conectados às necessidades do mercado de trabalho capixaba e bolsas de incentivo ao primeiro emprego.',
    fullDescription: 'A educação transforma vidas e liberta. Nosso mandato vai priorizar a expansão de escolas de tempo integral com formação técnica e polo de inovação em cada cidade do Espírito Santo.',
    iconName: 'GraduationCap',
    keyInitiatives: [
      'Bolsa Primeiro Emprego Capixaba para jovens aprendizes e recém-formados.',
      'Climatização e internet de alta velocidade em 100% das escolas da rede estadual.',
      'Escolas técnicas integradas ao agronegócio, logística portuária e tecnologia.',
      'Passe livre estudantil ampliado e auxílio-permanência para estudantes universitários de baixa renda.'
    ],
    impactTarget: 'Meta: 50.000 novas vagas em cursos técnicos e profissionalizantes gratuitos.'
  },
  {
    id: 'emprego-3',
    category: 'emprego',
    title: 'Emprego Já & Apoio ao Microempreendedor',
    shortDescription: 'Menos burocracia, crédito popular a juro zero e incentivos fiscais para empresas que gerarem postos de trabalho no Espírito Santo.',
    fullDescription: 'O capixaba é um povo trabalhador que só precisa de oportunidade. Vamos incentivar o comércio de bairro, os pequenos negócios familiares e atrair novos investimentos para o interior do estado.',
    iconName: 'Briefcase',
    keyInitiatives: [
      'Programa Banco do Povo Capixaba: microcrédito orientado de até R$ 20.000 com taxa subsidiada.',
      'Isenção e simplificação tributária para microempresas e empreendedores individuais nos 2 primeiros anos.',
      'Polo de Desenvolvimento Regional: benefícios fiscais progressivos para indústrias no interior.',
      'Capacitação digital gratuita para pequenos comerciantes, autônomos e ambulantes.'
    ],
    impactTarget: 'Meta: Impulsionar mais de 40.000 novos postos de trabalho em todo o ES.'
  },
  {
    id: 'seguranca-4',
    category: 'seguranca',
    title: 'Segurança Presente & Proteção da Família',
    shortDescription: 'Policiamento ostensivo e comunitário nos bairros, videomonitoramento inteligente e iluminação pública de LED.',
    fullDescription: 'Queremos nossas famílias andando tranquilas nas ruas. Segurança pública se faz com presença policial forte, equipamentos modernos, valorização da tropa e projetos sociais preventivos para afastar a juventude da criminalidade.',
    iconName: 'ShieldCheck',
    keyInitiatives: [
      'Cercamento Eletrônico e câmeras inteligentes integradas em todas as divisas e municípios.',
      'Aumento do efetivo da Polícia Militar e Polícia Civil com concurso público contínuo.',
      'Patrulha Maria da Penha fortalecida e delegacias da mulher funcionando 24 horas.',
      'Centros Comunitários da Paz com escolinhas esportivas, artes marciais e música para crianças.'
    ],
    impactTarget: 'Meta: Iluminação 100% LED e videomonitoramento nas principais rotas escolares e comerciais.'
  },
  {
    id: 'infraestrutura-5',
    category: 'infraestrutura',
    title: 'Infraestrutura Integrada & Mobilidade',
    shortDescription: 'Recapeamento de rodovias estaduais, saneamento básico universal e transporte público integrado e acessível.',
    fullDescription: 'O Espírito Santo precisa de estradas seguras para escoar sua produção e de transporte digno para os trabalhadores que pegam ônibus todos os dias.',
    iconName: 'Truck',
    keyInitiatives: [
      'Programa Asfalto no Bairro: pavimentação de ruas de terra e drenagem para evitar alagamentos.',
      'Duplicação e recuperação das principais rodovias estaduais (ES-010, ES-080, ES-164, etc.).',
      'Ampliação das linhas do Aquaviário e integração tarifária plena com o Transcol.',
      'Meta de 100% de esgoto tratado e água tratada potável em todas as comunidades.'
    ],
    impactTarget: 'Meta: Mais de 500 km de estradas vicinais e rodovias revitalizadas.'
  },
  {
    id: 'agricultura-6',
    category: 'agricultura',
    title: 'Força do Campo & Agricultura Familiar',
    shortDescription: 'Caminhos do campo recuperados, incentivo à cafeicultura, fruticultura e compra garantida para a merenda escolar.',
    fullDescription: 'O homem do campo alimenta nossas cidades. Vamos levar assistência técnica, máquinas agrícolas, energia trifásica e internet rural para quem produz a riqueza do nosso estado.',
    iconName: 'Sprout',
    keyInitiatives: [
      'Programa Caminhos do Campo: manutenção permanente das estradas rurais para escoamento da safra.',
      'Incentivo e subsídio para compra de adubos e mudas certificadas para os cafeicultores capixabas.',
      'Energia solar e poços artesianos comunitários para enfrentar períodos de estiagem.',
      'Prioridade absoluta aos produtos dos agricultores familiares capixabas na merenda de todas as escolas estaduais.'
    ],
    impactTarget: 'Meta: Beneficiar mais de 30.000 famílias do campo capixaba.'
  }
];

export const CAMPAIGN_EVENTS: CampaignEvent[] = [
  {
    id: 'ev-1',
    title: 'Grande Caminhada do Povo em Vitória',
    date: 'Sábado, 29 de Agosto',
    time: '09:00',
    city: 'Vitória',
    location: 'Concentração na Praça de Goiabeiras (em frente à Igreja)',
    type: 'caminhada',
    description: 'Venha caminhar ao lado de Gubio 36181 pelas ruas de Goiabeiras e Jardim da Penha. Traga sua família e sua bandeira!'
  },
  {
    id: 'ev-2',
    title: 'Encontro de Lideranças & Plenária da Saúde',
    date: 'Terça-feira, 01 de Setembro',
    time: '19:30',
    city: 'Vila Velha',
    location: 'Clube Libanês - Praia da Costa',
    type: 'plenaria',
    description: 'Apresentação detalhada do plano emergencial para o SUS capixaba com profissionais da área médica e lideranças comunitárias.'
  },
  {
    id: 'ev-3',
    title: 'Mega Carreata 36181 na Serra',
    date: 'Sábado, 05 de Setembro',
    time: '14:00',
    city: 'Serra',
    location: 'Saída da Av. Central em Laranjeiras até Jacaraípe',
    type: 'carreata',
    description: 'Vamos colorir a Serra de azul e rosa! Adesivagem gratuita de carros e motos no ponto de partida.'
  },
  {
    id: 'ev-4',
    title: 'Roda de Conversa com Produtores e Moradores',
    date: 'Domingo, 06 de Setembro',
    time: '10:00',
    city: 'Cachoeiro de Itapemirim',
    location: 'Centro Comunitário do Bairro Baiminas',
    type: 'encontro',
    description: 'Debate aberto sobre incentivo ao pequeno comércio, agricultura do Sul e melhorias nos postos de saúde de Cachoeiro.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dona Maria de Lourdes',
    role: 'Líder Comunitária há 22 anos',
    city: 'Cariacica / Nova Rosa da Penha',
    quote: 'Gubio nunca foi político de aparecer só de 4 em 4 anos. Ele entra nas nossas ruas de terra, escuta a gente de verdade e estende a mão. O Espírito Santo precisa de alguém que sinta a nossa dor.'
  },
  {
    id: 't-2',
    name: 'Carlos Eduardo Silveira',
    role: 'Pequeno Comerciante e Mecânico',
    city: 'Serra / Feu Rosa',
    quote: 'Para quem acorda às 5 da manhã como eu, ver as propostas do Gubio de crédito fácil e menos burocracia para quem trabalha dá uma esperança enorme. É o homem do povo mesmo! É 36181!'
  },
  {
    id: 't-3',
    name: 'Juliana Fagundes',
    role: 'Enfermeira e Moradora',
    city: 'Vila Velha / Terra Vermelha',
    quote: 'A proposta dele para zerar as filas de cirurgias eletivas e valorizar os profissionais da enfermagem é a mais realista e humana que já vi. Meu voto e da minha família é 36181.'
  },
  {
    id: 't-4',
    name: 'Marcos Antônio Ribeiro',
    role: 'Produtor de Café e Feirante',
    city: 'Colatina / Córrego do Ouro',
    quote: 'Gubio sabe a dificuldade que é levar o café até a cidade com estrada ruim. As propostas dele para os caminhos do campo e para o produtor rural são essenciais para nós do interior.'
  }
];

export const DOWNLOAD_MATERIALS: DownloadMaterial[] = [
  {
    id: 'mat-1',
    title: 'Santinho Digital Oficial 36181',
    category: 'santinho',
    description: 'Arquivo em alta definição para compartilhar no WhatsApp, Stories e redes.',
    fileSize: '1.8 MB',
    format: 'JPG / PNG',
    previewColor: '#1E9BD7'
  },
  {
    id: 'mat-2',
    title: 'Adesivo para Carro e Vidro (Perfura)',
    category: 'adesivo',
    description: 'Pronto para impressão em gráfica rápida no tamanho oficial 50x40cm.',
    fileSize: '4.2 MB',
    format: 'PDF Vetorial',
    previewColor: '#1C2B45'
  },
  {
    id: 'mat-3',
    title: 'Pacote de Figurinhas para WhatsApp',
    category: 'card',
    description: 'Mais de 15 figurinhas divertidas com o candidato, números e slogans da campanha.',
    fileSize: '3.1 MB',
    format: 'WAStickers / ZIP',
    previewColor: '#F2A0C6'
  },
  {
    id: 'mat-4',
    title: 'Plano de Governo Completo em PDF',
    category: 'proposta',
    description: 'Documento oficial detalhado com todos os projetos de lei e compromissos para o ES.',
    fileSize: '2.5 MB',
    format: 'PDF',
    previewColor: '#4FC3C9'
  }
];

export const JINGLE_LYRICS = `
(Refrão contagiante)
Vem com a gente, vem com o coração!
Pelo nosso Espírito Santo, nossa gente, nossa união!
É Gubio Heringer, o Homem do Povo, pode confiar!
Na urna é 36181 pra transformar!

(Estrofe 1)
Ele ouve quem precisa, tem coragem pra lutar
Pela saúde, pelo emprego, pra nossa vida melhorar
Com trabalho e honestidade, nossa voz vai ecoar
Na Assembleia do Estado, quem defende o povo tá lá!

(Refrão final)
36... 181! 
Gubio Heringer é o homem do povo!
36... 181!
Vote no novo, vote com o povo!
`;
