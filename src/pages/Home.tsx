import React from 'react';
import Header from '../Components/Header';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#A08963' }}>
      <Header />
      <main className="pt-16">
        {/* Page content goes here */}
      </main>
    </div>
  );
};

export default Home;
