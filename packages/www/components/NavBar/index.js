import React from 'react';
import Link from 'next/link';

const NavBar = () => (
  <nav className="navigation">
    <section className="container">
      <div className="navigation-list float-left">
        <div className="navigation-item">
          <Link className="navigation-link" href="/profile">
            <a>Profile</a>
          </Link>
        </div>
        <div className="navigation-item">
          <Link className="navigation-link" href="/logout">
            <a>Logout</a>
          </Link>
        </div>
      </div>
    </section>
  </nav>
);
export default NavBar;
