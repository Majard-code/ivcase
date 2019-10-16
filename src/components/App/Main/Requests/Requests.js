import React from 'react';
import './Requests.css';

function Requests(props) {
  if (!props.isReady) {
    if (props.error) {
      return (
        <h1>Ошибка. Обратитесь в техподдержку.</h1>
      );
    } else {
      return (
        <h1>Загрузка...</h1>
      );
    };
  } else {
    return (
      <section className="requests">
        <div className="requests__btn" onClick={props.openCreateReq}>Создать заявку</div>
        <div className="requests__line requests__line_bold">
          <div className="requests__priority"></div>
          <div className="requests__id">ID</div>
          <div className="requests__name requests__vert-line requests__paddings">Название</div>
          <div className="requests__status-name-up requests__vert-line requests__paddings">Статус</div>
          <div className="requests__executor-name requests__vert-line requests__paddings">Исполнитель</div>
        </div>
        {props.data[4].map(requests =>
          <div className="requests__line" key={requests.id} id={requests.id} onClick={e => props.fetchReq(e.currentTarget.id)}>
            <div className="requests__priority" style={{ background: props.data[0].find(item => item.id === requests.priorityId).rgb }}></div>
            <div className="requests__id">{requests.id}</div>
            <div className="requests__name">{requests.name}</div>
            <div className="requests__status-name" style={{ backgroundColor: requests.statusRgb }}>{requests.statusName}</div>
            <div className="requests__executor-name">{requests.executorName}</div>
          </div>
        )}
      </section>
    );
  }
}

export default Requests;
