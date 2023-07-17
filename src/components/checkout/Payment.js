import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <h2>Payment</h2>
            <p>This is the payment step.</p>
            <Link to="/checkout">Proceed to Checkout</Link>
        </div>
    );
};

export default Payment;
