import React from 'react';

function DataTable() {
  // Simulate a large dataset
  const data = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'][i % 5],
    status: ['Active', 'Inactive', 'Pending'][i % 3],
    lastLogin: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()
  }));

  return (
    <div className="data-table">
      <h3>Data Table Component</h3>
      <p>This component displays a large dataset with 50 rows, which would normally impact performance if loaded upfront.</p>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Status</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.department}</td>
                <td>
                  <span style={{ 
                    color: row.status === 'Active' ? '#28a745' : 
                           row.status === 'Inactive' ? '#dc3545' : '#ffc107',
                    fontWeight: 'bold'
                  }}>
                    {row.status}
                  </span>
                </td>
                <td>{row.lastLogin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div style={{ marginTop: '30px', padding: '20px', background: '#e9ecef', borderRadius: '8px' }}>
        <h4>Data Table Benefits</h4>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>50 rows of data loaded only when needed</li>
          <li>Complex table rendering with conditional styling</li>
          <li>Reduces initial JavaScript bundle size</li>
          <li>Table only renders when the data tab is clicked</li>
          <li>Improves memory usage and performance</li>
        </ul>
      </div>
    </div>
  );
}

export default DataTable; 