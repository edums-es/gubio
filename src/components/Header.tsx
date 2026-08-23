import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Heart, Vote, Sparkles } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/campaignData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem é Gubio', href: '#quem-e-gubio' },
    { name: 'Propostas', href: '#propostas' },
    { name: 'Simulador de Urna', href: '#simulador' },
    { name: 'Santinho Digital', href: '#santinho' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Espaço do Eleitor', href: '#espaco-eleitor' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1C2B45]/95 backdrop-blur-md shadow-lg shadow-black/20 py-2.5'
          : 'bg-gradient-to-b from-[#1C2B45]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Candidate badge */}
          <a
            id="header-logo-link"
            href="#"
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-heading group-hover:text-[#4FC3C9] transition-colors">
                  GUBIO HERINGER
                </span>
                <span className="bg-gradient-to-r from-[#1E9BD7] to-[#4FC3C9] text-white font-extrabold text-sm sm:text-base px-2.5 py-0.5 rounded-md shadow-sm">
                  36181
                </span>
              </div>
              <span className="text-xs sm:text-xs text-[#F2A0C6] font-semibold tracking-wider uppercase">
                O Homem do Povo • Dep. Estadual ES
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-[#4FC3C9] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-santinho-btn"
              href="#santinho"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F2A0C6]" />
              Gerar Santinho
            </a>

            <a
              id="header-whatsapp-btn"
              href={CANDIDATE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm text-white bg-[#1E9BD7] hover:bg-[#1580b3] shadow-md shadow-[#1E9BD7]/30 transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-white fill-current" />
              WhatsApp Oficial
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              id="header-mobile-simulador-btn"
              href="#simulador"
              className="p-2 rounded-lg bg-[#1E9BD7]/20 text-[#4FC3C9] border border-[#4FC3C9]/30 text-xs font-bold flex items-center gap-1"
            >
              <Vote className="w-4 h-4" />
              <span>36181</span>
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#1C2B45] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-white hover:bg-white/10 hover:text-[#4FC3C9] transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#4FC3C9] to-[#1E9BD7] text-[#1C2B45]"
            >
              <Vote className="w-4 h-4" />
              Treinar Voto no Simulador 36181
            </a>
            <a
              href={CANDIDATE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-sm bg-[#1E9BD7] text-white"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp da Campanha
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
