import React from 'react';

const PeraturanFFModal = ({ isOpen, onClose }) => {
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
          RULES FF FT / ISIAN
        </h2>
        <div className="text-sm text-left text-white/80 space-y-4">
          <p className="font-bold text-red-400 text-center mb-1">⚠️ TOLONG RULES DIBACA SEMUA YAHH!</p>
          <p className="font-bold text-white/90 text-center mb-4 text-xs opacity-80">( ATTRIBUT OFF / ALL KAYU )</p>

          <div className="space-y-5">
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <h4 className="font-bold text-primary mb-2">⚙️ PENGATURAN ROOM</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mode: CR Crazy Store</li>
                <li>Ammo: Unlimited</li>
                <li>Ronde: 13</li>
                <li>Coin: 1500</li>
                <li>Pakaian Generic: ON</li>
                <li>Attribut: OFF</li>
                <li>Airdrop: OFF</li>
                <li>Batas Throwable: OFF</li>
              </ul>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <h4 className="font-bold text-primary mb-2">👤 KARAKTER & PET</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Skill Wajib: Alok, Hayato, Kelly, Caroline</li>
                <li>Pet: NO PET (Kecuali Kucing / Falco diperbolehkan)</li>
                <li>Loadout: NO LOADOUT</li>
              </ul>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <h4 className="font-bold text-primary mb-2">⚔️ ATURAN GAMEPLAY (IN-GAME)</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>SKOR 0-0: WAJIB 1 SG & NO GLOO WALL!</li>
                <li>AKUN LEVEL 1-40: WAJIB SS (Screenshot) di skor 0-0!</li>
                <li>Senjata: SG2 ONLY!</li>
                <li>NO Surcin</li>
                <li>NO Gloo Wall Kecil</li>
                <li>NOT Atap / Lantai 2</li>
                <li>GA BOLEH terkena Zona</li>
                <li>NO Tinju (Ada damage tinju = DISS)</li>
                <li>End Animasi Tinju = DISS</li>
                <li>Damage USP = DISS</li>
              </ul>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <h4 className="font-bold text-primary mb-2">📱 DEVICE & APLIKASI</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>PC: Maksimal 1 Player</li>
                <li>Mobile: Bebas</li>
                <li>Makro: GA BOLEH!</li>
                <li>Aplikasi: FF PLAYSTORE ONLY!</li>
              </ul>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <h4 className="font-bold text-primary mb-2">🛑 SANKSI & KETENTUAN LAIN</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Salah buat room? Jika belum ada damage boleh RM (Rematch). Jika sudah ada damage = DISS (No Drama!).</li>
                <li>Batas RM: Maksimal 2 KALI per tim (syarat: belum ada damage).</li>
                <li>Ada penyusup? Admin TIDAK bertanggung jawab.</li>
                <li>MELANGGAR RULES = DISKUALIFIKASI!!</li>
              </ul>
            </div>
            
            <p className="font-bold text-center text-primary mt-6 pt-4 border-t border-white/5">🔥 SELAMAT BERTANDING! 🔥</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeraturanFFModal;
