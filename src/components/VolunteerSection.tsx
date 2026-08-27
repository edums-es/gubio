import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/campaignData';
import { trackMetaLead } from '../utils/metaPixel';

export const VolunteerSection: React.FC = () => (
  <section id="voluntario" className="relative overflow-hidden bg-[#071b35] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
    <div className="absolute inset-0 bg-gradient-to-br from-[#4fc3c9]/20 via-transparent to-[#f2a0c6]/20" />
    <div className="relative mx-auto max-w-4xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#50cfd3]">Apoie a campanha</p>
      <h2 className="mt-4 font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">Bora pro Zap<br />do Gubio</h2>
      <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">Faça parte desse movimento e ajude a levar as propostas para ainda mais pessoas. Juntos, somos mais fortes.</p>
      <a onClick={() => trackMetaLead('volunteer_whatsapp')} href={CANDIDATE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-11 inline-flex items-center gap-3 rounded-full border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:border-[#ed8fba] hover:bg-[#ed8fba] hover:text-[#071b35] sm:px-12 sm:py-5">
        <MessageCircle className="h-5 w-5" /> Participar do grupo
      </a>
    </div>
  </section>
);
