import { useState } from 'react';
import './App.css';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import {Projects} from './components/sections/Project';
import { Contact } from './components/sections/Contact';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About/>
        <Projects/>
        <Contact/>

        {/* You can add your page sections below */}
        <main className="pt-16">
          <section id="home" className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Welcome to Sulaimon.tech</h1>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
