import React from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import Order from './Order';
import Payment from './Payment';

const Checkout = () => {
    return (
      <div>
          <BrowserRouter>
              <nav>
                  <Link to="/order">Menu</Link>
              </nav>
                <Routes>
                    <Route path="order" element={<Order />} />
                    <Route path="payment" element={<Payment />} />
                </Routes>
          </BrowserRouter>
      </div>
    );
};

export default Checkout;
