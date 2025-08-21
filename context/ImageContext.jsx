// context/ImageContext.js
import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImage must be used within an ImageProvider');
  }
  return context;
};

export const ImageProvider = ({ children }) => {
  const [imageUri, setImageUri] = useState(null);
  const [location, setLocation] = useState(null);

  const updateImage = (uri) => {
    setImageUri(uri);
  };

  const updateLocation = (loc) => {
    setLocation(loc);
  };

  const clearData = () => {
    setImageUri(null);
    setLocation(null);
  };

  return (
    <ImageContext.Provider value={{ 
      imageUri, 
      location, 
      updateImage, 
      updateLocation,
      clearData
    }}>
      {children}
    </ImageContext.Provider>
  );
};