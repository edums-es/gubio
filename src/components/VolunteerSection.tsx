import React, { useState } from 'react';
import { HeartHandshake, CheckCircle2, MessageCircle, Send, ShieldCheck, MapPin } from 'lucide-react';
import { CANDIDATE_INFO, ES_MUNICIPALITIES } from '../data/campaignData';

export const VolunteerSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Vitória',
    neighborhood: '',
    wantsStickerAtHome: true,
    isPollWatcher: false,
    isDigitalVolunteer: true,
    canHostMeeting: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Persist to local storage for realistic state
    try {
      const stored = JSON.parse(localStorage.getItem('gubio_volunteers') || '[]');
      stored.push({ ...formData, createdAt: new Date().toISOString() });
      localStorage.setItem('gubio_volunteers', JSON.stringify(stored));
    } catch {
      // Ignore
    }

    setSubmitted(true);
  };

  const handleWhatsAppDirectJoin = () => {
    const text = encodeURIComponent(
      `Olá! Me chamo ${formData.name}, moro em ${formData.city} (${formData.neighborhood || 'ES'}) e quero me juntar à Tropa do 36181 com Gubio Heringer!`
    );
    window.open(`https://wa.me/5527999993618?text=${text}`, '_blank');
  };

  return (
    <section id="voluntario" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1C2B45] via-[#1C2B45] to-[#16253d] rounded-[32px] p-6 sm:p-12 text-white shadow-2xl border border-white/10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Call to Action */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4FC3C9]/20 border border-[#4FC3C9]/40 text-[#8FE3E6] text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-[#F2A0C6]" />
                Junte-se à Nossa Tropa
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-heading text-white leading-tight">
                Faça Parte da <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3C9] to-[#8FE3E6]">
                  Tropa do 36181
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Nossa força não vem de grandes máquinas políticas, mas do coração e da disposição 
                de cada capixaba que quer ver a saúde funcionar, o emprego crescer e o Espírito Santo avançar.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#1E9BD7]/20 flex items-center justify-center text-[#4FC3C9] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span>Receba adesivos e material oficial em casa sem custo</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#1E9BD7]/20 flex items-center justify-center text-[#4FC3C9] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span>Participe do grupo VIP de WhatsApp por município</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-[#1E9BD7]/20 flex items-center justify-center text-[#4FC3C9] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span>Acesso direto à agenda e encontros com Gubio</span>
                </div>
              </div>
            </div>

            {/* Right Column: Registration Form */}
            <div className="lg:col-span-7 bg-white text-[#1C2B45] p-6 sm:p-8 rounded-2xl shadow-xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-[#1C2B45]">
                    Cadastro de Voluntário & Apoiador
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="volunteer-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Nome Completo *
                      </label>
                      <input
                        id="volunteer-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1E9BD7] text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="volunteer-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        WhatsApp / Celular *
                      </label>
                      <input
                        id="volunteer-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(27) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1E9BD7] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="volunteer-city" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Município do ES *
                      </label>
                      <select
                        id="volunteer-city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1E9BD7] text-sm bg-white"
                      >
                        {ES_MUNICIPALITIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="volunteer-neighborhood" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Bairro
                      </label>
                      <input
                        id="volunteer-neighborhood"
                        type="text"
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        placeholder="Ex: Jardim da Penha, Itapuã"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1E9BD7] text-sm"
                      />
                    </div>
                  </div>

                  {/* Checkbox Options */}
                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Como você gostaria de ajudar?
                    </span>

                    <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.wantsStickerAtHome}
                        onChange={(e) => setFormData({ ...formData, wantsStickerAtHome: e.target.checked })}
                        className="rounded text-[#1E9BD7] focus:ring-[#1E9BD7]"
                      />
                      <span>Quero receber adesivo para carro / casa no meu endereço</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isDigitalVolunteer}
                        onChange={(e) => setFormData({ ...formData, isDigitalVolunteer: e.target.checked })}
                        className="rounded text-[#1E9BD7] focus:ring-[#1E9BD7]"
                      />
                      <span>Quero ser voluntário digital (compartilhar materiais no WhatsApp/Instagram)</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isPollWatcher}
                        onChange={(e) => setFormData({ ...formData, isPollWatcher: e.target.checked })}
                        className="rounded text-[#1E9BD7] focus:ring-[#1E9BD7]"
                      />
                      <span>Quero ser fiscal de votação voluntário no dia da eleição</span>
                    </label>
                  </div>

                  <button
                    id="submit-volunteer-btn"
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#1E9BD7] hover:bg-[#1580b3] shadow-lg shadow-[#1E9BD7]/30 transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    Confirmar Meu Apoio ao 36181
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-[#1C2B45]">
                    Bem-vindo à Tropa, {formData.name}!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Seu cadastro foi registrado com sucesso. Nossa coordenação em <strong>{formData.city}</strong> entrará em contato em breve.
                  </p>

                  <div className="pt-2">
                    <button
                      id="volunteer-confirm-whatsapp-btn"
                      onClick={handleWhatsAppDirectJoin}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Entrar Direto no WhatsApp da Campanha
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
