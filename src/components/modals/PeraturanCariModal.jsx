import React from 'react';

const textToCopy = `*TATA CARA PENCARIAN AKUN*

1. Buyer mengisi formulir pencarian akun ( Bajet minimal 50 ribu )
2. Admin akan mencari akun sesuai request dan harganya
3. Buyer akan memilih akun yang akan di beli
4. Buyer akan memilih bayar cash atau nyicil ( Jika nyicil harus mengikuti ketentuan di atas )
5. Buyer tidak boleh komplain apa yang udah di pilih dan di beli
6. Buyer tidak boleh membercandai atau meremehkan admin dalam urusan apapun (Sifat Admin Tergantung Sifat buyer)
7. Admin Tidka menerima TT atau BT, Tapi admin akan menawarkan akun nya untuk di jual lagi di JB secara free`;

const PeraturanCariModal = ({ isOpen, onClose }) => {
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
        <h2 className="text-xl font-bold text-primary mb-2 text-center tracking-wider leading-snug">
          TATA CARA PENCARIAN AKUN
        </h2>
        <button 
          onClick={() => {
            navigator.clipboard.writeText(textToCopy);
            alert('Peraturan disalin!');
          }}
          className="mx-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all opacity-80 hover:opacity-100 mb-6"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          Salin Semua Teks
        </button>
        <p className="font-bold text-white/90 text-center mb-4 text-xs opacity-80">*TATA CARA OPEN JASA PENCARIAN AKUN*</p>
        <div className="text-sm text-left text-white/80 space-y-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>Buyer mengisi formulir pencarian akun ( Bajet minimal 50 ribu )</li>
            <li>Admin akan mencari akun sesuai request dan harganya</li>
            <li>Buyer akan memilih akun yang akan di beli</li>
            <li>Buyer akan memilih bayar cash atau nyicil ( Jika nyicil harus mengikuti ketentuan di atas )</li>
            <li>Buyer tidak boleh komplain apa yang udah di pilih dan di beli</li>
            <li>Buyer tidak boleh membercandai atau meremehkan admin dalam urusan apapun (Sifat Admin Tergantung Sifat buyer)</li>
            <li>Admin Tidka menerima TT atau BT, Tapi admin akan menawarkan akun nya untuk di jual lagi di JB secara free</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PeraturanCariModal;
