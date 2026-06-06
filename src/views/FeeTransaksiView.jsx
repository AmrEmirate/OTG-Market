import React, { useState } from 'react';
import { feeLinks } from '../data/links';
import LinkCard from '../components/LinkCard';
import RekberModal from '../components/modals/RekberModal';
import RebinModal from '../components/modals/RebinModal';
import SallerModal from '../components/modals/SallerModal';
import CariAkunModal from '../components/modals/CariAkunModal';

const FeeTransaksiView = () => {
  const [isRekberModalOpen, setIsRekberModalOpen] = useState(false);
  const [isRebinModalOpen, setIsRebinModalOpen] = useState(false);
  const [isSallerModalOpen, setIsSallerModalOpen] = useState(false);
  const [isCariAkunModalOpen, setIsCariAkunModalOpen] = useState(false);

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
          return <LinkCard key={`fee-${index}`} title={link.title} onClick={() => setIsRekberModalOpen(true)} />;
        }
        if (link.title === 'Jasa Pengamanan akun ( Rebin )') {
          return <LinkCard key={`fee-${index}`} title={link.title} onClick={() => setIsRebinModalOpen(true)} />;
        }
        if (link.title === 'Jasa Penjualan Akun ( Stock/Saller )') {
          return <LinkCard key={`fee-${index}`} title={link.title} onClick={() => setIsSallerModalOpen(true)} />;
        }
        if (link.title === 'Jasa Pencarian Akun ( Ml/FF )') {
          return <LinkCard key={`fee-${index}`} title={link.title} onClick={() => setIsCariAkunModalOpen(true)} />;
        }
        return <LinkCard key={`fee-${index}`} title={link.title} url={link.url} />;
      })}

      <RekberModal isOpen={isRekberModalOpen} onClose={() => setIsRekberModalOpen(false)} />
      <RebinModal isOpen={isRebinModalOpen} onClose={() => setIsRebinModalOpen(false)} />
      <SallerModal isOpen={isSallerModalOpen} onClose={() => setIsSallerModalOpen(false)} />
      <CariAkunModal isOpen={isCariAkunModalOpen} onClose={() => setIsCariAkunModalOpen(false)} />
    </section>
  );
};

export default FeeTransaksiView;
