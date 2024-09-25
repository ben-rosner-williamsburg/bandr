import React from 'react';
import { Band } from '../types/Band';

interface BandListProps {
  bands: Band[];
  onDeleteBand: (id: number) => void;
}

const BandList: React.FC<BandListProps> = ({ bands, onDeleteBand }) => {
  return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {bands.map((band) => (
          <div
            key={band.id}
            className="relative text-center p-6 bg-tahiti rounded-lg shadow-md border border-gray-200 hover:shadow-lg"
          >
          {band.imageUrl && (
            <img
              src={band.imageUrl}
              alt={band.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          )}
            <h2 className="text-xl font-bold mb-2">{band.name}</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Date:</span> {band.date}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Venue:</span> {band.venue}
            </p>
            {band.comments && (
              <p className="text-gray-600">
                <span className="font-semibold">Comments:</span> {band.comments}
              </p>
            )}
            <button
            className="absolute top-4 right-4 text-red-500 hover:text-red-700 hover:shadow-lg"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this band?")) {
                onDeleteBand(band.id)
              }
            }}
          >Delete</button>
          </div>
        ))}
      </div>
  );
};

export default BandList;