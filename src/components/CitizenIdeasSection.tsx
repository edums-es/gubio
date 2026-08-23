import React, { useState } from 'react';
import { MessageSquarePlus, ThumbsUp, Send, MapPin, Sparkles, Check } from 'lucide-react';
import { CitizenSuggestion } from '../types';
import { ES_MUNICIPALITIES } from '../data/campaignData';

const INITIAL_SUGGESTIONS: CitizenSuggestion[] = [
  {
    id: 'sug-1',
    name: 'Patrícia Rocha',
    city: 'Serra',
    neighborhood: 'Jacaraípe',
    category: 'Saúde',
    message: 'Precisamos de um PA Infantil 24h na região de Jacaraípe para desafogar o Hospital Jayme Santos Neves. As mães sofrem muito com a demora.',
    date: 'Há 2 dias',
    likes: 42,
  },
  {
    id: 'sug-2',
    name: 'Jorge Menezes',
    city: 'Cariacica',
    neighborhood: 'Campo Grande',
    category: 'Emprego',
    message: 'Apoio total à proposta de crédito popular para microempreendedores. Meu pequeno comércio de calçados precisa desse fôlego no ES.',
    date: 'Há 3 dias',
    likes: 38,
  },
  {
    id: 'sug-3',
    name: 'Renata Alvarenga',
    city: 'Colatina',
    neighborhood: 'Centro',
    category: 'Educação',
    message: 'Mais cursos técnicos gratuitos voltados ao agronegócio e confecções aqui no Noroeste do estado para os jovens não precisarem sair de perto da família.',
    date: 'Ontem',
    likes: 29,
  },
];

export const CitizenIdeasSection: React.FC = () => {
  const [suggestions, setSuggestions] = useState<CitizenSuggestion[]>(INITIAL_SUGGESTIONS);
  const [name, setName] = useState('');
  const [city, setCity] = useState('Vitória');
  const [neighborhood, setNeighborhood] = useState('');
  const [category, setCategory] = useState('Saúde');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  const handleAddSuggestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const newSug: CitizenSuggestion = {
      id: `sug-${Date.now()}`,
      name,
      city,
      neighborhood: neighborhood || 'Centro',
      category,
      message,
      date: 'Agora mesmo',
      likes: 1,
    };

    setSuggestions([newSug, ...suggestions]);
    setName('');
    setNeighborhood('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleLike = (id: string) => {
    if (likedIds[id]) return;
    setLikedIds({ ...likedIds, [id]: true });
    setSuggestions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, likes: s.likes + 1 } : s))
    );
  };

  return (
    <section id="espaco-eleitor" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E9BD7]/10 text-[#1E9BD7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <MessageSquarePlus className="w-3.5 h-3.5" />
            Canal Direto com o Candidato
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2B45] font-heading tracking-tight">
            Voz do Povo <span className="text-[#1E9BD7]">Capixaba</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            O que o seu bairro e a sua cidade no Espírito Santo mais precisam? 
            Envie sua proposta direto para o plano de mandato de Gubio Heringer 36181.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Form: Submit Idea */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-200/80">
            <h3 className="text-xl font-bold text-[#1C2B45] font-heading mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#1E9BD7]" />
              Envie a Sua Sugestão:
            </h3>

            {submitted && (
              <div className="mb-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Sua proposta foi enviada com sucesso para a equipe de Gubio!</span>
              </div>
            )}

            <form onSubmit={handleAddSuggestion} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Ana Paula"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1E9BD7] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Município *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#1E9BD7] focus:outline-none"
                  >
                    {ES_MUNICIPALITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Bairro
                  </label>
                  <input
                    type="text"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder="Seu bairro"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1E9BD7] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tema da Sugestão
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#1E9BD7] focus:outline-none"
                >
                  <option value="Saúde">Saúde & Postos Médicos</option>
                  <option value="Educação">Educação & Escolas</option>
                  <option value="Emprego">Emprego & Renda</option>
                  <option value="Segurança">Segurança & Iluminação</option>
                  <option value="Infraestrutura">Asfalto & Drenagem</option>
                  <option value="Agricultura">Agricultura Familiar & Interior</option>
                  <option value="Outro">Outro Assunto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Qual é a sua ideia ou denúncia? *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva aqui o que precisa melhorar na sua rua, bairro ou comunidade..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1E9BD7] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-sm bg-[#1E9BD7] hover:bg-[#1580b3] text-white flex items-center justify-center gap-2 shadow-md shadow-[#1E9BD7]/30 transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                Publicar Ideia no Mural
              </button>
            </form>
          </div>

          {/* Right Column: Community Ideas Feed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-[#1C2B45]">
                Sugestões Recentes de Capixabas:
              </h4>
              <span className="text-xs text-slate-500 font-semibold">
                {suggestions.length} propostas enviadas
              </span>
            </div>

            <div className="space-y-3.5 max-h-[560px] overflow-y-auto pr-1">
              {suggestions.map((sug) => (
                <div
                  key={sug.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="font-bold text-sm text-[#1C2B45] flex items-center gap-2">
                        <span>{sug.name}</span>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#1E9BD7]/10 text-[#1E9BD7]">
                          {sug.category}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#4FC3C9]" />
                        <span>{sug.neighborhood}, {sug.city}/ES</span>
                        <span>•</span>
                        <span>{sug.date}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleLike(sug.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                        likedIds[sug.id]
                          ? 'bg-[#1E9BD7] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{sug.likes}</span>
                    </button>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    &ldquo;{sug.message}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
