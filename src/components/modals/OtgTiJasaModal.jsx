import React from 'react';

const textToCopy = `*OTG MARKET TI - MENYEDIAKAN JASA BERIKUT*

*LIST HARGA*

*1. Jasa Pembuatan Website (BE/FE)*
• Harga : Menyesuaikan fitur

*2. Jasa Pembuatan Mobile App (BE/FE)*
• Harga : Menyesuaikan fitur

*3. Game PC*
• Keterangan : Akan Datang

*4. Top Up Game*
• Keterangan : Request ke admin

*5. VPS Sharing, Hosting, dan Database*
• 1 Bulan : Rp25.000
• 1 Tahun : Rp200.000

*NOTES:*
_• VPS dapat digunakan untuk server game seperti Minecraft dan lainnya._`;

const OtgTiJasaModal = ({ isOpen, onClose }) => {
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
        
        <h2 className="text-xl font-bold text-primary mb-4 text-center tracking-wider uppercase">JASA OTG MARKET TI</h2>
        <button 
          onClick={() => {
            navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="mx-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all opacity-80 hover:opacity-100 mb-6"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-400">Tersalin!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Salin Semua Teks
            </>
          )}
        </button>
        <div className="text-sm text-on-surface-variant space-y-5">
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <h3 className="font-bold text-primary mb-3 text-center text-xs">LIST HARGA</h3>
            <ul className="text-xs space-y-3 font-mono">
              <li className="flex flex-col border-b border-white/5 pb-2">
                <span className="font-bold mb-1">1. Jasa Pembuatan Website (BE/FE)</span>
                <span className="opacity-80 ml-3">• Harga : Menyesuaikan fitur</span>
              </li>
              <li className="flex flex-col border-b border-white/5 pb-2">
                <span className="font-bold mb-1">2. Jasa Pembuatan Mobile App (BE/FE)</span>
                <span className="opacity-80 ml-3">• Harga : Menyesuaikan fitur</span>
              </li>
              <li className="flex flex-col border-b border-white/5 pb-2">
                <span className="font-bold mb-1">3. Game PC</span>
                <span className="opacity-80 ml-3">• Keterangan : Akan Datang</span>
              </li>
              <li className="flex flex-col border-b border-white/5 pb-2">
                <span className="font-bold mb-1">4. Top Up Game</span>
                <span className="opacity-80 ml-3">• Keterangan : Request ke admin</span>
              </li>
              <li className="flex flex-col pb-1">
                <span className="font-bold mb-1">5. VPS Sharing, Hosting, dan Database</span>
                <span className="opacity-80 ml-3">• 1 Bulan : Rp25.000</span>
                <span className="opacity-80 ml-3">• 1 Tahun : Rp200.000</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3 mt-4 text-xs italic opacity-80 bg-white/5 p-4 rounded-xl">
            <p className="font-bold not-italic text-primary mb-1">Note:</p>
            <p>• VPS dapat digunakan untuk server game seperti Minecraft dan lainnya.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtgTiJasaModal;
