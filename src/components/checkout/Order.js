import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <div>
            <h2>Order</h2>
            <p>This is the order step.</p>
            <Link to="/payment">Proceed to payment</Link>
        </div>
    );
};

export default Order;