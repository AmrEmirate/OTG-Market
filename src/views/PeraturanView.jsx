import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LinkCard from '../components/LinkCard';
import PeraturanNyicilModal from '../components/modals/PeraturanNyicilModal';
import PeraturanCariModal from '../components/modals/PeraturanCariModal';
import PeraturanFFModal from '../components/modals/PeraturanFFModal';
import PeraturanMLModal from '../components/modals/PeraturanMLModal';

const PeraturanView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = decodeURIComponent(location.pathname).toLowerCase();

  const isPeraturanNyicilOpen = path === '/peraturan/nyicil';
  const isPeraturanCariOpen = path === '/peraturan/cari';
  const isPeraturanFFOpen = path === '/peraturan/ff';
  const isPeraturanMLOpen = path === '/peraturan/ml';

  const handleClose = () => navigate('/peraturan');

  return (
    <section className="w-full flex flex-col gap-4 animate-fade-in text-center mt-0">
      <div className="flex items-center gap-4 mb-2">
        <div className="h-[1px] flex-grow bg-white/20"></div>
        <h3 className="font-headline-sm text-headline-sm text-white/80 font-semibold text-center tracking-wider uppercase">
          Peraturan
        </h3>
        <div className="h-[1px] flex-grow bg-white/20"></div>
      </div>

      <LinkCard title="Syarat Untuk Nyicil" onClick={() => navigate('/peraturan/nyicil')} />
      <LinkCard title="Tata Cara Pencarian Akun" onClick={() => navigate('/peraturan/cari')} />
      <LinkCard title="Rules FF FT / Isian" onClick={() => navigate('/peraturan/ff')} />
      <LinkCard title="Rules ML Turnamen" onClick={() => navigate('/peraturan/ml')} />

      <PeraturanNyicilModal isOpen={isPeraturanNyicilOpen} onClose={handleClose} />
      <PeraturanCariModal isOpen={isPeraturanCariOpen} onClose={handleClose} />
      <PeraturanFFModal isOpen={isPeraturanFFOpen} onClose={handleClose} />
      <PeraturanMLModal isOpen={isPeraturanMLOpen} onClose={handleClose} />
    </section>
  );
};

export default PeraturanView;
