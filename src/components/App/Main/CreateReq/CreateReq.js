import React from 'react';
import { connect } from 'react-redux';
import './CreateReq.css';
import { updateNewReqName, updateNewReqDesc, saveNewReq } from '../../../../store/reducers/createReq';
import { closeCreateReq } from '../../../../store/reducers/main';

function CreateReq(props) {
  return (
    <section className="create-req">
      <div className="create-req__title">
        <div className="create-req__title__title">Новая заявка</div>
        <div className="create-req__title__cross" onClick={props.closeCreateReq}></div>
      </div>
      <div className="create-req__main">
        <p>Название</p>
        <textarea className="create-req__main__textarea1"
          value={props.newReqName}
          onChange={e => props.updateNewReqName(e.currentTarget.value)} />
        <p>Описание</p>
        <textarea className="create-req__main__textarea2"
          value={props.newReqDesc}
          onChange={e => props.updateNewReqDesc(e.currentTarget.value)} />
        <div className="main__save-btn" onClick={() => props.saveNewReq(props.newReqName, props.newReqDesc)}>Сохранить</div>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    newReqName: state.createReq.newReqName,
    newReqDesc: state.createReq.newReqDesc,
  }
}

export default connect(mapStateToProps, { updateNewReqName, updateNewReqDesc, saveNewReq, closeCreateReq })(CreateReq);
