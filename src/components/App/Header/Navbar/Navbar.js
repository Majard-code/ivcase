import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo/Logo';
import MenuItem from './MenuItem/MenuItem';


const iMenuItems = [
  { id: 1, name: 'База знаний', img: 'knowbase', url: '/knowbase' },
  { id: 2, name: 'Заявки', img: 'requests', url: '/requests' },
  { id: 3, name: 'Сотрудники', img: 'staff', url: '/staff' },
  { id: 4, name: 'Клиенты', img: 'clients', url: '/clients' },
  { id: 5, name: 'Активы', img: 'analytics', url: '/analytics' },
  { id: 6, name: 'Настройки', img: 'settings', url: '/settings' }
];

function Navbar() {
  const menuItems = useState(iMenuItems)[0];

  return (
    <nav className="navbar">
      <NavLink to='/' className='navbar__link'><Logo /></NavLink>
      {menuItems.map((menuItems) =>
        <NavLink to={menuItems.url} className='navbar__link' activeClassName='navbar__link_active' key={menuItems.id}>
          <MenuItem name={menuItems.name} img={menuItems.img} />
        </NavLink>
      )
      }
    </nav>
  );
}

export default Navbar;
