import React from 'react';
import { mainLinks } from '../data/links';
import LinkCard from '../components/LinkCard';

const InformasiView = () => {
  return (
    <section className="w-full flex flex-col gap-4 animate-fade-in">
      <div className="flex items-center gap-4 mb-2">
        <div className="h-[1px] flex-grow bg-white/20"></div>
        <h3 className="font-headline-sm text-headline-sm text-white/80 font-semibold text-center tracking-wider uppercase">
          Informasi
        </h3>
        <div className="h-[1px] flex-grow bg-white/20"></div>
      </div>
      {mainLinks.map((link, index) => (
        <LinkCard key={index} title={link.title} url={link.url} />
      ))}
    </section>
  );
};

export default InformasiView;
