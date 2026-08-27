import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Car, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { CAMPAIGN_EVENTS, CANDIDATE_INFO } from '../data/campaignData';
import { CampaignImages } from '../assets/images';

export const AgendaSection: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('todos');

  const filteredEvents = filterType === 'todos'
    ? CAMPAIGN_EVENTS
    : CAMPAIGN_EVENTS.filter((e) => e.type === filterType);

  const handleConfirmPresence = (eventTitle: string, eventCity: string) => {
    const text = encodeURIComponent(
      `Olá! Gostaria de confirmar minha presença no evento: "${eventTitle}" em ${eventCity}/ES com Gubio Heringer 36181!`
    );
    window.open(`https://wa.me/5527997036181?text=${text}`, '_blank');
  };

  return (
    <section id="agenda" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E9BD7]/10 text-[#1E9BD7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Agenda & Encontros pelo ES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2B45] font-heading tracking-tight">
            Gubio no <span className="text-[#1E9BD7]">Seu Município</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Venha caminhar, debater e construir juntos o futuro do nosso estado. 
            Confira onde a Caravana do 36181 estará nos próximos dias.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: 'todos', label: 'Todos os Eventos' },
            { id: 'caminhada', label: 'Caminhadas do Povo' },
            { id: 'carreata', label: 'Carreatas 36181' },
            { id: 'plenaria', label: 'Plenárias & Debates' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterType(item.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                filterType === item.id
                  ? 'bg-[#1C2B45] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Event Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-[#1E9BD7]/10 text-[#1E9BD7]">
                    {event.type.toUpperCase()}
                  </span>
                  <span className="text-xs font-bold text-[#1C2B45] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#4FC3C9]" />
                    {event.city} / ES
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#1C2B45] mb-2">
                  {event.title}
                </h3>

                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  {event.description}
                </p>

                {/* Date, Time, Location details */}
                <div className="space-y-2 mb-6 bg-white p-3.5 rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 text-slate-800 font-bold">
                    <Calendar className="w-4 h-4 text-[#1E9BD7]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-[#4FC3C9]" />
                    <span>Horário: {event.time}h</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-[#F2A0C6] shrink-0 mt-0.5" />
                    <span>Local: {event.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleConfirmPresence(event.title, event.city)}
                className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#1E9BD7] hover:bg-[#1580b3] text-white flex items-center justify-center gap-2 shadow-md shadow-[#1E9BD7]/20 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                Confirmar Presença no WhatsApp
              </button>
            </div>
          ))}
        </div>

        {/* Organize Meeting Callout */}
        <div className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1C2B45] via-[#1E9BD7] to-[#4FC3C9] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-xl font-bold font-heading">
              Quer receber o Gubio no seu bairro ou comunidade?
            </h4>
            <p className="text-xs sm:text-sm text-slate-100 max-w-xl">
              Entre em contato com a equipe de agenda para marcarmos uma visita, café comunitário ou reunião com lideranças locais.
            </p>
          </div>
          <a
            href={CANDIDATE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-[#1C2B45] hover:bg-slate-100 shadow-lg shrink-0 transition-transform active:scale-95"
          >
            Solicitar Visita na Minha Cidade
          </a>
        </div>

      </div>
    </section>
  );
};
