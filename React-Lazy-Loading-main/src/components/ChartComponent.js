import React from 'react';

function ChartComponent() {
  // Simulate chart data
  const chartData = [
    { month: 'Jan', sales: 1200, profit: 800 },
    { month: 'Feb', sales: 1900, profit: 1200 },
    { month: 'Mar', sales: 3000, profit: 1800 },
    { month: 'Apr', sales: 5000, profit: 3200 },
    { month: 'May', sales: 2000, profit: 1400 },
    { month: 'Jun', sales: 3000, profit: 2100 },
    { month: 'Jul', sales: 4000, profit: 2800 },
    { month: 'Aug', sales: 3500, profit: 2400 },
    { month: 'Sep', sales: 4500, profit: 3100 },
    { month: 'Oct', sales: 3800, profit: 2600 },
    { month: 'Nov', sales: 4200, profit: 2900 },
    { month: 'Dec', sales: 5000, profit: 3500 }
  ];

  const maxSales = Math.max(...chartData.map(d => d.sales));
  const maxProfit = Math.max(...chartData.map(d => d.profit));

  return (
    <div className="chart-component">
      <h3>Chart Component</h3>
      <p>This component would typically include a heavy charting library like Chart.js or D3.js, which is now loaded only when needed.</p>
      
      <div className="chart-container">
        <div className="chart-placeholder">
          📊 Interactive Chart Placeholder
          <br />
          <small>In a real app, this would be a Chart.js or D3.js visualization</small>
        </div>
        
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <h4>Sample Data (12 months):</h4>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '10px',
            marginTop: '15px'
          }}>
            {chartData.map((data, index) => (
              <div key={index} style={{ 
                background: '#f8f9fa', 
                padding: '10px', 
                borderRadius: '5px',
                fontSize: '12px'
              }}>
                <strong>{data.month}</strong>
                <br />
                Sales: ${data.sales.toLocaleString()}
                <br />
                Profit: ${data.profit.toLocaleString()}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '30px', padding: '20px', background: '#e9ecef', borderRadius: '8px' }}>
        <h4>Chart Component Benefits</h4>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>Heavy charting libraries loaded only when needed</li>
          <li>Complex data visualization components</li>
          <li>Reduces initial bundle size significantly</li>
          <li>Chart only loads when the chart tab is clicked</li>
          <li>Improves application startup time</li>
        </ul>
      </div>
    </div>
  );
}

export default ChartComponent; 