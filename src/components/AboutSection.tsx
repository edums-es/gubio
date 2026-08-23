import React from 'react';
import { Heart, Users, Shield, Target, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/campaignData';
import { CampaignImages } from '../assets/images';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: 'Proximidade Real',
      desc: 'Um mandato com as portas abertas. Presente nas ruas, feiras, hospitais e comunidades, ouvindo as pessoas olho no olho.',
    },
    {
      icon: Shield,
      title: 'Honestidade & Ficha Limpa',
      desc: 'Compromisso inegociável com a ética e a transparência total no uso de cada centavo do dinheiro público capixaba.',
    },
    {
      icon: Heart,
      title: 'Coração no Povo',
      desc: 'Sensibilidade para entender a dor de quem espera na fila do SUS e de quem precisa de oportunidade para trabalhar.',
    },
    {
      icon: Target,
      title: 'Ação & Resultado',
      desc: 'Menos discurso e mais projetos concretos para destravar obras, criar escolas técnicas e gerar empregos.',
    },
  ];

  return (
    <section id="quem-e-gubio" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E9BD7]/10 text-[#1E9BD7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Biografia & Trajetória
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2B45] font-heading tracking-tight">
            Quem é <span className="text-[#1E9BD7]">Gubio Heringer</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Uma vida dedicada ao trabalho, à família e à escuta sincera do povo capixaba. 
            Conheça o homem que quer ser a sua voz mais forte na Assembleia Legislativa do Espírito Santo.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photos Collage */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative">
              {/* Main Community Photo */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 aspect-[16/10] relative group">
                <img
                  src={CampaignImages.communityPhoto}
                  alt="Gubio Heringer conversando com trabalhadores e famílias capixabas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="bg-[#1E9BD7] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Presença nos Bairros
                  </span>
                  <p className="text-sm sm:text-base font-semibold mt-1 drop-shadow">
                    &ldquo;A política só tem sentido quando melhora a vida de quem mais precisa.&rdquo;
                  </p>
                </div>
              </div>

              {/* Inset ES Landscape Photo */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-100">
                <img
                  src={CampaignImages.esLandscape}
                  alt="Belezas do Espírito Santo - Convento da Penha e Baía de Vitória"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded px-2 py-0.5 text-[10px] text-white text-center font-medium">
                  Do Litoral ao Interior do ES
                </div>
              </div>
            </div>

            {/* Quote Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1C2B45] to-[#1E9BD7] text-white shadow-lg mt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#F2A0C6]" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#8FE3E6]">
                    Compromisso de Mandato Participativo
                  </h4>
                  <p className="text-sm text-slate-200 mt-1">
                    Gubio assume o compromisso de manter gabinetes itinerantes pelos 78 municípios capixabas para prestar contas a cada 90 dias.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose text-slate-700 space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                Nascido e criado com os valores da simplicidade, fé e trabalho duro, 
                <strong className="text-[#1C2B45]"> Gubio Heringer</strong> construiu sua trajetória 
                caminhando ao lado da população capixaba, conhecendo de perto as dificuldades 
                enfrentadas por quem depende do transporte coletivo, das unidades de saúde e de 
                uma vaga de emprego com salário justo.
              </p>
              <p>
                Apelidado carinhosamente de <span className="text-[#1E9BD7] font-bold">&ldquo;O Homem do Povo&rdquo;</span>, 
                Gubio nunca se acomodou diante das injustiças. Sua atuação comunitária é marcada pela 
                defesa incansável de quem não tem padrinho político e precisa de representatividade 
                autêntica na Assembleia Legislativa.
              </p>
            </div>

            {/* Checklist of Commitments */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 space-y-3.5">
              <h3 className="font-bold text-[#1C2B45] text-base">
                Pilares Fundamentais do Nosso Mandato:
              </h3>
              <ul className="space-y-2.5">
                {[
                  'Gabinete de portas abertas para a população de todos os 78 municípios.',
                  'Fiscalização rigorosa dos gastos públicos e combate a privilégios.',
                  'Destinação de emendas parlamentares 100% prioritárias para Saúde e Educação.',
                  'Canal direto de WhatsApp para denúncias, ideias e pedidos da comunidade.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#1E9BD7] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#propostas"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#1C2B45] hover:bg-[#1E9BD7] transition-colors shadow-md"
              >
                Conhecer Nossas Propostas
              </a>
              <a
                href={CANDIDATE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-[#1E9BD7] bg-[#1E9BD7]/10 hover:bg-[#1E9BD7]/20 transition-colors"
              >
                Falar com a Equipe
              </a>
            </div>

          </div>

        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md hover:border-[#1E9BD7]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E9BD7]/15 to-[#4FC3C9]/20 text-[#1E9BD7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1C2B45] font-heading mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
