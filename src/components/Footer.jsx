import React from 'react';
import { socialLinks } from '../data/links';

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-12 mb-4 w-full">
      <p className="text-white/50 text-sm font-medium mb-4 tracking-wider uppercase font-body-md">
        Connect with us
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full">
        <div className="flex gap-4 sm:gap-6 justify-center">
        {/* Instagram */}
        <a
          className="text-white/70 hover:text-white transition-colors duration-200"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
          </svg>
        </a>
        {/* Tiktok */}
        <a
          className="text-white/70 hover:text-white transition-colors duration-200"
          href={socialLinks.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tiktok"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
          </svg>
        </a>
        {/* Facebook */}
        <a
          className="text-white/70 hover:text-white transition-colors duration-200"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"></path>
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
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
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
        <div className="flex gap-4 sm:gap-6 justify-center">
        {/* Tokopedia */}
        <a
          className="transition-all duration-200 inline-flex items-center justify-center"
          style={{ opacity: 0.7, filter: 'grayscale(1)' }}
          onMouseEnter={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(1)'; e.currentTarget.style.opacity = '0.7'; }}
          href={socialLinks.tokopedia}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tokopedia"
        >
          <img src="/tokopedia-square.png" alt="Tokopedia" className="w-6 h-6" style={{ objectFit: 'contain' }} />
        </a>
        {/* Shopee */}
        <a
          className="text-white/70 hover:text-white transition-colors duration-200"
          href={socialLinks.shopee}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shopee"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z"></path>
          </svg>
        </a>
        {/* Gmail */}
        <a
          className="text-white/70 hover:text-white transition-colors duration-200"
          href={socialLinks.gmail}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
          </svg>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
