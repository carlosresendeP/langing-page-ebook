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
  Database
} from "lucide-react";
import { Chapter, FaqItem, Feature } from "./types";

export const APP_NAME = "Manual IA 2026";

export const FEATURES: Feature[] = [
  {
    title: "O Fim da Resposta Robótica",
    description: "Aprenda a deixar de ser um 'pedinte' de prompts e torne-se um 'Orquestrador'. Domine o framework C.C.P.O.",
    icon: Brain
  },
  {
    title: "Seu Segundo Cérebro",
    description: "Transforme o caos de informações em produtividade. Notion AI, Resumos Inteligentes e gestão de e-mail Zero.",
    icon: Zap
  },
  {
    title: "Automação No-Code",
    description: "Conecte os pontos com Zapier, Make e n8n. Crie fluxos de trabalho que funcionam enquanto você dorme.",
    icon: Workflow
  },
  {
    title: "Stack de Elite",
    description: "O roadmap completo para 2026: Next.js, RAG, Bancos Vetoriais e Agentes de IA autônomos.",
    icon: Layers
  }
];

export const CHAPTERS: Chapter[] = [
  {
    number: "01",
    title: "O Código Secreto dos Prompts",
    description: "A anatomia do 'Prompt de Ouro' e como usar o Framework C.C.P.O (Contexto, Comando, Persona, Output) para resultados profissionais.",
    tags: ["Prompt Engineering", "C.C.P.O", "ChatGPT"]
  },
  {
    number: "02",
    title: "Produtividade & Gestão",
    description: "Resumos de vídeos em 5 minutos, reuniões que geram atas automáticas e o método 'Segundo Cérebro' no Notion.",
    tags: ["Notion AI", "Productivity", "Otter.ai"]
  },
  {
    number: "03",
    title: "Design & Identidade Visual",
    description: "O fim das fotos de estoque. Crie imagens que vendem com Midjourney e DALL-E 3. Headshots profissionais sem câmera.",
    tags: ["Midjourney", "Design", "Canva"]
  },
  {
    number: "04",
    title: "Máquina de Vendas 24/7",
    description: "Marketing e Copywriting de Elite. Use frameworks AIDA e PAS para criar anúncios irresistíveis e hiper-personalização.",
    tags: ["Marketing", "Sales", "Copy.ai"]
  },
  {
    number: "05",
    title: "Automação Sem Código",
    description: "O conceito 'Gatilho e Ação'. Domine o trio de ferro: Zapier, Make e Typeform para automatizar sua vida.",
    tags: ["n8n", "Make", "Automation"]
  },
  {
    number: "06",
    title: "Memória & RAG",
    description: "Crie sua IA especialista. Alimente o modelo com seus próprios PDFs e dados para acabar com as alucinações.",
    tags: ["RAG", "Data", "Custom GPTs"]
  },
  {
    number: "08",
    title: "Engenharia de Prompt p/ Devs",
    description: "Pair Programming com IA. Como usar o GitHub Copilot e Claude para codar mais rápido e melhor.",
    tags: ["Dev", "Code", "React"]
  },
  {
    number: "Bonus",
    title: "Arsenal de Prompts de Ouro",
    description: "10 prompts prontos para copiar e colar: Arquiteto de Código, Copywriter, Consultor de SEO e mais.",
    tags: ["Templates", "Copy-Paste", "Exclusive"]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Preciso saber programar para aproveitar o conteúdo?",
    answer: "Não. Embora tenhamos capítulos avançados sobre Stack de Desenvolvimento (Next.js/React), grande parte do livro foca em ferramentas No-Code (Zapier, Make), Design e Produtividade que qualquer profissional pode usar."
  },
  {
    question: "O conteúdo serve para iniciantes?",
    answer: "Sim. Começamos do zero com a estrutura de Prompts (C.C.P.O) e avançamos gradualmente até automações complexas. É um guia de sobrevivência completo para 2026."
  },
  {
    question: "Como recebo o acesso?",
    answer: "O acesso é imediato. Assim que o pagamento for confirmado, você receberá um e-mail com o link para download do eBook e acesso aos materiais complementares."
  },
  {
    question: "O que é o Framework C.C.P.O?",
    answer: "É a nossa metodologia proprietária (Contexto, Comando, Persona, Output) para garantir que a IA entregue exatamente o que você precisa, eliminando respostas genéricas."
  }
];

export const TOOLS_LOGOS = [
  "ChatGPT", "Claude", "Midjourney", "Notion", "Make", "n8n", "Zapier", "Next.js", "Gamma", "Perplexity"
];