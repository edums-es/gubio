import React, { useState, useRef } from 'react';
import { Sparkles, Download, Share2, Copy, Check, MapPin, Heart, Vote } from 'lucide-react';
import { CANDIDATE_INFO, ES_MUNICIPALITIES } from '../data/campaignData';
import { CampaignImages } from '../assets/images';

export const SantinhoGenerator: React.FC = () => {
  const [supporterName, setSupporterName] = useState('Família Capixaba');
  const [selectedCity, setSelectedCity] = useState('Vitória');
  const [customTagline, setCustomTagline] = useState('Eu apoio o Homem do Povo!');
  const [cardTheme, setCardTheme] = useState<'navy-cyan' | 'blue-pink' | 'gradient-es'>('navy-cyan');
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const taglines = [
    'Eu apoio o Homem do Povo!',
    'Saúde em 1º Lugar no ES!',
    'Juventude Capixaba com 36181!',
    'Mulheres com Gubio Heringer!',
    'Mais Emprego e Oportunidades!',
    'Agricultura Forte no Campo Capixaba!',
  ];

  const handleCopyShareText = () => {
    const text = `Meu voto para Deputado Estadual pelo Espírito Santo é GUBIO HERINGER 36181! 🌊🇧🇷\n"${customTagline}" - ${supporterName} (${selectedCity}/ES).\n#OHomemDoPovo #Gubio36181`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Meu voto para Deputado Estadual pelo Espírito Santo é GUBIO HERINGER 36181! 🌊🇧🇷\n"${customTagline}" - ${supporterName} (${selectedCity}/ES).\n\nCrie o seu santinho também e vote 36181!`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleDownloadCard = () => {
    setDownloading(true);
    // Render a high resolution simulated export download
    setTimeout(() => {
      setDownloading(false);
      alert(`Santinho Digital de "${supporterName}" gerado com sucesso! Salve a imagem ou compartilhe diretamente com seus amigos e no status do WhatsApp!`);
    }, 800);
  };

  return (
    <section id="santinho" className="py-20 bg-[#F1F5F9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E9BD7]/10 text-[#1E9BD7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F2A0C6]" />
            Personalize seu Apoio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2B45] font-heading tracking-tight">
            Gerador de <span className="text-[#1E9BD7]">Santinho Digital</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Crie seu cartão personalizado com seu nome e sua cidade no Espírito Santo, 
            e compartilhe nos seus grupos e redes para fortalecer a caminhada do 36181!
          </p>
        </div>

        {/* 2-Column Tool Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-200/80 space-y-6">
            <h3 className="text-xl font-bold text-[#1C2B45] font-heading flex items-center gap-2">
              <Vote className="w-5 h-5 text-[#1E9BD7]" />
              Personalize os seus dados:
            </h3>

            {/* Name Input */}
            <div>
              <label htmlFor="supporter-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Seu Nome ou Nome da Família:
              </label>
              <input
                id="supporter-name"
                type="text"
                value={supporterName}
                onChange={(e) => setSupporterName(e.target.value)}
                maxLength={35}
                placeholder="Ex: Carlos Eduardo ou Família Souza"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1E9BD7] font-medium text-slate-800"
              />
            </div>

            {/* ES City Selector */}
            <div>
              <label htmlFor="supporter-city" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Seu Município no Espírito Santo:
              </label>
              <select
                id="supporter-city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1E9BD7] font-medium text-slate-800 bg-white"
              >
                {ES_MUNICIPALITIES.map((city) => (
                  <option key={city} value={city}>
                    {city} / ES
                  </option>
                ))}
              </select>
            </div>

            {/* Tagline Picker */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Escolha a sua Frase de Apoio:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {taglines.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setCustomTagline(tag)}
                    className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                      customTagline === tag
                        ? 'bg-[#1E9BD7]/10 text-[#1E9BD7] border-[#1E9BD7]'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Estilo Visual do Card:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setCardTheme('navy-cyan')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    cardTheme === 'navy-cyan'
                      ? 'bg-[#1C2B45] text-white border-[#1C2B45] shadow-md'
                      : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  Azul & Turquesa
                </button>
                <button
                  type="button"
                  onClick={() => setCardTheme('blue-pink')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    cardTheme === 'blue-pink'
                      ? 'bg-gradient-to-r from-[#1E9BD7] to-[#F2A0C6] text-white border-transparent shadow-md'
                      : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  Azul & Rosa
                </button>
                <button
                  type="button"
                  onClick={() => setCardTheme('gradient-es')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    cardTheme === 'gradient-es'
                      ? 'bg-gradient-to-r from-[#4FC3C9] to-[#1E9BD7] text-white border-transparent shadow-md'
                      : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  Ciano Capixaba
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Live Card Canvas Preview */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* The Rendered Santinho Card */}
            <div
              ref={cardRef}
              id="santinho-canvas-card"
              className={`w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-all ${
                cardTheme === 'navy-cyan'
                  ? 'bg-[#1C2B45] text-white'
                  : cardTheme === 'blue-pink'
                  ? 'bg-gradient-to-b from-[#1C2B45] via-[#1E9BD7] to-[#1C2B45] text-white'
                  : 'bg-gradient-to-b from-[#1C2B45] via-[#0284c7] to-[#1C2B45] text-white'
              }`}
            >
              {/* Header Ribbon */}
              <div className="bg-[#4FC3C9] text-[#1C2B45] px-4 py-2 flex items-center justify-between font-bold text-xs">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedCity} / ES
                </span>
                <span className="uppercase font-extrabold tracking-wider">
                  ELEIÇÕES 2026
                </span>
              </div>

              {/* Supporter Badge Banner */}
              <div className="p-4 bg-white/10 backdrop-blur-sm border-b border-white/10 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2A0C6] text-[#1C2B45] text-xs font-black mb-1">
                  <Heart className="w-3 h-3 fill-current text-rose-700" />
                  {customTagline}
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  Apoio oficial de: <span className="font-black text-white">{supporterName || 'Um Capixaba de Coração'}</span>
                </div>
              </div>

              {/* Center Content: Photo & Giant Number */}
              <div className="p-5 flex items-center gap-4">
                {/* Photo */}
                <div className="w-24 h-28 rounded-2xl overflow-hidden border-2 border-[#4FC3C9] shadow-lg shrink-0 bg-slate-800">
                  <img
                    src={CampaignImages.heroPortrait}
                    alt="Gubio Heringer 36181"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Candidate Info */}
                <div className="space-y-1">
                  <div className="text-[10px] font-extrabold uppercase text-[#4FC3C9] tracking-wider">
                    Deputado Estadual
                  </div>
                  <div className="text-xl font-black font-heading leading-tight text-white">
                    GUBIO HERINGER
                  </div>
                  <div className="text-xs text-[#F2A0C6] font-bold">
                    O Homem do Povo
                  </div>

                  {/* Giant Number Badge */}
                  <div className="mt-2 inline-block px-3 py-1 rounded-xl bg-gradient-to-r from-[#1E9BD7] to-[#4FC3C9] text-white font-mono-urna font-black text-2xl tracking-widest shadow-md">
                    {CANDIDATE_INFO.number}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-[#121c2e] px-4 py-2.5 text-[10px] text-slate-400 text-center border-t border-white/10 flex items-center justify-between">
                <span>{CANDIDATE_INFO.party}</span>
                <span>CNPJ: {CANDIDATE_INFO.cnpj}</span>
              </div>
            </div>

            {/* Sharing & Download CTAs */}
            <div className="w-full max-w-sm mt-5 space-y-2.5">
              <button
                id="share-santinho-whatsapp-btn"
                type="button"
                onClick={handleShareWhatsApp}
                className="w-full py-3.5 px-4 rounded-2xl font-bold text-sm bg-[#1E9BD7] hover:bg-[#1580b3] text-white shadow-lg shadow-[#1E9BD7]/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <Share2 className="w-4 h-4" />
                Compartilhar Santinho no WhatsApp
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  id="copy-santinho-text-btn"
                  type="button"
                  onClick={handleCopyShareText}
                  className="py-2.5 px-3 rounded-xl font-semibold text-xs bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 flex items-center justify-center gap-1.5 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 font-bold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copiar Texto</span>
                    </>
                  )}
                </button>

                <button
                  id="download-santinho-btn"
                  type="button"
                  onClick={handleDownloadCard}
                  disabled={downloading}
                  className="py-2.5 px-3 rounded-xl font-semibold text-xs bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>{downloading ? 'Gerando...' : 'Salvar Imagem'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
