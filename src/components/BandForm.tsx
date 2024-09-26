import React, { useState } from 'react';
import { Band } from '../types/Band';
import axios from 'axios';

interface BandFormProps {
  onAddBand: (band: Band) => void;
}

const UNSPLASH_ACCESS_KEY = "DhoxnUs2ViQredA7q8_jRpf0fVixuaGLzgWa6u5pLPs";

const BandForm: React.FC<BandFormProps> = ({ onAddBand }) => {
  const [bandName, setBandName] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [comments, setComments] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loadingImage, setLoadingImage] = useState(false);

3
const fetchImage = async (name: string) => {
  setLoadingImage(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${name}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1`
      );
      const image = response.data.results[0];
      if (image) {
        setImageUrl(image.urls.small);
      } else {
        setImageUrl('');
      }
    } catch (error) {
      console.error('Error fetching image from Unsplash:', error);
    } finally {
      setLoadingImage(false);
    }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBand: Band = {
      id: Date.now(), // Simple unique ID
      name: bandName,
      date,
      venue,
      comments,
      imageUrl,
    };
    onAddBand(newBand);
    setBandName('');
    setDate('');
    setVenue('');
    setComments('');
    setImageUrl('');
  };

  return (
    <form className="flex flex-col space-y-4 p-8" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Band Name"
        value={bandName}
        onChange={(e) => {
          setBandName(e.target.value)
          fetchImage(e.target.value);
        }}
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
      {loadingImage && <p>Loading image...</p>}
      {imageUrl && <img src={imageUrl} alt="Band" className="w-full h-32 object-cover rounded-md mb-4" />}
      <button className="bg-tahiti text-2xl py-2 px-4 font-bold mb-2 rounded hover:shadow-lg" type="submit">Add Band</button>
    </form>
  );
};

export default BandForm;