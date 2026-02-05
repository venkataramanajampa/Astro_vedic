import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomePage from './components/main';
import ContactPage from './components/Contactus';


import { pageData } from './components/Vedicdata';
import GenericPage from './components/Customcomp';
import YearlyHoroscope from './components/Yearlyhoroscope';


import Aboutimg from "./assets/aboutimg.jpeg"
import Yantraimg from "./assets/yantra.png"
import Dosha from "./assets/dosha.png"
import Gemimg from "./assets/gems.png"
import Rudra from "./assets/rudra.png"
import Vasthu from "./assets/vasthu.png"
import Services from "./assets/services.png"
// Simple placeholder page component
const Home = () => <div className="p-10 text-center">
</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Header Section */}
        <Header />
        {/* Navigation Section */}
        <Navbar />
        {/* Main Content Area */}
        <main>
          <Routes>
            {/* Home Page uses the Sidebar component we made earlier */}
            <Route path="/" element={<HomePage />} />

            <Route path="/horoscope/:sign" element={<YearlyHoroscope />} />


            {/* Other Pages reuse the GenericPage component with different data */}
            <Route
              path="/about"
              element={<GenericPage title="About Us" description={pageData.about} imageSrc={Aboutimg} />}
            />
            <Route
              path="/services"
              element={<GenericPage title="Our Services" description={pageData.services} imageSrc={Services} />}
            />
            <Route
              path="/vastu"
              element={<GenericPage title="Vastu Shastra" description={pageData.vastu} imageSrc={Vasthu} />}
            />
            <Route
              path="/dosha-remedies"
              element={<GenericPage title="Dosha Remedies" description={pageData.dosha} imageSrc={Dosha} />}
            />
            <Route
              path="/gem-stones"
              element={<GenericPage title="Gem Stones" description={pageData.gemstones} imageSrc={Gemimg} />}
            />
            <Route
              path="/rudraksha"
              element={<GenericPage title="Rudraksha" description={pageData.rudraksha} imageSrc={Rudra} />}
            />
            <Route
              path="/yantra"
              element={<GenericPage title="Yantra" description={pageData.yantra} imageSrc={Yantraimg} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;