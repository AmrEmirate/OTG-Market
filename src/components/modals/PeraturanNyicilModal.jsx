import React from 'react';

const textToCopy = `*SYARAT UNTUK NYICIL*

1. Massa Nyicil Maks 3 bulan (Tolong buyer di sesuaikan bujet nya)
2. Minimal DP 10% - 30% (Tergantung Admin Yang menentukan), Setelah itu admin akan memberikan akunnya
3. Hak Akses akun di admin selama massa nyicil
4. Buyer dilarang keras untuk mengotak Ngatik akun (Akan dikenai denda atau Take bak akun nya)
5. Nyicil kurang dari 12 hari, Boleh di lakukan bin Gmail mandiri
6. Nyicil lebih dari 12 hari akan di lakukan bin oleh Gmail Sepaket
7. Tidak boleh telat bayar atau pun nyicil di massa perjanjian akan di kenai denda 10% Harga akun
8. Nyicil bisa MC atau Rekber dengan syarat DP 50%
9. Akun yang sudah di beli dalam massa nyicil tidak bisa di TT atau pun Bt, Jika ingin berhenti dalam massa nyicil wajib membayar 50% dari akun yang di beli (Tidka mendapatkan akun), Melanggar atau pun kabur bisa terkena resiko reset jarak jauh yaa..
10. Jika massa nyicil berakhir, Buyyer akan di kasih semua data aku beserta free Ce`;

const PeraturanNyicilModal = ({ isOpen, onClose }) => {
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
          SYARAT UNTUK NYICIL
        </h2>
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
