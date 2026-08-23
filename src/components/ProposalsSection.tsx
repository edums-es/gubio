import React, { useState } from 'react';
import { 
  HeartPulse, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Truck, 
  Sprout, 
  CheckCircle, 
  Share2, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { PROPOSALS, CANDIDATE_INFO } from '../data/campaignData';
import { Proposal } from '../types';

export const ProposalsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeModalProposal, setActiveModalProposal] = useState<Proposal | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    HeartPulse,
    GraduationCap,
    Briefcase,
    ShieldCheck,
    Truck,
    Sprout,
  };

  const categories = [
    { id: 'todos', label: 'Todas as Propostas' },
    { id: 'saude', label: 'Saúde SUS' },
    { id: 'educacao', label: 'Educação & Juventude' },
    { id: 'emprego', label: 'Emprego & Negócios' },
    { id: 'seguranca', label: 'Segurança & Família' },
    { id: 'infraestrutura', label: 'Infraestrutura & Cidades' },
    { id: 'agricultura', label: 'Agricultura & Campo' },
  ];

  const filteredProposals = selectedCategory === 'todos'
    ? PROPOSALS
    : PROPOSALS.filter((p) => p.category === selectedCategory);

  const handleShareProposal = (proposal: Proposal) => {
    const text = encodeURIComponent(
      `Conheça a proposta de Gubio Heringer 36181 para a ${proposal.title}: ${proposal.shortDescription} \n\nVote 36181 para Deputado Estadual pelo Espírito Santo! #OHomemDoPovo`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="propostas" className="py-20 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4FC3C9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F2A0C6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E9BD7]/10 text-[#1E9BD7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Plano de Ação para o Espírito Santo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2B45] font-heading tracking-tight">
            Nossas Principais <span className="text-[#1E9BD7]">Bandeiras</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Propostas reais, viáveis e focadas em quem mais precisa. Conheça os 6 eixos estratégicos 
            que Gubio Heringer vai defender com garra na Assembleia Legislativa.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#1E9BD7] text-white shadow-md shadow-[#1E9BD7]/30 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProposals.map((proposal) => {
            const IconComponent = iconMap[proposal.iconName] || HeartPulse;

            return (
              <div
                key={proposal.id}
                id={`proposal-card-${proposal.id}`}
                className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-[#1E9BD7]/60 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Icon & Category */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center text-[#1E9BD7] group-hover:bg-[#1E9BD7] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#1E9BD7]/10 text-[#1E9BD7] tracking-wider">
                      {proposal.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-black text-[#1C2B45] font-heading mb-3 group-hover:text-[#1E9BD7] transition-colors">
                    {proposal.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {proposal.shortDescription}
                  </p>

                  {/* Impact Target Badge */}
                  <div className="mb-5 p-3 rounded-xl bg-gradient-to-r from-[#4FC3C9]/15 to-[#1E9BD7]/10 border border-[#4FC3C9]/30">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#1C2B45]">
                      <Sparkles className="w-4 h-4 text-[#1E9BD7] shrink-0" />
                      <span>{proposal.impactTarget}</span>
                    </div>
                  </div>

                  {/* Key Initiatives Bullet List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Principais Ações:
                    </span>
                    {proposal.keyInitiatives.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1E9BD7] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <button
                    id={`view-detail-${proposal.id}`}
                    onClick={() => setActiveModalProposal(proposal)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1C2B45] hover:text-[#1E9BD7] transition-colors"
                  >
                    <span>Ver Detalhes</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    id={`share-whatsapp-${proposal.id}`}
                    onClick={() => handleShareProposal(proposal)}
                    className="p-2 rounded-xl bg-white hover:bg-[#1E9BD7] text-slate-600 hover:text-white border border-slate-200 shadow-sm transition-all"
                    title="Compartilhar no WhatsApp"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Complete Plan Download Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#1C2B45] via-[#1C2B45] to-[#121c2e] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-black font-heading text-white">
              Quer ver o Caderno de Propostas Completo?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Baixe o documento com todos os projetos de lei, estudos de viabilidade orçamentária e cronograma para o Espírito Santo.
            </p>
          </div>
          <a
            href="#materiais"
            className="px-6 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-[#4FC3C9] to-[#8FE3E6] text-[#1C2B45] hover:opacity-95 shadow-lg shrink-0 transition-transform active:scale-95"
          >
            Baixar Plano em PDF (2.5 MB)
          </a>
        </div>

      </div>

      {/* Proposal Detail Modal */}
      {activeModalProposal && (
        <div
          id="proposal-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveModalProposal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#1E9BD7]/10 text-[#1E9BD7] uppercase tracking-wider">
                Eixo de Atuação: {activeModalProposal.category}
              </span>
              <button
                onClick={() => setActiveModalProposal(null)}
                className="text-slate-400 hover:text-slate-700 font-bold p-1 rounded-lg text-lg"
              >
                ✕
              </button>
            </div>

            <h3 className="text-2xl font-black text-[#1C2B45] font-heading mb-4">
              {activeModalProposal.title}
            </h3>

            <p className="text-slate-700 text-base leading-relaxed mb-6">
              {activeModalProposal.fullDescription}
            </p>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 mb-6 space-y-3">
              <h5 className="text-sm font-bold text-[#1C2B45] uppercase tracking-wider">
                Compromissos Específicos do Mandato:
              </h5>
              <div className="space-y-2.5">
                {activeModalProposal.keyInitiatives.map((init, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#1E9BD7] shrink-0 mt-0.5" />
                    <span>{init}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#4FC3C9]/15 border border-[#4FC3C9]/30 text-[#1C2B45] text-sm font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#1E9BD7] shrink-0" />
              <span>{activeModalProposal.impactTarget}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                onClick={() => handleShareProposal(activeModalProposal)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-sm bg-[#1E9BD7] text-white flex items-center justify-center gap-2 hover:bg-[#1580b3] transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Compartilhar Proposta no WhatsApp
              </button>
              <button
                onClick={() => setActiveModalProposal(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-sm bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
