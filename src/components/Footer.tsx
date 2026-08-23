import React from 'react';
import { Heart, MessageCircle, Instagram, Facebook, Youtube, Vote, ShieldCheck, ArrowUp } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/campaignData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#121c2e] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding & Social Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-black font-heading text-white">
                GUBIO HERINGER
              </span>
              <span className="bg-gradient-to-r from-[#1E9BD7] to-[#4FC3C9] text-white font-mono-urna font-black px-3 py-0.5 rounded-lg text-lg">
                36181
              </span>
            </div>
            <p className="text-[#F2A0C6] font-bold text-base">
              &ldquo;{CANDIDATE_INFO.slogan}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Candidato a Deputado Estadual pelo Espírito Santo. Trabalhando por mais saúde, emprego digno e segurança para todas as famílias capixabas.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CANDIDATE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1E9BD7] text-white flex items-center justify-center transition-colors"
                title="WhatsApp Oficial"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={CANDIDATE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F2A0C6] hover:text-[#1C2B45] text-white flex items-center justify-center transition-colors"
                title="Instagram Oficial"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CANDIDATE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1E9BD7] text-white flex items-center justify-center transition-colors"
                title="Facebook Oficial"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={CANDIDATE_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                title="YouTube Oficial"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#4FC3C9]">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#quem-e-gubio" className="hover:text-white transition-colors">
                  Biografia do Candidato
                </a>
              </li>
              <li>
                <a href="#propostas" className="hover:text-white transition-colors">
                  Plano de Propostas & Eixos
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simulador de Urna Eletrônica
                </a>
              </li>
              <li>
                <a href="#santinho" className="hover:text-white transition-colors">
                  Gerador de Santinho Virtual
                </a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-white transition-colors">
                  Agenda e Encontros no ES
                </a>
              </li>
              <li>
                <a href="#materiais" className="hover:text-white transition-colors">
                  Download de Adesivos e Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Electoral Disclosure Information */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#8FE3E6] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Informações Oficiais da Campanha
            </h4>
            <div className="text-xs text-slate-400 space-y-1.5 bg-white/5 p-4 rounded-2xl border border-white/10">
              <p><strong>Cargo:</strong> Deputado Estadual / ES</p>
              <p><strong>Número na Urna:</strong> 36181</p>
              <p><strong>Coligação:</strong> {CANDIDATE_INFO.party}</p>
              <p><strong>CNPJ da Campanha:</strong> {CANDIDATE_INFO.cnpj}</p>
              <p><strong>Estado:</strong> Espírito Santo (ES)</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Campanha Oficial Gubio Heringer 36181. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
