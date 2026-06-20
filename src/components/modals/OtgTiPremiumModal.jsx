import React from 'react';

const textToCopy = `*OTG MARKET TI - LAYANAN AKUN PREMIUM*

*LIST HARGA*

*1. Aplikasi Premium (Akun Admin)*
• Alight Motion : Rp7.000 (1 Tahun)
• Canva : Rp10.000 (1 Tahun)
• CapCut : Rp10.000 (1 Bulan)
• Google One (Sharing) : Rp5.000 (1 Bulan)
• Google One (Private) : Rp20.000 (1 Bulan)
• Netflix (Sharing Inv) : Rp30.000 (1 Bulan)
• Spotify : Rp15.000 (1 Bulan) 
• Viu Premium : Rp12.000 (1 Tahun)
• Wink Premium : Rp20.000 (1 Bulan)
• YouTube Premium Inv : Rp5.000 (1 Bulan)

*2. Premium Sharing (Netflix, Hbo Max, AI, dll)*
• 1 Bulan : Rp25.000
• 6 Bulan : Rp100.000

*3. Premium Sharing Ekslusif (Netflix, Disney+, Chatgpt pro, dll)*
• 1 Bulan : Rp45.000
• 6 Bulan : Rp200.000

*NOTES:*
_• Harap tanyakan stock terlebih dahulu, admin akan mengecek ketersediaan stock._
_• Harga di atas tidak menentu dan bisa lebih murah tergantung paket yang dipilih, karena list di atas diambil dari harga paket tertinggi. Bisa langsung tanya ke admin._
_• Khusus Google One, sudah include dengan Drive 5 Tb dan Gemini Pro._
_• Untuk sistem Invite (Inv) lewat family, batas maksimal perpindahan family adalah 2 kali._
_• Premium Sharing untuk Netflix hanya bisa di laptop,  bisa di hp tapi hanya beberapa premium saja, untuk info premium apa aja yg di dapet bisa langsung tanya admin, premium yang di dapat bisa 50+_`;

const OtgTiPremiumModal = ({ isOpen, onClose }) => {
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
        
        <h2 className="text-xl font-bold text-primary mb-4 text-center tracking-wider uppercase">LAYANAN AKUN PREMIUM OTG MARKET TI</h2>
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
                <span className="font-bold mb-1">1. Aplikasi Premium (Akun Admin)</span>
                <span className="opacity-80 ml-3">• Alight Motion : Rp7.000 (1 Tahun)</span>
                <span className="opacity-80 ml-3">• Canva : Rp10.000 (1 Tahun)</span>
                <span className="opacity-80 ml-3">• CapCut : Rp10.000 (1 Bulan)</span>
                <span className="opacity-80 ml-3">• Google One (Sharing) : Rp5.000 (1 Bulan)</span>
                <span className="opacity-80 ml-3">• Google One (Private) : Rp20.000 (1 Bulan)</span>
                <span className="opacity-80 ml-3">• Netflix (Sharing Inv) : Rp30.000 (1 Bulan)</span>
                <span className="opacity-80 ml-3">• Spotify : Rp15.000 (1 Bulan)</span>
                <span className="opacity-80 ml-3">• Viu Premium : Rp12.000 (1 Tahun)</span>
                <span className="opacity-80 ml-3">• Wink Premium : Rp20.000 (1 Bulan)</span>
                <span className="opacity-80 ml-3">• YouTube Premium Inv : Rp5.000 (1 Bulan)</span>
              </li>
              <li className="flex flex-col border-b border-white/5 pb-2">
                <span className="font-bold mb-1">2. Premium Sharing (Netflix, Hbo Max, AI, dll)</span>
                <span className="opacity-80 ml-3">• 1 Bulan : Rp25.000</span>
                <span className="opacity-80 ml-3">• 6 Bulan : Rp100.000</span>
              </li>
              <li className="flex flex-col pb-1">
                <span className="font-bold mb-1">3. Premium Sharing Ekslusif (Netflix, Disney+, Chatgpt pro, dll)</span>
                <span className="opacity-80 ml-3">• 1 Bulan : Rp45.000</span>
                <span className="opacity-80 ml-3">• 6 Bulan : Rp200.000</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3 mt-4 text-xs italic opacity-80 bg-white/5 p-4 rounded-xl">
            <p className="font-bold not-italic text-primary mb-1">Note:</p>
            <p>• Harap tanyakan stock terlebih dahulu, admin akan mengecek ketersediaan stock.</p>
            <p>• Harga di atas tidak menentu dan bisa lebih murah tergantung paket yang dipilih, karena list di atas diambil dari harga paket tertinggi. Bisa langsung tanya ke admin.</p>
            <p>• Khusus Google One, sudah include dengan Drive 5 Tb dan Gemini Pro.</p>
            <p>• Untuk sistem Invite (Inv) lewat family, batas maksimal perpindahan family adalah 2 kali.</p>
            <p>• Premium Sharing untuk Netflix hanya bisa di laptop, bisa di hp tapi hanya beberapa premium saja, untuk info premium apa aja yg di dapet bisa langsung tanya admin, premium yang di dapat bisa 50+.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtgTiPremiumModal;
