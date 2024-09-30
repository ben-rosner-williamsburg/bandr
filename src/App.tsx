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
    const storedBands = localStorage.getItem('bands');
    if (storedBands) {
      try {
        const parsedBands: Band[] = JSON.parse(storedBands);
        setBands(parsedBands);
      } catch (error) {
        console.error('Error parsing bands from localStorage:', error);
      }
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('bands', JSON.stringify(bands));
  }, [bands]);

  return (
    <div className="bg-tahiti-dark p-8 h-auto min-h-screen flex flex-col items-center justify-start">
      <div className="bg-yellow max-w-3xl w-full mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold p-2 text-center mb-6 text-orange text-center mb-6">Bandr</h1>
        <BandForm onAddBand={addBand} />
      </div>
      <div className="mt-8 w-full max-w-3xl overflow-y-auto">
        <BandList bands={bands} onDeleteBand={deleteBand} />
     </div>
    </div>
  );
};
export default App;
