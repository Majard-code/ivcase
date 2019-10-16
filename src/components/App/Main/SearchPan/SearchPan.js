import React from 'react';
import './SearchPan.css';

function SearchPan() {
  return (
    <div className="search-pan">
      <input type='text' placeholder='Введите Фамилию, Статус, Приоритет, Тег и т.д. чтобы найти заявки' />
    </div>
  );
}

export default SearchPan;
