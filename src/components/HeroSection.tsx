import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/campaignData';
import { CampaignImages } from '../assets/images';
import { trackMetaLead } from '../utils/metaPixel';

export const HeroSection: React.FC = () => (
  <section id="hero-section" className="relative isolate overflow-hidden bg-[#071b35] pt-28">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(79,195,201,0.3),transparent_26%),linear-gradient(120deg,#071b35_0%,#0d294a_64%,#155f83_140%)]" />
    <div className="absolute -left-32 bottom-[-11rem] h-96 w-96 rounded-full border border-[#50cfd3]/20" />
    <div className="absolute right-[43%] top-28 h-24 w-px bg-gradient-to-b from-transparent via-[#50cfd3]/50 to-transparent" />

    <div className="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-10 px-5 pb-12 sm:px-8 md:min-h-[750px] lg:grid-cols-12 lg:px-10 lg:pb-0">
      <div className="z-10 lg:col-span-7 lg:pb-8">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#8fe3e6] sm:text-sm">Deputado Estadual · Espírito Santo</p>
        <h1 className="font-heading text-6xl font-black uppercase leading-[0.84] tracking-tighter sm:text-7xl md:text-8xl xl:text-9xl">
          <span className="block">Gubio</span>
          <span className="block text-[#50cfd3]">Heringer</span>
        </h1>
        <p className="mt-6 font-heading text-5xl font-black tracking-tighter text-[#ed8fba] sm:text-6xl">{CANDIDATE_INFO.number}</p>

        <div className="mt-9 max-w-md rounded-[2rem_2rem_2rem_0.5rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-7">
          <h2 className="font-heading text-2xl font-extrabold uppercase leading-tight">O Homem do Povo</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">Uma voz presente para as pessoas, os bairros e os municípios capixabas.</p>
          <a href="#voluntario" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#50cfd3] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wide text-[#071b35] transition hover:bg-[#8fe3e6]">
            Quero apoiar a mudança <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        <a onClick={() => trackMetaLead('hero_whatsapp')} href={CANDIDATE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white/75 transition hover:text-[#50cfd3]">
          <MessageCircle className="h-4 w-4" /> Fale com a campanha
        </a>
      </div>

      <div className="relative self-end lg:col-span-5">
        <div className="relative mx-auto max-w-md overflow-hidden rounded-t-[3rem] border-x border-t border-white/20 bg-white shadow-2xl shadow-black/30 lg:ml-auto lg:mr-0">
          <img src={CampaignImages.heroPortrait} alt="Gubio Heringer, candidato a Deputado Estadual pelo Espírito Santo" className="h-[510px] w-full object-cover object-top sm:h-[590px] lg:h-[650px]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071b35]/75 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-2xl border border-white/15 bg-[#071b35]/80 p-4 backdrop-blur-md">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#50cfd3]">Gubio Heringer</p><p className="mt-1 text-sm font-bold text-white">O Espírito Santo em primeiro lugar.</p></div>
            <span className="font-heading text-2xl font-black text-[#ed8fba]">36181</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
