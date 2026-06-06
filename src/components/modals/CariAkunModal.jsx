import React from 'react';

const formatCari = `*FORM CARI AKUN*

Bajet :
Jenis : (Ff/Ml)
Spek :
Catatan :
Pembayaran : Nyicil/Lunas

No Tlp OTG Market 
https://wa.me/6285159225304`;

const CariAkunModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface/95 border border-white/10 rounded-2xl p-6 w-full max-w-md max-h-[85vh] overflow-y-auto custom-scrollbar relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-xl font-bold text-primary mb-4 text-center tracking-wider leading-snug">
          JASA PENCARIAN AKUN<br/><span className="text-sm opacity-80">(ML/FF)</span>
        </h2>
        
        <div className="text-sm text-on-surface-variant space-y-5">
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl italic opacity-90 text-center leading-relaxed text-xs sm:text-sm">
            <p>Buyer wajib mengisi Form pencarian akun, lalu admin akan proses pencarian akun sesuai kriteria.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-primary text-center">FORMAT CARI AKUN</h3>
            <div className="relative">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(formatCari);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all opacity-80 hover:opacity-100 flex items-center gap-1 backdrop-blur-md"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-400">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Salin
                  </>
                )}
              </button>
              <div className="bg-black/30 p-4 pt-12 rounded-xl border border-white/5 font-mono text-xs sm:text-sm whitespace-pre-wrap text-white/80 select-all">
{formatCari}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CariAkunModal;
