
import React, { Suspense, lazy, useState } from 'react';
import './App.css';

// Lazy load different components
const HeavyComponent = lazy(() => import('./components/HeavyComponent'));
const ImageGallery = lazy(() => import('./components/ImageGallery'));
const DataTable = lazy(() => import('./components/DataTable'));
const ChartComponent = lazy(() => import('./components/ChartComponent'));

function App() {
  const [activeTab, setActiveTab] = useState('heavy');
  const [showComponent, setShowComponent] = useState(false);

  const renderComponent = () => {
    switch (activeTab) {
      case 'heavy':
        return <HeavyComponent />;
      case 'gallery':
        return <ImageGallery />;
      case 'table':
        return <DataTable />;
      case 'chart':
        return <ChartComponent />;
      default:
        return <HeavyComponent />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Lazy Loading & Suspense Demo</h1>
        <p>Click on different tabs to see lazy loading in action!</p>
      </header>

      <div className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="tab-container">
          <button 
            className={`tab ${activeTab === 'heavy' ? 'active' : ''}`}
            onClick={() => setActiveTab('heavy')}
          >
            Heavy Component
          </button>
          <button 
            className={`tab ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            Image Gallery
          </button>
          <button 
            className={`tab ${activeTab === 'table' ? 'active' : ''}`}
            onClick={() => setActiveTab('table')}
          >
            Data Table
          </button>
          <button 
            className={`tab ${activeTab === 'chart' ? 'active' : ''}`}
            onClick={() => setActiveTab('chart')}
          >
            Chart Component
          </button>
        </div>

        <div className="component-container">
          <Suspense fallback={
            <div className="loading-fallback">
              <div className="spinner"></div>
              <p>Loading {activeTab} component...</p>
              <small>This component is being lazy loaded!</small>
            </div>
          }>
            {renderComponent()}
          </Suspense>
        </div>
      </div>

      <div className="explanation-section">
        <h2>How Lazy Loading Works</h2>
        <div className="explanation-grid">
          <div className="explanation-card">
            <h3>1. Code Splitting</h3>
            <p>React.lazy() creates a separate bundle for each component, reducing the initial bundle size.</p>
            <code>const HeavyComponent = lazy(() => import('./compon...'));</code>
          </div>
          
          <div className="explanation-card">
            <h3>2. Suspense Boundary</h3>
            <p>Suspense catches the loading state and shows a fallback while the component loads.</p>
            <code>{'<Suspense fallback={...}>'}</code>
          </div>
          
          <div className="explanation-card">
            <h3>3. Dynamic Loading</h3>
            <p>Components are only loaded when they're actually needed, improving performance.</p>
            <code>// Component loads only when tab is clicked</code>
          </div>
          
          <div className="explanation-card">
            <h3>4. Error Boundaries</h3>
            <p>Always wrap lazy components in error boundaries to handle loading failures gracefully.</p>
            <code>// Error boundaries catch loading errors</code>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Lazy Loading</h2>
        <ul>
          <li><strong>Faster Initial Load:</strong> Smaller initial bundle size</li>
          <li><strong>Better Performance:</strong> Load components only when needed</li>
          <li><strong>Improved UX:</strong> Users see content faster</li>
          <li><strong>Bandwidth Savings:</strong> Reduced data transfer</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
