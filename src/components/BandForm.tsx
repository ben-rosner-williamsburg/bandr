import React, { useState } from 'react';
import { Band } from '../types/Band';

interface BandFormProps {
  onAddBand: (band: Band) => void;
}

const BandForm: React.FC<BandFormProps> = ({ onAddBand }) => {
  const [bandName, setBandName] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBand: Band = {
      id: Date.now(), // Simple unique ID
      name: bandName,
      date,
      venue,
      comments,
    };
    onAddBand(newBand);
    setBandName('');
    setDate('');
    setVenue('');
    setComments('');
  };

  return (
    <form className="flex flex-col space-y-4 p-8" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Band Name"
        value={bandName}
        onChange={(e) => setBandName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <textarea
        placeholder="Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        className="border p-2 rounded"
      />
      <button className="bg-tahiti text-2xl py-2 px-4 font-bold mb-2 rounded hover:shadow-lg" type="submit">Add Band</button>
    </form>
  );
};

export default BandForm;