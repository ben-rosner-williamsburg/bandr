import React, { useState, useEffect } from 'react';
import BandList from './components/BandList';
import BandForm from './components/BandForm';
import { Band } from './types/Band';

const App: React.FC = () => {
  const [bands, setBands] = useState<Band[]>([]);

  const addBand = (newBand: Band) => {
    setBands((prevBands) => [...prevBands, newBand]);
  };

  useEffect(() => {
    const storedBands = JSON.parse(localStorage.getItem('bands') || '[]');
    setBands(storedBands);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('bands', JSON.stringify(bands));
  }, [bands]);

  return (
    <div className="bg-tahiti h-screen flex flex-col items-center  p-* justify-center">
      <BandList bands={bands} />
      <BandForm onAddBand={addBand} />
    </div>
  );
};
export default App;
