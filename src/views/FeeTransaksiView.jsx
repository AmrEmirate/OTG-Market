import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { feeLinks } from '../data/links';
import LinkCard from '../components/LinkCard';
import RekberModal from '../components/modals/RekberModal';
import RebinModal from '../components/modals/RebinModal';
import SallerModal from '../components/modals/SallerModal';
import CariAkunModal from '../components/modals/CariAkunModal';

const FeeTransaksiView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = decodeURIComponent(location.pathname);

  const isRekberModalOpen = path === '/FEE TRANSAKSI/Jasa Rekber/Mc';
  const isRebinModalOpen = path === '/FEE TRANSAKSI/Jasa Pengamanan akun ( Rebin )';
  const isSallerModalOpen = path === '/FEE TRANSAKSI/Jasa Penjualan Akun ( Stock/Saller )';
  const isCariAkunModalOpen = path === '/FEE TRANSAKSI/Jasa Pencarian Akun ( Ml/FF )';

  const handleClose = () => navigate('/FEE TRANSAKSI');

  return (
    <section className="w-full flex flex-col gap-4 animate-fade-in">
      <div className="flex items-center gap-4 mb-2">
        <div className="h-[1px] flex-grow bg-white/20"></div>
        <h3 className="font-headline-sm text-headline-sm text-white/80 font-semibold text-center tracking-wider uppercase">
          Fee Jasa Transaksi
        </h3>
        <div className="h-[1px] flex-grow bg-white/20"></div>
      </div>

      {feeLinks.map((link, index) => {
        if (link.title === 'Jasa Rekber/Mc') {
          return <LinkCard key={`fee-${index}`} title={link.title} onClick={() => navigate(`/FEE TRANSAKSI/${link.title}`)} />;
        }
        if (link.title === 'Jasa Pengamanan akun ( Rebin )') {
          return <LinkCard key={`fee-${index}`} title={link.title} onClick={() => navigate(`/FEE TRANSAKSI/${link.title}`)} />;
        }
        if (link.title === 'Jasa Penjualan Akun ( Stock/Saller )') {
          return <LinkCard key={`fee-${index}`} title={link.title} onClick={() => navigate(`/FEE TRANSAKSI/${link.title}`)} />;
        }
        if (link.title === 'Jasa Pencarian Akun ( Ml/FF )') {
          return <LinkCard key={`fee-${index}`} title={link.title} onClick={() => navigate(`/FEE TRANSAKSI/${link.title}`)} />;
        }
        return <LinkCard key={`fee-${index}`} title={link.title} url={link.url} />;
      })}

      <RekberModal isOpen={isRekberModalOpen} onClose={handleClose} />
      <RebinModal isOpen={isRebinModalOpen} onClose={handleClose} />
      <SallerModal isOpen={isSallerModalOpen} onClose={handleClose} />
      <CariAkunModal isOpen={isCariAkunModalOpen} onClose={handleClose} />
    </section>
  );
};

export default FeeTransaksiView;
