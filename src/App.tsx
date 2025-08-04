import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import VideoGallery from './components/VideoGallery';
import Gallery from './components/Gallery';
import Classes from './components/Classes';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import { AnalyticsProvider } from './components/AnalyticsProvider';

function App() {
  return (
    <AnalyticsProvider>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <VideoGallery />
                <Gallery />
                <Classes />
                <Shop />
                <Reviews />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/videos" element={<VideoGallery />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AnalyticsProvider>
  );
}

export default App;