
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App(): React.ReactNode {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <ProductList />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
