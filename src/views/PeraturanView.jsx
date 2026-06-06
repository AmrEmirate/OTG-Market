import React, { useState } from 'react';
import LinkCard from '../components/LinkCard';
import PeraturanNyicilModal from '../components/modals/PeraturanNyicilModal';
import PeraturanCariModal from '../components/modals/PeraturanCariModal';
import PeraturanFFModal from '../components/modals/PeraturanFFModal';
import PeraturanMLModal from '../components/modals/PeraturanMLModal';

const PeraturanView = () => {
  const [isPeraturanNyicilOpen, setIsPeraturanNyicilOpen] = useState(false);
  const [isPeraturanCariOpen, setIsPeraturanCariOpen] = useState(false);
  const [isPeraturanFFOpen, setIsPeraturanFFOpen] = useState(false);
  const [isPeraturanMLOpen, setIsPeraturanMLOpen] = useState(false);

  return (
    <section className="w-full flex flex-col gap-4 animate-fade-in text-center mt-0">
      <div className="flex items-center gap-4 mb-2">
        <div className="h-[1px] flex-grow bg-white/20"></div>
        <h3 className="font-headline-sm text-headline-sm text-white/80 font-semibold text-center tracking-wider uppercase">
          Peraturan
        </h3>
        <div className="h-[1px] flex-grow bg-white/20"></div>
      </div>

      <LinkCard title="1. Syarat Untuk Nyicil" onClick={() => setIsPeraturanNyicilOpen(true)} />
      <LinkCard title="2. Tata Cara Pencarian Akun" onClick={() => setIsPeraturanCariOpen(true)} />
      <LinkCard title="3. Rules FF FT / Isian" onClick={() => setIsPeraturanFFOpen(true)} />
      <LinkCard title="4. Rules ML Turnamen" onClick={() => setIsPeraturanMLOpen(true)} />

      <PeraturanNyicilModal isOpen={isPeraturanNyicilOpen} onClose={() => setIsPeraturanNyicilOpen(false)} />
      <PeraturanCariModal isOpen={isPeraturanCariOpen} onClose={() => setIsPeraturanCariOpen(false)} />
      <PeraturanFFModal isOpen={isPeraturanFFOpen} onClose={() => setIsPeraturanFFOpen(false)} />
      <PeraturanMLModal isOpen={isPeraturanMLOpen} onClose={() => setIsPeraturanMLOpen(false)} />
    </section>
  );
};

export default PeraturanView;
