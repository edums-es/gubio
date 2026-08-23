import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Vote, RefreshCw, Volume2, Sparkles, CheckCircle2, Share2 } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/campaignData';
import { CampaignImages } from '../assets/images';
import { playKeypadBeep, playUrnaConfirmationSound } from '../utils/audioUrna';

export const UrnaSimulator: React.FC = () => {
  const [digits, setDigits] = useState<string[]>([]);
  const [hasVoted, setHasVoted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const MAX_DIGITS = 5;
  const TARGET_NUMBER = CANDIDATE_INFO.number; // "36181"

  const currentNumberString = digits.join('');
  const isCandidateMatch = currentNumberString === TARGET_NUMBER;
  const isComplete = digits.length === MAX_DIGITS;

  const handleDigitPress = (num: string) => {
    if (hasVoted) return;
    if (digits.length < MAX_DIGITS) {
      if (soundEnabled) playKeypadBeep();
      setDigits((prev) => [...prev, num]);
    }
  };

  const handleCorrige = () => {
    if (soundEnabled) playKeypadBeep();
    setDigits([]);
    setHasVoted(false);
  };

  const handleBranco = () => {
    if (soundEnabled) playKeypadBeep();
    setDigits(['B', 'R', 'A', 'N', 'C']);
  };

  const handleConfirma = () => {
    if (digits.length === 0) return;

    if (soundEnabled) {
      playUrnaConfirmationSound();
    }

    setHasVoted(true);

    if (isCandidateMatch) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1E9BD7', '#4FC3C9', '#F2A0C6', '#FFFFFF', '#1C2B45'],
        });
      } catch {
        // Fallback
      }
    }
  };

  const handleAutoFill = () => {
    if (soundEnabled) playKeypadBeep();
    setDigits(['3', '6', '1', '8', '1']);
    setHasVoted(false);
  };

  const handleShareVote = () => {
    const text = encodeURIComponent(
      `Acabei de treinar meu voto no Simulador de Urna! Meu voto para Deputado Estadual pelo Espírito Santo é GUBIO HERINGER 36181! #OHomemDoPovo #36181`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="simulador" className="py-20 bg-gradient-to-b from-[#1C2B45] via-[#162238] to-[#1C2B45] text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E9BD7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4FC3C9]/15 border border-[#4FC3C9]/30 text-[#8FE3E6] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Vote className="w-4 h-4 text-[#4FC3C9]" />
            Simulador de Votação Interativo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight">
            Como Votar no <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3C9] to-[#8FE3E6]">36181</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Treine na urna eletrônica antes do dia da eleição! Digite o número <strong>36181</strong>, 
            veja a foto de Gubio Heringer aparecer na tela e aperte <strong>CONFIRMA</strong>.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleAutoFill}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-[#8FE3E6] border border-white/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F2A0C6]" />
              Preencher Automaticamente (36181)
            </button>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-300 transition-all"
            >
              <Volume2 className={`w-3.5 h-3.5 ${soundEnabled ? 'text-emerald-400' : 'text-slate-500'}`} />
              {soundEnabled ? 'Som da Urna Ativado' : 'Som Mudo'}
            </button>
          </div>
        </div>

        {/* Urna Realistic Terminal Housing */}
        <div className="max-w-4xl mx-auto bg-[#2A3B54] p-4 sm:p-8 rounded-[32px] border-4 border-[#3D5273] shadow-2xl shadow-black/50">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Screen Section (Left 7 cols on desktop) */}
            <div className="lg:col-span-7 bg-[#E2E8F0] text-[#1C2B45] rounded-2xl p-5 sm:p-6 shadow-inner border-2 border-[#CBD5E1] min-h-[340px] flex flex-col justify-between relative overflow-hidden font-mono-urna">
              
              {!hasVoted ? (
                <>
                  {/* Screen Header */}
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-slate-600 tracking-wider">
                      SEU VOTO PARA
                    </div>
                    <div className="text-sm sm:text-base font-extrabold uppercase text-[#1C2B45] tracking-wide mt-0.5">
                      DEPUTADO ESTADUAL
                    </div>
                  </div>

                  {/* Number Digit Boxes */}
                  <div className="my-4">
                    <div className="text-xs font-bold text-slate-600 mb-1">
                      Número:
                    </div>
                    <div className="flex items-center gap-2">
                      {[0, 1, 2, 3, 4].map((idx) => {
                        const char = digits[idx] || '';
                        const isCurrent = digits.length === idx;
                        return (
                          <div
                            key={idx}
                            className={`w-10 sm:w-12 h-14 sm:h-16 rounded-lg bg-white border-2 flex items-center justify-center text-2xl sm:text-3xl font-black shadow-sm ${
                              isCurrent
                                ? 'border-[#1E9BD7] animate-pulse bg-sky-50'
                                : 'border-slate-400'
                            }`}
                          >
                            {char}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Candidate Match Information Panel */}
                  {isCandidateMatch ? (
                    <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-xl border border-slate-300 flex items-center justify-between gap-4 animate-in fade-in">
                      <div className="space-y-1">
                        <div className="text-[10px] uppercase font-bold text-slate-500">
                          Nome:
                        </div>
                        <div className="text-sm sm:text-base font-black text-[#1C2B45]">
                          {CANDIDATE_INFO.name.toUpperCase()}
                        </div>
                        <div className="text-[11px] font-bold text-[#1E9BD7]">
                          &ldquo;{CANDIDATE_INFO.slogan}&rdquo;
                        </div>
                        <div className="text-[10px] text-slate-600">
                          {CANDIDATE_INFO.party}
                        </div>
                      </div>

                      {/* Photo Thumbnail */}
                      <div className="w-16 sm:w-20 aspect-[3/4] rounded-lg overflow-hidden border border-slate-300 shadow-sm shrink-0 bg-slate-200">
                        <img
                          src={CampaignImages.heroPortrait}
                          alt="Gubio Heringer"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  ) : isComplete ? (
                    <div className="p-3 bg-amber-100 border border-amber-300 rounded-xl text-xs text-amber-900 font-bold">
                      NÚMERO ERRADO / CANDIDATO NÃO ENCONTRADO. <br />
                      Aperte <span className="text-amber-800 underline">CORRIGE</span> e digite <strong>36181</strong>.
                    </div>
                  ) : (
                    <div className="text-xs text-slate-500 italic py-2">
                      Digite os 5 dígitos (36181) no teclado numérico ao lado.
                    </div>
                  )}

                  {/* Screen Footer Hints */}
                  <div className="text-[10px] sm:text-[11px] text-slate-500 border-t border-slate-300 pt-2 flex items-center justify-between">
                    <span>Aperte <strong>CONFIRMA</strong> para gravar</span>
                    <span>Aperte <strong>CORRIGE</strong> para reiniciar</span>
                  </div>
                </>
              ) : (
                /* FIM Confirmation Screen */
                <div className="my-auto text-center space-y-4 py-8 animate-in zoom-in-95">
                  <div className="inline-flex p-3 rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black text-[#1C2B45] tracking-widest">
                      FIM
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-emerald-700 mt-2">
                      Voto computado com sucesso para Gubio Heringer 36181!
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      Obrigado por apoiar o Homem do Povo pelo Espírito Santo.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleShareVote}
                      className="px-4 py-2 rounded-xl bg-[#1E9BD7] text-white text-xs font-bold flex items-center gap-1.5 shadow-md hover:bg-[#1580b3]"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      Compartilhar no WhatsApp
                    </button>
                    <button
                      onClick={handleCorrige}
                      className="px-4 py-2 rounded-xl bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-300"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Simular Novamente
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Keypad Section (Right 5 cols on desktop) */}
            <div className="lg:col-span-5 bg-[#1C2B45] p-5 sm:p-6 rounded-2xl border-2 border-[#2A3B54] shadow-xl flex flex-col justify-between">
              
              {/* Brand Header */}
              <div className="text-center pb-3 border-b border-white/10 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#4FC3C9]">
                  JUSTIÇA ELEITORAL DO ES
                </span>
              </div>

              {/* Number Buttons Grid */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((n) => (
                  <button
                    key={n}
                    id={`keypad-${n}`}
                    type="button"
                    onClick={() => handleDigitPress(n)}
                    className="h-12 sm:h-14 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] active:bg-[#334155] border-2 border-slate-700 text-white font-mono-urna font-black text-xl sm:text-2xl shadow-lg transition-transform active:scale-95 flex items-center justify-center"
                  >
                    {n}
                  </button>
                ))}
                
                {/* Empty filler / 0 */}
                <div />
                <button
                  id="keypad-0"
                  type="button"
                  onClick={() => handleDigitPress('0')}
                  className="h-12 sm:h-14 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] active:bg-[#334155] border-2 border-slate-700 text-white font-mono-urna font-black text-xl sm:text-2xl shadow-lg transition-transform active:scale-95 flex items-center justify-center"
                >
                  0
                </button>
                <div />
              </div>

              {/* Action Buttons: BRANCO, CORRIGE, CONFIRMA */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-white/10">
                <button
                  id="keypad-branco"
                  type="button"
                  onClick={handleBranco}
                  className="py-3 px-1 rounded-xl bg-white hover:bg-slate-100 text-[#1C2B45] font-black text-[11px] sm:text-xs uppercase shadow-md transition-all active:scale-95"
                >
                  BRANCO
                </button>

                <button
                  id="keypad-corrige"
                  type="button"
                  onClick={handleCorrige}
                  className="py-3 px-1 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-black text-[11px] sm:text-xs uppercase shadow-md transition-all active:scale-95"
                >
                  CORRIGE
                </button>

                <button
                  id="keypad-confirma"
                  type="button"
                  onClick={handleConfirma}
                  className="py-3 px-1 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-black text-[11px] sm:text-xs uppercase shadow-lg shadow-green-900/50 transition-all transform active:scale-95"
                >
                  CONFIRMA
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
