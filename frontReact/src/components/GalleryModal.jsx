import React from 'react';

const GalleryModal = ({ onClose, onSelect }) => {
  const gallery = [
    '/gallery/img1.jpg', '/gallery/img2.jpg', '/gallery/img3.jpg'
  ];
  return (
    <div className="modal">
      <button onClick={onClose}>Close</button>
      {gallery.map((src, idx) => (
        <img key={idx} src={src} alt="gallery" width={100}
             onClick={() => { onSelect(src); onClose(); }} />
      ))}
    </div>
  );
};

export default GalleryModal;