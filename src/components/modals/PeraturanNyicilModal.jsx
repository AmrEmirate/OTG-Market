import React from 'react';

const PeraturanNyicilModal = ({ isOpen, onClose }) => {
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
          SYARAT UNTUK NYICIL
        </h2>
        <div className="text-sm text-left text-white/80 space-y-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>Massa Nyicil Maks 3 bulan (Tolong buyer di sesuaikan bujet nya)</li>
            <li>Minimal DP 10% - 30% (Tergantung Admin Yang menentukan), Setelah itu admin akan memberikan akunnya</li>
            <li>Hak Akses akun di admin selama massa nyicil</li>
            <li>Buyer dilarang keras untuk mengotak Ngatik akun (Akan dikenai denda atau Take bak akun nya)</li>
            <li>Nyicil kurang dari 12 hari, Boleh di lakukan bin Gmail mandiri</li>
            <li>Nyicil lebih dari 12 hari akan di lakukan bin oleh Gmail Sepaket</li>
            <li>Tidak boleh telat bayar atau pun nyicil di massa perjanjian akan di kenai denda 10% Harga akun</li>
            <li>Nyicil bisa MC atau Rekber dengan syarat DP 50%</li>
            <li>Akun yang sudah di beli dalam massa nyicil tidak bisa di TT atau pun Bt, Jika ingin berhenti dalam massa nyicil wajib membayar 50% dari akun yang di beli (Tidka mendapatkan akun), Melanggar atau pun kabur bisa terkena resiko reset jarak jauh yaa..</li>
            <li>Jika massa nyicil berakhir, Buyyer akan di kasih semua data aku beserta free Ce</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PeraturanNyicilModal;
