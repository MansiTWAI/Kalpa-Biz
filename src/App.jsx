import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar/>
      <main className="flex-1">
        <Home />
      </main>
      <Footer/>
    </div>
  );
}

export default App;