import React from 'react';

function ImageGallery() {
  // Simulate image gallery with placeholder images
  const images = [
    { id: 1, src: 'https://picsum.photos/300/200?random=1', title: 'Nature Scene 1' },
    { id: 2, src: 'https://picsum.photos/300/200?random=2', title: 'Nature Scene 2' },
    { id: 3, src: 'https://picsum.photos/300/200?random=3', title: 'Nature Scene 3' },
    { id: 4, src: 'https://picsum.photos/300/200?random=4', title: 'Nature Scene 4' },
    { id: 5, src: 'https://picsum.photos/300/200?random=5', title: 'Nature Scene 5' },
    { id: 6, src: 'https://picsum.photos/300/200?random=6', title: 'Nature Scene 6' },
    { id: 7, src: 'https://picsum.photos/300/200?random=7', title: 'Nature Scene 7' },
    { id: 8, src: 'https://picsum.photos/300/200?random=8', title: 'Nature Scene 8' },
    { id: 9, src: 'https://picsum.photos/300/200?random=9', title: 'Nature Scene 9' },
    { id: 10, src: 'https://picsum.photos/300/200?random=10', title: 'Nature Scene 10' },
    { id: 11, src: 'https://picsum.photos/300/200?random=11', title: 'Nature Scene 11' },
    { id: 12, src: 'https://picsum.photos/300/200?random=12', title: 'Nature Scene 12' }
  ];

  return (
    <div className="image-gallery">
      <h3>Image Gallery Component</h3>
      <p>This component loads multiple high-resolution images, which would normally impact initial page load performance.</p>
      
      <div className="image-grid">
        {images.map(image => (
          <div key={image.id} className="image-item">
            <img 
              src={image.src} 
              alt={image.title}
              loading="lazy" // Additional lazy loading for images
            />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '30px', padding: '20px', background: '#e9ecef', borderRadius: '8px' }}>
        <h4>Image Gallery Benefits</h4>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>12 high-resolution images loaded on demand</li>
          <li>Uses both component-level and image-level lazy loading</li>
          <li>Reduces initial bundle size significantly</li>
          <li>Images only load when the gallery tab is clicked</li>
          <li>Improves overall application performance</li>
        </ul>
      </div>
    </div>
  );
}

export default ImageGallery; 