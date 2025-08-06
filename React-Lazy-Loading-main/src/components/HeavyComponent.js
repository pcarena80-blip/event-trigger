import React from 'react';

function HeavyComponent() {
  // Simulate a heavy component with lots of content
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Feature ${i + 1}`,
    description: `This is a detailed description for feature ${i + 1}. It contains lots of information that makes this component heavy.`,
    status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Completed'
  }));

  return (
    <div className="heavy-component">
      <h3>Heavy Component Loaded!</h3>
      <p>This component contains a lot of content and would normally slow down the initial page load.</p>
      
      <div className="content-grid">
        {items.map(item => (
          <div key={item.id} className="content-item">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span style={{ 
              color: item.status === 'Active' ? '#28a745' : 
                     item.status === 'Pending' ? '#ffc107' : '#6c757d'
            }}>
              Status: {item.status}
            </span>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '30px', padding: '20px', background: '#e9ecef', borderRadius: '8px' }}>
        <h4>Why This Component is "Heavy"</h4>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>Contains 20 feature cards with detailed content</li>
          <li>Each card has multiple DOM elements</li>
          <li>Includes conditional styling and complex layouts</li>
          <li>Would normally be bundled with the main app</li>
          <li>Now loads only when needed via lazy loading!</li>
        </ul>
      </div>
    </div>
  );
}

export default HeavyComponent; 