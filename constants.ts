import {
  Brain,
  Zap,
  Code,
  Users,
  ShieldCheck,
  Workflow,
  Bot,
  Layers,
  Sparkles,
  Database,
} from "lucide-react";
import { Chapter, FaqItem, Feature } from "./types";

export const APP_NAME = "IA Sem Enrolação";

export const FEATURES: Feature[] = [
  {
    title: "Prompts Que Funcionam",
    description:
      "Aprenda a fórmula de 4 ingredientes: Contexto, Objetivo, Formato e Tom. Saia do modo 'usuário perdido'.",
    icon: Brain,
  },
  {
    title: "Estude Mais Rápido",
    description:
      "Use IA como tutor pessoal 24/7. Explicações personalizadas, planos de estudo e exercícios sob medida.",
    icon: Zap,
  },
  {
    title: "Crie Conteúdo Profissional",
    description:
      "Textos, imagens e vídeos com IA. DALL-E, Midjourney, Sora, Veo 3 e ferramentas de ponta.",
    icon: Sparkles,
  },
  {
    title: "Programe do Zero",
    description:
      "Aprenda programação com IA como professor. GitHub Copilot, Cursor e Antigravity ao seu lado.",
    icon: Code,
  },
];

export const CHAPTERS: Chapter[] = [
  {
    number: "01",
    title: "O Que é IA (Sem Enrolação)",
    description:
      "Esqueça os filmes. Entenda o que IA realmente faz e o que NÃO faz. Sem termos técnicos, sem enrolação.",
    tags: ["Fundamentos", "Conceitos", "Prático"],
  },
  {
    number: "02",
    title: "ChatGPT, Claude e Gemini",
    description:
      "Qual usar e quando. Descubra os superpoderes de cada ferramenta e como combiná-las estrategicamente.",
    tags: ["Ferramentas", "Comparação", "Estratégia"],
  },
  {
    number: "03",
    title: "O Código Secreto dos Prompts",
    description:
      "A fórmula de 4 ingredientes: Contexto, Objetivo, Formato, Tom. Prompts que realmente funcionam.",
    tags: ["Prompts", "Técnicas", "Essencial"],
  },
  {
    number: "04",
    title: "Estudar e Aprender Mais Rápido",
    description:
      "IA como tutor pessoal 24/7. Método Feynman, simulados personalizados e mapas mentais.",
    tags: ["Estudos", "Aprendizado", "Produtividade"],
  },
  {
    number: "05",
    title: "IA no Dia a Dia",
    description:
      "Organize sua vida, tome decisões melhores e economize horas por semana com IA.",
    tags: ["Produtividade", "Organização", "Rotina"],
  },
  {
    number: "06",
    title: "Criar Conteúdo Profissional",
    description:
      "Textos, imagens e vídeos. DALL-E, Midjourney, Sora, Veo 3 e criação sem limites.",
    tags: ["Criação", "Design", "Vídeo"],
  },
  {
    number: "07",
    title: "Programação do Zero",
    description:
      "Aprenda a programar mesmo sem experiência. GitHub Copilot, Cursor e Antigravity.",
    tags: ["Código", "Desenvolvimento", "Tech"],
  },
  {
    number: "08",
    title: "Erros Que Matam Resultados",
    description:
      "Os 8 erros que fazem 90% das pessoas acharem que 'IA não funciona'. Evite-os.",
    tags: ["Erros", "Soluções", "Dicas"],
  },
  {
    number: "09",
    title: "Uso Ético e Inteligente",
    description:
      "Como usar IA de forma responsável. Autenticidade, verificação e transparência.",
    tags: ["Ética", "Responsabilidade", "Boas Práticas"],
  },
  {
    number: "10",
    title: "Plano de 7 Dias",
    description:
      "Plano prático passo a passo para dominar IA em uma semana. 30min-1h por dia.",
    tags: ["Ação", "Prático", "Guia"],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Preciso saber programar para aproveitar o conteúdo?",
    answer:
      "Não. O livro tem um capítulo sobre programação, mas a maior parte foca em uso prático de IA para qualquer pessoa: estudos, produtividade, criação de conteúdo e mais.",
  },
  {
    question: "O conteúdo serve para iniciantes?",
    answer:
      "Sim! Começamos do zero explicando o que é IA sem termos técnicos. Depois avançamos gradualmente até técnicas avançadas. É um guia completo de iniciante a avançado.",
  },
  {
    question: "Como recebo o acesso?",
    answer:
      "O acesso é imediato. Assim que o pagamento for confirmado, você receberá um e-mail com o link para download do eBook em PDF.",
  },
  {
    question: "O que é a fórmula de prompts do Capítulo 3?",
    answer:
      "É a técnica de 4 ingredientes (Contexto, Objetivo, Formato, Tom) que transforma prompts genéricos em comandos profissionais que geram resultados incríveis.",
  },
];

