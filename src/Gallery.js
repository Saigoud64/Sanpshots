import React from 'react';

const Gallery = ({ data }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '10px' }}>
      {data.map((image) => (
        <div key={image.id}>
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            alt={image.title}
            height="200"
            width="250"
            style={{ marginBottom: '10px' }}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
