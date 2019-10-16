import React from 'react';
import { connect } from 'react-redux';
import './EditReq.css';
import { closeEditReq } from '../../../../store/reducers/main';
import ReqComment from './ReqComment/ReqComment';
import { updateNewReqComment, saveNewReqComment, openStatus, closeStatus, openExecutor, closeExecutor } from '../../../../store/reducers/editReq';
import calendar from './Imgs/calendar.png'

function EditReq(props) {
  const newData = str => {
    if (str === null){
      return 'Не установлен.';
    } else {
      return str[8] + str[9] + '.' + str[5] + str[6] + '.' + str[0] + str[1] + str[2] + str[3] + 'г.';
    }
  }
  if (!props.isReady) {
    if (props.error) {
      return (
        <section className="edit-req">
          <div className="edit-req__title">
            <div className="edit-req__title__num">Ошибка. Обратитесь в техподдержку.</div>
            <div></div>
            <div className="edit-req__title__cross" onClick={props.closeEditReq}></div>
          </div>

        </section>
      );
    } else {
      return (
        <section className="edit-req">
          <div className="edit-req__title">
            <div className="edit-req__title__num">Загрузка...</div>
            <div></div>
            <div className="edit-req__title__cross" onClick={props.closeEditReq}></div>
          </div>
        </section>
      );
    };
  } else {
    return (
      <section className="edit-req">
        <div className="edit-req__title">
          <div className="edit-req__title__num">{`№ ${props.data.id}`}</div>
          <div className="edit-req__title__name">{props.data.name}</div>
          <div className="edit-req__title__cross" onClick={props.closeEditReq}></div>
        </div>
        <div className="edit-req__comments">
          <h3>Описание</h3>
          <p>{props.data.description}</p>
          <h3>Добавление комментария</h3>
          <textarea
            value={props.newReqComment}
            onChange={e => props.updateNewReqComment(e.currentTarget.value)} />
          <div className="main__save-btn">Сохранить</div>
          {props.data.lifetimeItems.map(lti => <ReqComment key={lti.id} lti={lti} />)}
        </div>
        <div className="edit-req__info">
          {!props.statusIsOpen && <div className="edit-req__info__status">
            <div className="edit-req__info__status1" style={{ backgroundColor: props.data.statusRgb }}></div>
            <div className="edit-req__info__status2" onClick={props.openStatus}>{props.data.statusName}</div>
          </div>}
          {props.statusIsOpen && <div className="edit-req__info__status edit-req__info__list">
            {props.statuses.map(status =>
              <React.Fragment key={status.id}>
                <div className="edit-req__info__status1" style={{ backgroundColor: status.rgb }}></div>
                <div className="edit-req__info__status2" onClick={props.closeStatus}>{status.name}</div>
              </React.Fragment>
            )}
          </div>}
          <h3>Заявитель</h3>
          <p>{props.data.initiatorName}</p>
          <h3>Создана</h3>
          <p>{props.data.initiatorName}</p>
          <h3>Исполнитель</h3>
          {!props.executorIsOpen && <div className="edit-req__info__executor" onClick={props.openExecutor}>{props.data.executorName}</div>}
          {props.executorIsOpen && <div className=" edit-req__info__list">
          {props.users.map(user =>
              <div className="edit-req__info__executor" onClick={props.closeExecutor} key={user.id}>{user.name}</div>
            )}
            </div>}
          <h3>Приоритет</h3>
          <p>{props.data.priorityName}</p>
          <h3>Срок</h3>
          <div className="edit-req__info__data">
            <img src={calendar} alt="Календарь" />
            <p>{newData(props.data.resolutionDatePlan)}</p>
          </div>
          <h3>Теги</h3>
          <div className="edit-req__info__tegs">
            {props.data.tags.map(tag => <div key={tag.id}>{tag.name}</div>)}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    isReady: state.editReq.isReady,
    error: state.editReq.error,
    data: state.editReq.data,
    statuses: state.app.data[2],
    statusIsOpen: state.editReq.statusIsOpen,
    users: state.app.data[7],
    executorIsOpen: state.editReq.executorIsOpen,
    newReqComment: state.editReq.newReqComment,
  };
};

export default connect(mapStateToProps, { closeEditReq, updateNewReqComment, saveNewReqComment, openStatus, closeStatus, openExecutor, closeExecutor })(EditReq);