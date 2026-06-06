import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InformasiView from './views/InformasiView';
import FeeTransaksiView from './views/FeeTransaksiView';
import PeraturanView from './views/PeraturanView';

function App() {
  const location = useLocation();
  const path = decodeURIComponent(location.pathname);
  const currentView = path === '/FEE TRANSAKSI' ? 'fee' : path === '/PERATURAN' ? 'peraturan' : 'informasi';

  return (
    <>
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-70"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/20 blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header />

      {/* Main Content Container */}
      <main className="w-full max-w-container-max px-element-padding-x pt-40 pb-10 flex flex-col items-center flex-grow">
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

        {currentView === 'informasi' && <InformasiView />}
        {currentView === 'fee' && <FeeTransaksiView />}
        {currentView === 'peraturan' && <PeraturanView />}
        
        <Footer />
      </main>
    </>
  );
}

export default App;
