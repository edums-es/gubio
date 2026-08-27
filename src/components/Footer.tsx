import React from 'react';
import { ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/campaignData';
import { trackMetaLead } from '../utils/metaPixel';

const navItems = [
  { label: 'Início', href: '#hero-section' },
  { label: 'Biografia', href: '#quem-e-gubio' },
  { label: 'Propostas', href: '#propostas' },
  { label: 'Apoie', href: '#voluntario' },
];

export const Footer: React.FC = () => (
  <footer className="relative overflow-hidden bg-[#06162b] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#50cfd3] via-[#009fe3] to-[#ed8fba]" />
    <div className="mx-auto max-w-7xl">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b2340] shadow-2xl shadow-black/20">
        <div className="grid md:grid-cols-12">
          <div className="border-b border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(79,195,201,0.2),transparent_45%)] p-8 sm:p-10 md:col-span-5 md:border-b-0 md:border-r md:border-white/10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#50cfd3]">Deputado Estadual · ES</p>
            <h2 className="mt-5 font-heading text-5xl font-black uppercase leading-[0.8] tracking-tighter text-white sm:text-6xl">Gubio<br /><span className="text-[#50cfd3]">Heringer</span></h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">Trabalho de verdade para as pessoas, os bairros e cada município do Espírito Santo.</p>
            <p className="mt-7 font-heading text-3xl font-black text-[#ed8fba]">{CANDIDATE_INFO.number}</p>
          </div>

          <div className="grid gap-10 p-8 sm:p-10 md:col-span-7 md:grid-cols-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Navegação</h3>
              <nav className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
                {navItems.map((item) => <a key={item.label} href={item.href} className="text-sm font-bold text-white/85 transition hover:text-[#50cfd3]">{item.label}</a>)}
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Conecte-se com a campanha</h3>
              <a onClick={() => trackMetaLead('footer_whatsapp')} href={CANDIDATE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-between rounded-xl bg-[#50cfd3] px-5 py-4 font-heading text-base font-extrabold text-[#06162b] transition hover:bg-[#8fe3e6]">
                Falar no WhatsApp <ArrowUpRight className="h-5 w-5" />
              </a>
              <div className="mt-5 flex items-center gap-3">
                <a href={CANDIDATE_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-[#ed8fba] hover:bg-[#ed8fba] hover:text-[#06162b]" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                <a onClick={() => trackMetaLead('footer_whatsapp_icon')} href={CANDIDATE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-[#50cfd3] hover:bg-[#50cfd3] hover:text-[#06162b]" aria-label="WhatsApp"><MessageCircle className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 px-8 py-5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/40 sm:flex-row sm:px-10">
          <p>© 2026 Gubio Heringer · Todos os direitos reservados</p>
          <p>Número na urna: {CANDIDATE_INFO.number}</p>
        </div>
      </div>
    </div>
  </footer>
);
