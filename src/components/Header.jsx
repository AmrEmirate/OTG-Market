import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = decodeURIComponent(location.pathname);
  const currentView = path === '/FEE TRANSAKSI' ? 'fee' : path === '/PERATURAN' ? 'peraturan' : 'informasi';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'OTG Market',
          text: 'Digital Services & Accounts',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link disalin ke clipboard!');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 flex flex-col max-w-[640px] mx-auto bg-surface/5 dark:bg-surface/5 backdrop-blur-xl border-b border-white/10 shadow-sm transition-opacity">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            alt="Profile picture of the user"
            className="w-8 h-8 rounded-full border border-white/20"
            src="/logo otg.jpeg"
          />
          <h1 className="text-primary dark:text-primary font-headline-md text-headline-md font-bold">
            OTG Market
          </h1>
        </div>
        <button
          aria-label="Share"
          onClick={handleShare}
          className="text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 duration-150 p-2"
        >
          <span aria-hidden="true" className="material-symbols-outlined">
            share
          </span>
        </button>
      </div>
      
      {/* Navigation Tabs */}
      <div className="flex w-full border-t border-white/10 overflow-x-auto custom-scrollbar">
        <button
          onClick={() => navigate('/informasi')}
          className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold tracking-wider transition-colors duration-200 border-b-2 whitespace-nowrap ${
            currentView === 'informasi'
              ? 'text-primary border-primary bg-primary/5'
              : 'text-on-surface-variant/60 border-transparent hover:text-white/90 hover:bg-white/5'
          }`}
        >
          INFORMASI
        </button>
        <button
          onClick={() => navigate('/fee')}
          className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold tracking-wider transition-colors duration-200 border-b-2 whitespace-nowrap ${
            currentView === 'fee'
              ? 'text-primary border-primary bg-primary/5'
              : 'text-on-surface-variant/60 border-transparent hover:text-white/90 hover:bg-white/5'
          }`}
        >
          FEE TRANSAKSI
        </button>
        <button
          onClick={() => navigate('/peraturan')}
          className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold tracking-wider transition-colors duration-200 border-b-2 whitespace-nowrap ${
            currentView === 'peraturan'
              ? 'text-primary border-primary bg-primary/5'
              : 'text-on-surface-variant/60 border-transparent hover:text-white/90 hover:bg-white/5'
          }`}
        >
          PERATURAN
        </button>
      </div>
    </header>
  );
};

export default Header;
