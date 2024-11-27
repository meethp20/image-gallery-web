import React, { useState } from 'react';
import './App.css';


function App() {
  const [images, setImages] = useState([]);

  //input
  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  // Remove 
  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="App">
      <h1>Image Upload Website</h1>
      
      
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
      />
      
      <div className="image-gallery">
        {/* Render images if there are any */}
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt={`uploaded-preview-${index}`} width="300px" />
              <button onClick={() => removeImage(index)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No images uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
