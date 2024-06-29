import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('User'));
  const userId = user._id;

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get(`https://e-commerce-h20n.onrender.com/store-order/${userId}`);
        setOrders(response.data.data); // Assuming response.data contains the 'data' array with orders
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, [userId]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', padding: '16px', maxWidth: '960px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '24px', marginBottom: '24px' }}>
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Account Details</h2>
          <button style={{ border: '1px solid #4a90e2', borderRadius: '4px', padding: '8px 16px', fontSize: '0.875rem', cursor: 'pointer', backgroundColor: 'transparent', color: '#4a90e2', lineHeight: '1' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
              <path d="M12 20h9"></path>
              <path d="M9 13.5l3 3 3-3"></path>
              <path d="M21 20v-7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7"></path>
            </svg>
            Edit Profile
          </button>
        </div>
        <div style={{ display: 'grid', gap: '8px' }}>
          <div style={{ display: 'grid', gap: '4px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Name</label>
            <div style={{ fontSize: '1rem' }}>{`${user?.name}`}</div>
          </div>
          <div style={{ display: 'grid', gap: '4px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Email</label>
            <div>{user?.email}</div>
          </div>
          <div style={{ display: 'grid', gap: '4px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Phone</label>
            <div>{user?.phone}</div>
          </div>
          <div style={{ display: 'grid', gap: '4px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Address</label>
            <div style={{ fontSize: '1rem' }}>
              {user?.address}
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '24px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>Order History</h2>
        {orders.length > 0 ? (
          orders.map(order => (
            <div key={order._id} style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Order #{order._id}</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ fontSize: '0.875rem', color: '#333', textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px 0' }}>Product</th>
                    <th style={{ fontSize: '0.875rem', color: '#333', textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px 0' }}>Price</th>
                    <th style={{ fontSize: '0.875rem', color: '#333', textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px 0' }}>Quantity</th>
                    <th style={{ fontSize: '0.875rem', color: '#333', textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px 0' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map(product => (
                    <tr key={product._id}>
                      <td style={{ fontSize: '1rem', padding: '8px 0' }}>
                        <img src={product.url} alt={product.title.longTitle} style={{ maxWidth: '50px', marginRight: '8px', borderRadius: '4px' }} />
                        {product.title.longTitle}
                      </td>
                      <td style={{ fontSize: '1rem', padding: '8px 0' }}>${product.price.cost}</td>
                      <td style={{ fontSize: '1rem', padding: '8px 0' }}>{product.quantity}</td>
                      <td style={{ fontSize: '1rem', textAlign: 'right', padding: '8px 0' }}>${(product.price.cost * product.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'right', padding: '8px 0', fontWeight: 'bold' }}>Total:</td>
                    <td style={{ fontSize: '1rem', textAlign: 'right', padding: '8px 0' }}>${order.products.reduce((acc, product) => acc + (product.price.cost * product.quantity), 0).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
