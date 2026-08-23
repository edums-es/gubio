import React, { useState } from 'react';
import { Vote, Check, Copy, Sparkles, MessageCircle, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/campaignData';
import { CampaignImages } from '../assets/images';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(CANDIDATE_INFO.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] pt-24 sm:pt-28 pb-16 bg-gradient-to-b from-[#1C2B45] via-[#1C2B45] to-[#121c2e] text-white overflow-hidden"
    >
      {/* Background Decorative Gradient Elements & Aura */}
      <div className="absolute top-0 right-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-br from-[#4FC3C9]/25 via-[#1E9BD7]/20 to-[#F2A0C6]/15 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#1E9BD7]/15 rounded-full blur-3xl pointer-events-none -ml-20" />
      
      {/* Subtle ES Flag / Map watermark outline overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#8FE3E6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Messaging & High Impact Numbers */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#4FC3C9]/40 backdrop-blur-md shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F2A0C6] animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4FC3C9] -ml-4" />
              <span className="text-xs sm:text-sm font-bold text-[#8FE3E6] uppercase tracking-wider">
                Eleições 2026 • Espírito Santo
              </span>
              <span className="hidden sm:inline text-white/50">•</span>
              <span className="hidden sm:inline text-xs text-white/90 font-medium">
                Deputado Estadual
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black font-heading tracking-tight leading-[1.08] text-white">
                GUBIO <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3C9] via-[#8FE3E6] to-[#1E9BD7]">
                  HERINGER
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F2A0C6] tracking-wide">
                &ldquo;{CANDIDATE_INFO.slogan}&rdquo;
              </p>
            </div>

            {/* Giant 36181 Number Box */}
            <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-[#1E9BD7] via-[#4FC3C9] to-[#F2A0C6] shadow-2xl shadow-[#1E9BD7]/30">
              <div className="bg-[#1C2B45] px-6 sm:px-8 py-3.5 sm:py-4 rounded-[22px] flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="text-center lg:text-left">
                  <span className="block text-xs uppercase font-bold text-slate-300 tracking-wider">
                    Vote no seu Deputado Estadual
                  </span>
                  <div className="flex items-center gap-1.5 justify-center lg:justify-start mt-0.5">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-mono-urna tracking-widest text-shadow">
                      {CANDIDATE_INFO.number}
                    </span>
                  </div>
                </div>

                <div className="h-10 w-px bg-white/20 hidden sm:block" />

                <button
                  id="copy-number-btn"
                  onClick={handleCopyNumber}
                  type="button"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 active:scale-95"
                  title="Copiar número de votação"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Copiado com sucesso!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#4FC3C9]" />
                      <span>Copiar Número</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* High Impact Lead Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              O Espírito Santo merece uma voz corajosa, leal e presente em cada bairro e município. 
              Gubio Heringer traz a força de quem vive a realidade do povo capixaba para transformar 
              a saúde, gerar empregos e defender a sua família.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                id="hero-simular-btn"
                href="#simulador"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-black text-base text-[#1C2B45] bg-gradient-to-r from-[#4FC3C9] to-[#8FE3E6] hover:from-[#8FE3E6] hover:to-[#4FC3C9] shadow-lg shadow-[#4FC3C9]/40 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <Vote className="w-5 h-5 text-[#1C2B45]" />
                Simular Voto 36181
              </a>

              <a
                id="hero-santinho-btn"
                href="#santinho"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-base text-white bg-[#1E9BD7] hover:bg-[#1984b8] shadow-lg shadow-[#1E9BD7]/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <Sparkles className="w-5 h-5 text-[#F2A0C6]" />
                Criar Meu Santinho Digital
              </a>

              <a
                id="hero-voluntario-btn"
                href="#voluntario"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl font-semibold text-sm text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
              >
                <HeartHandshake className="w-4 h-4 text-[#F2A0C6]" />
                Seja Voluntário
              </a>
            </div>

            {/* Trust Indicators / Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black text-white font-heading">78</div>
                <div className="text-xs text-slate-300">Municípios do ES</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black text-[#4FC3C9] font-heading">100%</div>
                <div className="text-xs text-slate-300">Ficha Limpa e Transparente</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black text-[#F2A0C6] font-heading">1º Lugar</div>
                <div className="text-xs text-slate-300">Defesa da Saúde do Povo</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Portrait Card with Modern Visual Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              
              {/* Glowing decorative frame background */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#1E9BD7] via-[#4FC3C9] to-[#F2A0C6] opacity-75 blur-lg glow-campaign" />

              {/* Main Candidate Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1C2B45] to-[#121c2e] border-2 border-white/20 shadow-2xl">
                
                {/* Candidate Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#1C2B45]">
                  <img
                    id="hero-candidate-photo"
                    src={CampaignImages.heroPortrait}
                    alt="Gubio Heringer 36181 - Candidato a Deputado Estadual pelo Espírito Santo"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient overlay at bottom of photo for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B45] via-[#1C2B45]/30 to-transparent" />

                  {/* Floating badge over photo */}
                  <div className="absolute top-4 left-4 bg-[#1C2B45]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#4FC3C9]" />
                    <span className="text-xs font-bold text-white">Espírito Santo no Coração</span>
                  </div>
                  
                  {/* Floating Number Pin */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#1E9BD7] to-[#4FC3C9] px-3.5 py-1 rounded-xl shadow-lg border border-white/30 text-white font-mono-urna font-black text-lg">
                    36181
                  </div>
                </div>

                {/* Card Caption Box */}
                <div className="p-5 sm:p-6 space-y-2 bg-[#1C2B45] border-t border-white/10 text-center">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-[#4FC3C9]">
                    Candidato a Deputado Estadual
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-heading text-white">
                    GUBIO HERINGER
                  </div>
                  <div className="inline-block px-4 py-1 rounded-full bg-[#F2A0C6]/20 border border-[#F2A0C6]/40 text-[#F2A0C6] text-xs sm:text-sm font-bold">
                    O Homem do Povo
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Hero Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none" />
    </section>
  );
};
