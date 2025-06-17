import React, { useState } from 'react';
import GalleryModal from './GalleryModal';

const images = [
  '/images/type1.jpg', '/images/type2.jpg', '/images/type3.jpg'
];

const ImageSelector = ({ onSelect }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      {images.map((src, idx) => (
        <img key={idx} src={src} alt="type" width={100}
             onClick={() => setModalOpen(true)} />
      ))}
      {modalOpen && <GalleryModal onClose={() => setModalOpen(false)} onSelect={onSelect} />}
    </div>
  );
};

export default ImageSelector;