import React from 'react';
import { Download, Instagram, MessageCircle, QrCode, Youtube } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/campaignData';
import { trackMetaLead } from '../utils/metaPixel';
import { CampaignImages } from '../assets/images';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Biografia', href: '#biografia' },
  { label: 'Propostas', href: '#propostas' },
  { label: 'Download', href: '#download' },
];

const cards = [
  { title: 'Agricultura Forte', description: 'Investimento direto no produtor rural e modernização sustentável das lavouras capixabas.', image: CampaignImages.rallyPhoto },
  { title: 'Saúde para Todos', description: 'Levar atendimento de qualidade às comunidades mais distantes do interior do estado.', image: CampaignImages.communityPhoto },
  { title: 'Infraestrutura', description: 'Estradas, transporte e conectividade para integrar o campo às oportunidades da cidade.', image: CampaignImages.esLandscape },
  { title: 'Cavalgadas', description: 'Valorização das tradições do campo, da cultura sertaneja e dos encontros que movimentam o interior capixaba.', image: CampaignImages.horsemanPhoto },
];

export const ReferenceLanding: React.FC = () => (
  <div className="overflow-x-hidden bg-[#1C2B45] font-sans text-white">
    <nav className="fixed left-0 top-0 z-50 flex w-full justify-center px-6 py-4">
      <div className="flex items-center space-x-4 rounded-full border border-[#334665] bg-[#1C2B45]/80 px-4 py-2.5 shadow-xl backdrop-blur-md sm:space-x-8 sm:px-8 sm:py-3">
        {navLinks.map((link, index) => (
          <a key={link.label} href={link.href} className={`reference-nav-link relative rounded-full px-2 py-1 text-[10px] font-medium uppercase tracking-wide transition sm:px-4 sm:text-sm ${index === 0 ? 'bg-[#F2A0C6] font-bold text-[#1C2B45]' : 'text-white'}`}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>

    <header id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img className="h-full w-full object-cover object-[center_30%]" src={CampaignImages.santinho} alt="Gubio Heringer" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2B45] via-[#1C2B45]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B45] via-transparent to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
        <div className="flex flex-col items-start justify-between md:flex-row">
          <div className="w-full lg:translate-y-44">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-300 md:text-sm">Deputado Estadual | Espírito Santo</p>
            <h1 className="flex max-w-3xl flex-col font-hero font-black uppercase leading-[0.86] tracking-[-0.06em]">
              <span className="text-6xl md:text-7xl lg:text-[8.5rem]">Gubio</span>
              <span className="text-5xl text-white/90 md:text-6xl lg:text-[5.8rem]">Heringer</span>
            </h1>
            <div className="mt-5"><span className="font-hero text-6xl font-black tracking-[-0.06em] text-[#4FC3C9] md:text-7xl lg:text-[8.5rem]">{CANDIDATE_INFO.number}</span></div>
          </div>
        </div>
      </div>
    </header>

    <section className="overflow-hidden border-y border-[#334665] bg-[#1C2B45] py-10">
      <div className="reference-marquee flex whitespace-nowrap">
        {[0, 1].map((item) => <div key={item} className="flex items-center space-x-12 px-6 font-heading text-6xl font-black tracking-tighter text-white/10 md:text-8xl"><span>36181 GUBIO HERINGER</span><span>36181 GUBIO HERINGER</span><span>36181 GUBIO HERINGER</span></div>)}
      </div>
    </section>

    <section id="biografia" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center font-heading text-4xl font-bold uppercase md:text-6xl">Quem é Gubio Heringer?</h2>
        <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
          <div className="group relative"><div className="absolute -inset-4 rounded-[3rem] bg-[#4FC3C9]/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><img className="relative h-[500px] w-full rounded-[3rem] object-cover shadow-2xl transition duration-500 group-hover:scale-[1.02]" src={CampaignImages.communityPhoto} alt="Gubio Heringer em retrato oficial" /></div>
          <div className="space-y-6"><h3 className="font-heading text-3xl font-bold uppercase">Raízes na terra, visão para o futuro</h3><p className="text-lg leading-relaxed text-gray-300">Nascido e criado no coração do Espírito Santo, Gubio Heringer carrega na pele a história do trabalhador. Décadas de dedicação à agricultura familiar moldaram um líder que entende as reais necessidades do nosso estado.</p><a href="#propostas" className="reference-link inline-block text-sm font-bold uppercase tracking-widest">Ler biografia completa</a></div>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 space-y-6 md:order-1"><h3 className="font-heading text-3xl font-bold uppercase">Compromisso com quem trabalha</h3><p className="text-lg leading-relaxed text-gray-300">Da roça ao plenário, a luta de Gubio tem sido a mesma: garantir que a voz do povo seja ouvida. Sua trajetória é marcada por ações concretas em defesa da saúde pública, da educação e do desenvolvimento regional.</p><a href="#apoie" className="reference-link inline-block text-sm font-bold uppercase tracking-widest">Conhecer a trajetória</a></div>
          <div className="group relative order-1 md:order-2"><div className="absolute -inset-4 rounded-[3rem] bg-[#F2A0C6]/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><img className="relative h-[500px] w-full rounded-[3rem] object-cover shadow-2xl transition duration-500 group-hover:scale-[1.02]" src={CampaignImages.esLandscape} alt="Gubio Heringer em retrato oficial" /></div>
        </div>
      </div>
    </section>

    <section id="propostas" className="bg-[#1C2B45] px-6 py-24">
      <div className="mx-auto max-w-7xl"><h2 className="mb-16 text-center font-heading text-4xl font-bold uppercase md:text-6xl">Nossas Propostas</h2><div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => <article key={card.title} className="group cursor-pointer overflow-hidden rounded-[2rem] border border-[#334665] bg-[#243553] shadow-xl"><div className="relative aspect-[4/5] overflow-hidden"><img className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0" src={card.image} alt="" /><div className="absolute inset-0 bg-gradient-to-t from-[#1C2B45] via-transparent to-transparent opacity-80" /><div className="absolute bottom-0 left-0 p-8"><h3 className="mb-2 font-heading text-2xl font-bold uppercase">{card.title}</h3><p className="text-sm text-gray-300">{card.description}</p></div></div></article>)}
      </div></div>
    </section>

    <section id="apoie" className="relative overflow-hidden px-6 py-32"><div className="absolute inset-0 bg-gradient-to-br from-[#4FC3C9]/20 to-[#F2A0C6]/20" /><div className="relative z-10 mx-auto max-w-4xl text-center"><h2 className="mb-8 font-heading text-5xl font-black uppercase md:text-7xl">Bora pro Zap do Gubio</h2><p className="mx-auto mb-12 max-w-2xl text-xl text-gray-200">Faça parte desse movimento e ajude a levar nossa proposta até mais pessoas. Juntos somos mais fortes!</p><a onClick={() => trackMetaLead('reference_cta_whatsapp')} href={CANDIDATE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border-2 border-white px-12 py-5 text-lg font-bold uppercase tracking-widest text-white transition hover:border-[#F2A0C6] hover:bg-[#F2A0C6] hover:text-[#1C2B45]">Participar do grupo</a><div id="download" className="mt-20 flex flex-wrap justify-center gap-8"><a href={CANDIDATE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3"><Download className="h-4 w-4 text-[#4FC3C9] transition group-hover:translate-y-1" /><span className="text-sm font-bold uppercase tracking-widest">Baixar adesivos</span></a><a href={CANDIDATE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3"><QrCode className="h-4 w-4 text-[#4FC3C9] transition group-hover:translate-y-1" /><span className="text-sm font-bold uppercase tracking-widest">Baixar santinho</span></a></div></div></section>

    <footer className="border-t border-[#334665] bg-[#1C2B45] px-6 py-14 font-hero sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 border-b border-[#334665] pb-10 md:flex-row md:items-start">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#4FC3C9]">Deputado Estadual · Espírito Santo</p>
            <p className="text-4xl font-black uppercase leading-[0.86] tracking-[-0.06em] text-white sm:text-5xl">Gubio<br /><span className="text-[#4FC3C9]">Heringer</span></p>
            <p className="mt-3 text-xl font-extrabold tracking-[-0.04em] text-[#4FC3C9]">{CANDIDATE_INFO.number}</p>
          </div>
          <div className="flex items-center gap-3 md:pt-2">
            <a href={CANDIDATE_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#4FC3C9] hover:bg-[#4FC3C9] hover:text-[#1C2B45]"><Instagram className="h-5 w-5" /></a>
            <a onClick={() => trackMetaLead('reference_footer_whatsapp')} href={CANDIDATE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#4FC3C9] hover:bg-[#4FC3C9] hover:text-[#1C2B45]"><MessageCircle className="h-5 w-5" /></a>
            <a href={CANDIDATE_INFO.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#4FC3C9] hover:bg-[#4FC3C9] hover:text-[#1C2B45]"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-sm leading-relaxed text-white/70 md:flex-row md:items-end md:justify-between">
          <p>Gubio Heringer — Candidato a Deputado Estadual pelo Espírito Santo.<br />Site mantido pela equipe de comunicação da campanha.</p>
          <div className="text-left text-xs font-semibold uppercase tracking-[0.08em] text-white/55 md:text-right">
            <p>CNPJ da campanha: {CANDIDATE_INFO.cnpj}</p>
            <p>© Copyright 2026 — Gubio Heringer</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
