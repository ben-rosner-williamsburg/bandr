import React, { useState } from 'react';
import { Band } from '../types/Band';
import axios from 'axios';

interface BandFormProps {
  onAddBand: (band: Band) => void;
}

const BandForm: React.FC<BandFormProps> = ({ onAddBand }) => {
  const [bandName, setBandName] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [comments, setComments] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loadingImage, setLoadingImage] = useState(false);

  const fetchImageFromProxy = async (name: string) => {
    setLoadingImage(true);
    try {
      const response = await axios.get(`http://localhost:5001/api/search?query=${name}`);
      const image = response.data.images_results[0]; // Ensure you are getting a valid image
      if (image) {
        setImageUrl(image.thumbnail); // Correctly set the image URL
      } else {
        setImageUrl(''); // Set to empty string if no image is found
      }
    } catch (error) {
      console.error('Error fetching image from proxy:', error);
    } finally {
      setLoadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Fetch the image and wait until the image URL is set
  await fetchImageFromProxy(bandName);

  // Create the new band object AFTER imageUrl is set
  const newBand: Band = {
    id: Date.now(),
    name: bandName,
    date,
    venue,
    comments,
    imageUrl, // Ensure this is set correctly after fetching
  };

  // Pass the band with imageUrl to the parent component
  onAddBand(newBand);

  // Reset form fields AFTER newBand is created and added
  setBandName('');
  setDate('');
  setVenue('');
  setComments('');
  setImageUrl(''); // Now it's safe to reset imageUrl
};

  
  return (
    <form className="flex flex-col space-y-4 p-8" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Band Name"
        value={bandName}
        onChange={(e) => {
          setBandName(e.target.value)
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