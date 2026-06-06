import React from 'react';

const textToCopy = `*JASA PENGAMANAN AKUN (REBIN)*

1. Harap pembeli untuk transfer ke admin sesuai total harga dan kirim bukti transaksi ke admin
2. Setelah transaksi berhasil mohon bersabar untuk menunggu konfirmasi admin
3. Setelah saldo masuk admin akan menyuruh penjual untuk memberikan data akun untuk diamankan

*PEMBAYARAN*
- Jago : 109736366476 (A/N Amr Emirate Abdurahman)
- GOPAY : 081284525304 (A/N Amr Emirate Abdurahman)
- DANA : 081284525304 (A/N Amr Emirate Abdurahman)

*LIST FEE REBIN*
- 0 - 99 = 3k
- 100 - 199 = 5k
- 200 - 299 = 8k
- 300 - 599 = 10k
- 600 - 999 = 15k
- 1jt+++ = 20k
- 2jt+++ = 25k
- 3jt - dst = 30k`;

const RebinModal = ({ isOpen, onClose }) => {
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
        
        <h2 className="text-xl font-bold text-primary mb-4 text-center tracking-wider">JASA PENGAMANAN AKUN (REBIN)</h2>
        <button 
          onClick={() => {
            navigator.clipboard.writeText(textToCopy);
            alert('Informasi disalin!');
          }}
          className="mx-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all opacity-80 hover:opacity-100 mb-6"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          Salin Semua Teks
        </button>
        <div className="text-sm text-on-surface-variant space-y-5">
          <div className="space-y-2 italic opacity-90 text-center leading-relaxed">
            <p>Harap pembeli untuk transfer ke admin sesuai total harga dan kirim bukti transaksi ke admin</p>
            <p>Setelah transaksi berhasil mohon bersabar untuk menunggu konfirmasi admin</p>
            <p>Setelah saldo masuk admin akan menyuruh penjual untuk memberikan data akun untuk diamankan</p>
          </div>

          <div className="bg-white/5 p-4 rounded-xl space-y-4 font-mono text-xs sm:text-sm border border-white/5 shadow-inner">
            <div className="flex flex-col">
              <span className="text-primary font-bold">Jago : 109736366476</span>
              <span className="opacity-80">A/N : Amr Emirate Abdurahman</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold">GOPAY : 081284525304</span>
              <span className="opacity-80">A/N : Amr Emirate Abdurahman</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold">DANA : 081284525304</span>
              <span className="opacity-80">A/N : Amr Emirate Abdurahman</span>
            </div>
            <div className="pt-2 border-t border-white/10">
              <span className="text-primary font-bold mb-2 block text-center">QRIS :</span>
              <img src="/Qr.jpeg" alt="QRIS" className="w-full max-w-[200px] rounded-lg border border-white/20 mx-auto shadow-md" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-6 w-full max-w-sm mx-auto">
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <h3 className="font-bold text-primary mb-3 text-center text-xs">LIST FEE REBIN</h3>
              <ul className="text-xs space-y-2 font-mono">
                <li className="flex justify-between border-b border-white/5 pb-1"><span>0 - 99</span><span>3k</span></li>
                <li className="flex justify-between border-b border-white/5 pb-1"><span>100 - 199</span><span>5k</span></li>
                <li className="flex justify-between border-b border-white/5 pb-1"><span>200 - 299</span><span>8k</span></li>
                <li className="flex justify-between border-b border-white/5 pb-1"><span>300 - 599</span><span>10k</span></li>
                <li className="flex justify-between border-b border-white/5 pb-1"><span>600 - 999</span><span>15k</span></li>
                <li className="flex justify-between border-b border-white/5 pb-1"><span>1jt+++</span><span>20k</span></li>
                <li className="flex justify-between border-b border-white/5 pb-1"><span>2jt+++</span><span>25k</span></li>
                <li className="flex justify-between text-primary font-medium pt-1"><span>3jt - dst</span><span>30k</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RebinModal;
