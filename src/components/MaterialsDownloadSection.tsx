import React, { useState } from 'react';
import { Download, FileText, Image as ImageIcon, Smile, FileCheck, CheckCircle2 } from 'lucide-react';
import { DOWNLOAD_MATERIALS, CANDIDATE_INFO } from '../data/campaignData';

export const MaterialsDownloadSection: React.FC = () => {
  const [downloadedMap, setDownloadedMap] = useState<Record<string, boolean>>({});

  const handleDownload = (matId: string, title: string) => {
    setDownloadedMap((prev) => ({ ...prev, [matId]: true }));
    setTimeout(() => {
      alert(`Download iniciado: "${title}". Use e divulgue nas suas redes e com a sua família!`);
    }, 400);
  };

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'santinho':
        return ImageIcon;
      case 'adesivo':
        return FileText;
      case 'card':
        return Smile;
      default:
        return FileCheck;
    }
  };

  return (
    <section id="materiais" className="py-20 bg-[#F1F5F9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E9BD7]/10 text-[#1E9BD7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Download className="w-3.5 h-3.5" />
            Central de Downloads Oficiais
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C2B45] font-heading tracking-tight">
            Materiais de <span className="text-[#1E9BD7]">Campanha 36181</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Baixe gratuitamente as artes em alta resolução, adesivos oficiais, 
            pacote de figurinhas para WhatsApp e o caderno completo de propostas.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {DOWNLOAD_MATERIALS.map((mat) => {
            const Icon = getIcon(mat.category);
            const isDownloaded = downloadedMap[mat.id];

            return (
              <div
                key={mat.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-md"
                    style={{ backgroundColor: mat.previewColor }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 tracking-wider">
                    {mat.format} • {mat.fileSize}
                  </span>

                  <h3 className="text-base font-bold text-[#1C2B45] font-heading mt-3 mb-2 group-hover:text-[#1E9BD7] transition-colors">
                    {mat.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {mat.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleDownload(mat.id, mat.title)}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    isDownloaded
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-[#1C2B45] hover:bg-[#1E9BD7] text-white shadow-sm'
                  }`}
                >
                  {isDownloaded ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Baixado!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Baixar Grátis</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Graphic Printing Notice */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Artes padronizadas em conformidade com as diretrizes do Tribunal Superior Eleitoral (TSE).
          Tiragem e impressão autorizadas pela Coligação Renovação e Trabalho.
        </div>

      </div>
    </section>
  );
};
