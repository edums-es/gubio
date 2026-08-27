import React, { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/campaignData';

const links = [
  { name: 'Início', href: '#hero-section' },
  { name: 'Biografia', href: '#quem-e-gubio' },
  { name: 'Propostas', href: '#propostas' },
  { name: 'Apoie', href: '#voluntario' },
];

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav className="mx-auto flex max-w-fit items-center rounded-full border border-white/15 bg-[#071b35]/85 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${index === 0 ? 'bg-[#ed8fba] text-[#071b35]' : 'text-white/85 hover:bg-white/10 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href={CANDIDATE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 hidden items-center gap-2 rounded-full bg-[#50cfd3] px-4 py-2 text-xs font-extrabold text-[#071b35] transition hover:bg-[#8fe3e6] sm:inline-flex"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          WhatsApp
        </a>

        <button onClick={() => setOpen(!open)} className="p-2 text-white sm:hidden" aria-label="Abrir navegação">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-xs rounded-3xl border border-white/15 bg-[#071b35]/95 p-3 shadow-2xl backdrop-blur-xl sm:hidden">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-white hover:bg-white/10">
              {link.name}
            </a>
          ))}
          <a href={CANDIDATE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#50cfd3] px-4 py-3 text-sm font-bold text-[#071b35]">
            <MessageCircle className="h-4 w-4" /> WhatsApp oficial
          </a>
        </div>
      )}
    </header>
  );
};
