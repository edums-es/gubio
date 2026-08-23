import React from 'react';
import { Quote, MapPin, Heart, Star, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/campaignData';
import { CampaignImages } from '../assets/images';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E9BD7]/10 text-[#1E9BD7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-[#F2A0C6]" />
            Apoio Popular
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2B45] font-heading tracking-tight">
            Vozes de Quem Confia no <span className="text-[#1E9BD7]">36181</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Veja o que dizem trabalhadores, mães de família, lideranças comunitárias 
            e jovens de várias cidades do Espírito Santo.
          </p>
        </div>

        {/* Rally Photo Banner */}
        <div className="max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative aspect-[21/9] bg-slate-900">
          <img
            src={CampaignImages.rallyPhoto}
            alt="Caminhada e apoio popular à campanha de Gubio Heringer no Espírito Santo"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white space-y-1">
              <span className="bg-[#4FC3C9] text-[#1C2B45] font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider">
                União pelo Espírito Santo
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading drop-shadow">
                Onda Azul e Rosa crescendo em todo o estado!
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 drop-shadow">
                A força de quem quer mudança de verdade com trabalho, honestidade e respeito.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#1E9BD7]/20" />
                </div>

                <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[#1C2B45] font-heading">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {t.role}
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1E9BD7]">
                    <MapPin className="w-3.5 h-3.5" />
                    {t.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
