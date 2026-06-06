import React from 'react';

const LinkCard = ({ title, url, onClick }) => {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="glass-link-card w-full py-4 px-6 flex items-center justify-center relative rounded-xl group overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
        <span className="font-body-lg text-body-lg font-medium text-center relative z-10 w-full">
          {title}
        </span>
      </button>
    );
  }

  return (
    <a
      className="glass-link-card w-full py-4 px-6 flex items-center justify-center relative rounded-xl group overflow-hidden"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
      <span className="font-body-lg text-body-lg font-medium text-center relative z-10 w-full">
        {title}
      </span>
    </a>
  );
};

export default LinkCard;
