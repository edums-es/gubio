import React, { useState } from 'react';
import { Music, Play, Pause, Volume2, Share2, Sparkles } from 'lucide-react';
import { JINGLE_LYRICS, CANDIDATE_INFO } from '../data/campaignData';

export const JinglePlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [singAlongOpen, setSingAlongOpen] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleShareJingle = () => {
    const text = encodeURIComponent(
      `Ouça o Jingle Oficial de Gubio Heringer 36181! "É Gubio Heringer, o Homem do Povo, pode confiar! Na urna é 36181 pra transformar!" 🎶 ES no coração!`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#1C2B45] to-[#121c2e] text-white relative overflow-hidden border-y border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Info & Controls */}
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2A0C6]/20 border border-[#F2A0C6]/40 text-[#F2A0C6] text-xs font-bold uppercase tracking-wider">
              <Music className="w-3.5 h-3.5" />
              Música Oficial da Campanha
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Jingle Oficial: <span className="text-[#4FC3C9]">&ldquo;O Homem do Povo&rdquo;</span>
            </h3>

            <p className="text-sm text-slate-300 max-w-md">
              A música que está contagiando o Espírito Santo de norte a sul! Cante junto, coloque no som do carro e espalhe a energia do 36181.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <button
                type="button"
                onClick={togglePlay}
                className="px-6 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#4FC3C9] to-[#8FE3E6] text-[#1C2B45] hover:opacity-90 flex items-center gap-2 shadow-lg shadow-[#4FC3C9]/30 transition-transform active:scale-95"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pausar Jingle</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Ouvir Jingle 36181</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setSingAlongOpen(!singAlongOpen)}
                className="px-4 py-3 rounded-full font-semibold text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-1.5 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F2A0C6]" />
                {singAlongOpen ? 'Esconder Letra' : 'Ver Letra Completa'}
              </button>

              <button
                type="button"
                onClick={handleShareJingle}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                title="Compartilhar Jingle no WhatsApp"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Audio Visualizer Bar animation & Slogan card */}
          <div className="w-full md:w-80 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1E9BD7] to-[#F2A0C6] mx-auto flex items-center justify-center shadow-lg">
              <Music className={`w-8 h-8 text-white ${isPlaying ? 'animate-bounce' : ''}`} />
            </div>

            <div>
              <div className="text-sm font-bold text-white">Gubio Heringer 36181</div>
              <div className="text-xs text-[#8FE3E6]">Jingle Promocional Oficial ES</div>
            </div>

            {/* Audio Wave Visualizer Bars */}
            <div className="flex items-center justify-center gap-1.5 h-8">
              {[40, 70, 90, 60, 100, 50, 85, 65, 45, 80, 95, 30].map((h, i) => (
                <div
                  key={i}
                  className={`w-1.5 bg-[#4FC3C9] rounded-full transition-all duration-300 ${
                    isPlaying ? 'animate-pulse' : 'opacity-40'
                  }`}
                  style={{ height: isPlaying ? `${h}%` : '20%' }}
                />
              ))}
            </div>

            <div className="text-[11px] text-slate-300 italic">
              {isPlaying ? '♪ Tocando no Espírito Santo...' : 'Clique para reproduzir'}
            </div>
          </div>

        </div>

        {/* Expandable Lyrics Box */}
        {singAlongOpen && (
          <div className="mt-8 p-6 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-md animate-in fade-in max-w-2xl mx-auto">
            <h4 className="text-sm font-bold text-[#F2A0C6] uppercase tracking-wider mb-3 text-center">
              Letra do Jingle Oficial:
            </h4>
            <pre className="text-xs sm:text-sm text-slate-200 font-sans whitespace-pre-line leading-relaxed text-center">
              {JINGLE_LYRICS}
            </pre>
          </div>
        )}

      </div>
    </section>
  );
};
