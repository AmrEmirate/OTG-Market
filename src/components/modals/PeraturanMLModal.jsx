import React from 'react';

const PeraturanMLModal = ({ isOpen, onClose }) => {
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
          RULES ML TURNAMEN
        </h2>
        <div className="text-sm text-center text-white/80 space-y-4 py-8">
          <p className="text-white/60 italic text-sm">Akan Datang...</p>
        </div>
      </div>
    </div>
  );
};

export default PeraturanMLModal;
