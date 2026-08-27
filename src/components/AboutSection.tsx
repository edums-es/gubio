import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CampaignImages } from '../assets/images';

export const AboutSection: React.FC = () => (
  <section id="quem-e-gubio" className="bg-[#071b35] px-5 py-24 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-16 text-center font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl">Quem é Gubio Heringer?</h2>

      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#173f69] to-[#0e294a] shadow-2xl">
          <div className="absolute -inset-6 bg-[#50cfd3]/20 opacity-0 blur-3xl transition group-hover:opacity-100" />
          <img src={CampaignImages.communityPhoto} alt="Gubio Heringer em retrato oficial" className="relative h-[440px] w-full object-contain object-bottom transition duration-500 group-hover:scale-[1.02] sm:h-[520px]" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#50cfd3]">Biografia</p>
          <h3 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-tight sm:text-4xl">Raízes na terra, visão para o futuro</h3>
          <p className="mt-6 text-lg leading-relaxed text-white/65">
            Nascido e criado com os valores da simplicidade, fé e trabalho duro, Gubio Heringer construiu sua trajetória caminhando ao lado da população capixaba e conhecendo de perto os desafios de quem precisa de oportunidade.
          </p>
          <a href="#propostas" className="mt-7 inline-flex items-center gap-2 border-b-2 border-[#50cfd3] pb-1 text-sm font-bold uppercase tracking-widest text-white transition hover:text-[#50cfd3]">Conhecer as propostas <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>

      <div className="mt-24 grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="md:order-2 group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#1d3e6a] to-[#17234d] shadow-2xl">
          <div className="absolute -inset-6 bg-[#ed8fba]/20 opacity-0 blur-3xl transition group-hover:opacity-100" />
          <img src={CampaignImages.esLandscape} alt="Gubio Heringer em retrato oficial" className="relative h-[440px] w-full object-contain object-bottom transition duration-500 group-hover:scale-[1.02] sm:h-[520px]" />
        </div>
        <div className="md:order-1">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed8fba]">Compromisso</p>
          <h3 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-tight sm:text-4xl">Compromisso com quem trabalha</h3>
          <p className="mt-6 text-lg leading-relaxed text-white/65">
            Da roça ao plenário, a luta é a mesma: garantir que a voz do povo seja ouvida. A campanha defende saúde pública, educação e desenvolvimento regional com diálogo constante com cada comunidade.
          </p>
          <a href="#voluntario" className="mt-7 inline-flex items-center gap-2 border-b-2 border-[#ed8fba] pb-1 text-sm font-bold uppercase tracking-widest text-white transition hover:text-[#ed8fba]">Apoie a campanha <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
  </section>
);
