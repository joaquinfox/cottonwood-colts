import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/roster">Roster</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
