import React from 'react';

const SallerModal = ({ isOpen, onClose }) => {
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
          JASA PENJUALAN AKUN<br/><span className="text-sm opacity-80">(STOCK/SELLER)</span>
        </h2>
        
        <div className="text-sm text-on-surface-variant space-y-5">
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl italic opacity-90 text-center leading-relaxed text-xs sm:text-sm">
            <p>Seller wajib mengirim foto akun dan mengisi data di bawah ini, lalu admin akan mengonfirmasi apakah akun bisa untuk dijual kembali atau tidak. Seller tidak akan diberi fee tapi admin berhak menaikan harga akun dari seller jual.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-primary text-center">FORMAT FF (Free Fire)</h3>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 font-mono text-xs sm:text-sm whitespace-pre-wrap text-white/80 select-all">
{`@oktagram_maou 

Kode Akun : FFD01

Informasi Akun
• Stock : Admin/Perantara
• Login : -
• Bind : -
• Harga : -
• Nyicil : (On/Off)
• Kekurangan : -

Spek Singkat
• -

Status : Ready / Sold

Akun Bergaransi Sesuai Ketentuan 

No Tlp OTG Market 
https://wa.me/6285159225304`}
            </div>

            <h3 className="font-bold text-primary text-center mt-6">FORMAT ML (Mobile Legends)</h3>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 font-mono text-xs sm:text-sm whitespace-pre-wrap text-white/80 select-all">
{`@oktagram_maou 

Kode Akun : MLA01

Informasi Akun
• Stock : -
• Login : -
• Status : -
• Harga : -
• Nyicil : -
• Kekurangan : -

Spek Singkat
• -

Status : Ready / Sold

Akun Bergaransi Sesuai Ketentuan

No Tlp OTG Market 
https://wa.me/6285159225304`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SallerModal;
