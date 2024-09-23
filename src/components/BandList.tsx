import React, { useState } from 'react';
import { Band } from '../types/Band';

interface BandListProps {
  bands: Band[];
}

const BandList: React.FC<BandListProps> = ({ bands }) => {
  return (
    <div>
      <h1>Bands I've Seen</h1>
      <ul>
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