import React from 'react';
import { NavLink } from 'react-router-dom';

const Headers = () => (
  <div>
    <h1>Math Magician</h1>
    <ul className="navItems">
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quotes">Quotes</NavLink>
      </li>
    </ul>
  </div>
);

export default Headers;
