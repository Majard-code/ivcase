import React from 'react';
import './MenuItem.css';


function MenuItem(props) {
  return (
    <div className="menu-item">
      <img src={require(`./Imgs/${props.img}.png`)} alt={props.name}/>
      <p>{props.name}</p>
    </div>
  );
}

export default MenuItem;
