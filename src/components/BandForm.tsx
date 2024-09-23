import React, { useState } from 'react';
import { Band } from './Band';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Band Name"
        value={bandName}
        onChange={(e) => setBandName(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        required
      />
      <textarea
        placeholder="Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button type="submit">Add Band</button>
    </form>
  );
};

export default BandForm;