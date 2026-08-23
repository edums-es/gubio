import React from 'react';
import { MessageCircle, Vote, Sparkles } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/campaignData';

export const QuickFloatCTA: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Floating Santinho Generator Pill */}
      <a
        id="floating-santinho-btn"
        href="#santinho"
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1C2B45] text-white font-bold text-xs shadow-xl border border-white/20 hover:bg-[#253959] transition-all transform hover:scale-105"
      >
        <Sparkles className="w-4 h-4 text-[#F2A0C6]" />
        <span>Fazer Santinho 36181</span>
      </a>

      {/* Floating Direct WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={CANDIDATE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-2xl shadow-emerald-600/40 transition-all transform hover:scale-105 active:scale-95 group"
        aria-label="Falar no WhatsApp oficial do candidato"
      >
        <MessageCircle className="w-5 h-5 fill-current text-white group-hover:animate-wiggle" />
        <span className="hidden xs:inline sm:inline">WhatsApp Oficial</span>
      </a>
    </div>
  );
};
