import React from 'react';
import './ReqComment.css';

function reqComment (props) {
  const newDateString = (str) => {
    const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let newStr = '';
    let newMonth = '';
    newStr += str[8];
    newStr += str[9];
    newStr += ' ';
    newMonth += str[5];
    newMonth += str[6];
    newStr += month[+newMonth - 1];
    newStr += ', ';
    newStr += str[11];
    newStr += str[12];
    newStr += str[13];
    newStr += str[14];
    newStr += str[15];
    newStr += ' прокомментировал.';
    return newStr;
  }
  return (
    <div className="req-comment">
      <div className="req-comment__circle"></div>
      <div className="req-comment__name">Иванов Иванов</div>
      <div className="req-comment__date">{newDateString(props.lti.createdAt)}</div>
      <div className="req-comment__text">{props.lti.comment}</div>
    </div>
  );
};

export default reqComment;