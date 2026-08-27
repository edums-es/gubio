import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROPOSALS } from '../data/campaignData';
import { CampaignImages } from '../assets/images';

const focusAreas = [
  { proposal: PROPOSALS.find((item) => item.category === 'agricultura')!, image: CampaignImages.rallyPhoto, accent: 'from-[#071b35] via-[#071b35]/30 to-transparent' },
  { proposal: PROPOSALS.find((item) => item.category === 'saude')!, image: CampaignImages.communityPhoto, accent: 'from-[#071b35] via-[#071b35]/30 to-transparent' },
  { proposal: PROPOSALS.find((item) => item.category === 'infraestrutura')!, image: CampaignImages.esLandscape, accent: 'from-[#071b35] via-[#071b35]/30 to-transparent' },
];

export const ProposalsSection: React.FC = () => (
  <section id="propostas" className="bg-[#071b35] px-5 py-24 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#50cfd3]">Plano de ação</p>
      <h2 className="mt-4 text-center font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl">Nossas propostas</h2>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {focusAreas.map(({ proposal, image, accent }) => (
          <article key={proposal.id} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#102b46] shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={image} alt="" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0" />
              <div className={`absolute inset-0 bg-gradient-to-t ${accent}`} />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.17em] text-[#50cfd3]">{proposal.category}</p>
                <h3 className="font-heading text-2xl font-extrabold uppercase leading-tight">{proposal.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{proposal.shortDescription}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="#voluntario" className="inline-flex items-center gap-2 border-b-2 border-[#ed8fba] pb-1 text-sm font-bold uppercase tracking-widest text-white transition hover:text-[#ed8fba]">Quero apoiar estas propostas <ArrowRight className="h-4 w-4" /></a>
      </div>
    </div>
  </section>
);
