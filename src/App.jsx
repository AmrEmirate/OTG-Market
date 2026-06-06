import React from 'react';
import { mainLinks, socialLinks } from './data/links';

function App() {
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
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-6 py-4 max-w-[640px] mx-auto bg-surface/5 dark:bg-surface/5 backdrop-blur-xl border-b border-white/10 shadow-sm transition-opacity">
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
      </header>

      {/* Main Content Container */}
      <main className="w-full max-w-container-max px-element-padding-x pt-32 pb-10 flex flex-col items-center flex-grow">
        {/* Profile Header Section */}
        <section className="flex flex-col items-center text-center mb-10 w-full animate-fade-in-up">
          <div className="relative mb-4">
            <img
              alt="Profile picture of the user"
              className="w-[100px] h-[100px] rounded-full object-cover border-2 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              src="/logo otg.jpeg"
            />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
            OTG Market
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[80%] mx-auto opacity-80">
            Digital Services & Accounts
          </p>
        </section>

        {/* Links Container */}
        <section className="w-full flex flex-col gap-4">
          {mainLinks.map((link, index) => (
            <a
              key={index}
              className="glass-link-card w-full py-4 px-6 flex items-center justify-center relative rounded-xl group overflow-hidden"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              <span className="font-body-lg text-body-lg font-medium text-center relative z-10 w-full">
                {link.title}
              </span>
            </a>
          ))}
        </section>

        {/* Social Icons Footer Section */}
        <div className="flex flex-col items-center mt-12 mb-4 w-full">
          <p className="text-white/50 text-sm font-medium mb-4 tracking-wider uppercase font-body-md">
            Connect with us
          </p>
          <div className="flex gap-6 justify-center">
            {/* Instagram */}
            <a
              className="text-white/70 hover:text-white transition-colors duration-200"
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            {/* TikTok */}
            <a
              className="text-white/70 hover:text-white transition-colors duration-200"
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
              </svg>
            </a>
            {/* Twitter */}
            <a
              className="text-white/70 hover:text-white transition-colors duration-200"
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            {/* Telegram */}
            <a
              className="text-white/70 hover:text-white transition-colors duration-200"
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center gap-4 w-full px-6 text-center bg-transparent full-width pb-10 mt-20 border-t border-white/5 pt-8">
        <div className="flex gap-4 mb-2">
          <a
            className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Contact
          </a>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant font-bold">
          © 2024 OTG Market. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