export const TOOLS_LOGOS = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Midjourney",
  "DALL-E",
  "Sora",
  "Copilot",
  "Notion",
  "Perplexity",
  "Cursor",
];

export const TARGET_AUDIENCE = [
  {
    title: "Iniciantes em IA",
    description:
      "Você nunca usou IA ou só conhece o básico do ChatGPT. Quer aprender do zero sem enrolação.",
    icon: Users,
  },
  {
    title: "Estudantes",
    description:
      "Precisa estudar mais rápido e melhor. Quer IA como tutor pessoal 24/7 para qualquer matéria.",
    icon: Brain,
  },
  {
    title: "Criadores de Conteúdo",
    description:
      "Quer criar textos, imagens e vídeos profissionais usando IA de forma estratégica.",
    icon: Sparkles,
  },
  {
    title: "Profissionais",
    description:
      "Busca aumentar produtividade, organizar melhor o dia e tomar decisões mais inteligentes.",
    icon: Zap,
  },
];

export const TRANSFORMATIONS = {
  before: [
    "Respostas genéricas e robóticas da IA",
    "Perda de tempo com tarefas manuais",
    "Não sabe quais ferramentas usar",
    "Prompts que não funcionam",
    "Medo de ficar para trás na tecnologia",
  ],
  after: [
    "Prompts profissionais com a fórmula de 4 ingredientes",
    "Produtividade multiplicada com IA no dia a dia",
    "Domínio de ChatGPT, Claude e Gemini",
    "Resultados precisos e personalizados",
    "Confiança para usar IA em qualquer área",
  ],
};

export const TESTIMONIALS = [
  {
    name: "João, 19 anos",
    role: "Estudante → Tutor de IA",
    avatar: "J",
    rating: 5,
    text: "Estava com dificuldades em física. Aprendi a usar IA para estudar e virei tutor ensinando outros. Hoje tenho 50mil seguidores!",
  },
  {
    name: "Maria",
    role: "Criadora de Conteúdo",
    avatar: "M",
    rating: 5,
    text: "Tinha vergonha da câmera. Criei um canal com avatar virtual usando IA. Em 6 meses, 100mil inscritos sem nunca aparecer!",
  },
  {
    name: "Carlos",
    role: "Administração → Desenvolvedor",
    avatar: "C",
    rating: 5,
    text: "Formado em ADM, queria mudar para tech. Usei IA como professor de programação. Em 8 meses consegui meu primeiro emprego como dev!",
  },
];

export const GUARANTEES = [
  {
    title: "Garantia de 7 Dias",
    description:
      "Se você não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.",
    icon: ShieldCheck,
  },
  {
    title: "Acesso Imediato",
    description:
      "Receba o ebook no seu email assim que o pagamento for confirmado. Comece a aprender agora.",
    icon: Zap,
  },
  {
    title: "Conteúdo Atualizado",
    description:
      "Ferramentas e técnicas de 2026. Sora, Veo 3, Antigravity e tudo que há de mais novo em IA.",
    icon: Sparkles,
  },
];

export const LEARNING_OUTCOMES = [
  "Dominar a fórmula de prompts: Contexto + Objetivo + Formato + Tom",
  "Usar ChatGPT, Claude e Gemini estrategicamente",
  "Estudar qualquer assunto 3x mais rápido com IA como tutor",
  "Criar textos, imagens e vídeos profissionais",
  "Aprender programação do zero com GitHub Copilot",
  "Evitar os 8 erros fatais que matam resultados",
  "Aplicar técnicas avançadas de Prompt Engineering",
  "Seguir o plano de 7 dias para domínio completo",
];
