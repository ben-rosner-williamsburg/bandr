import React from 'react';
import { Band } from '../types/Band';

interface BandListProps {
  bands: Band[];
}

const BandList: React.FC<BandListProps> = ({ bands }) => {
  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold text-center mb-6">Bands I've Seen</h1>
      <ul className="text-center m--8">
        {bands.map((band) => (
          <li key={band.id}>
            {band.name} - {band.date} @ {band.venue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BandList;