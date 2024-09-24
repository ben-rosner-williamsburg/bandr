import React, { useState, useEffect } from 'react';
import BandList from './components/BandList';
import BandForm from './components/BandForm';
import { Band } from './types/Band';

const App: React.FC = () => {
  const [bands, setBands] = useState<Band[]>([]);

  const addBand = (newBand: Band) => {
    setBands((prevBands) => [...prevBands, newBand]);
  };
  
  const deleteBand = (id: number) => {
    setBands((prevBands) => prevBands.filter((band) => band.id !== id));
  };

  useEffect(() => {
    const storedBands = JSON.parse(localStorage.getItem('bands') || '[]');
    setBands(storedBands);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('bands', JSON.stringify(bands));
  }, [bands]);

  return (
    <div className="bg-tahiti-dark h-screen flex flex-col items-center  p-* justify-center">
      <div className="bg-yellow p-8 max-w-lg w-full mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold font-sans-graphik text-2xl text-orange text-center mb-6">Bandr</h1>
        <BandForm onAddBand={addBand} />
      </div>
      <div className="mt-8 w-full max-w-lg">
        <BandList bands={bands} onDeleteBand={deleteBand} />
     </div>
    </div>
  );
};
export default App;
