import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import SearchPan from './SearchPan/SearchPan';
import Home from './Home/Home';
import Knowbase from './Knowbase/Knowbase';
import Requests from './Requests/Requests';
import Staff from './Staff/Staff';
import Clients from './Clients/Clients';
import Analytics from './Analytics/Analytics';
import Settings from './Settings/Settings';
import { fetchAll } from '../../../store/reducers/app';
import CreateReq from './CreateReq/CreateReq';
import EditReq from './EditReq/EditReq';
import { openCreateReq, openEditReq, closeEditReq } from '../../../store/reducers/main';
import { fetchReq } from '../../../store/reducers/editReq';

function Main(props) {
  const fetchAll = props.fetchAll;
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <div className="main">
      <SearchPan />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/knowbase' component={Knowbase} />
        <Route path='/requests' render={() =>
          <Requests isReady={props.isReady} error={props.error} data={props.data} openCreateReq={props.openCreateReq} fetchReq={props.fetchReq} />}
        />
        <Route path='/staff' component={Staff} />
        <Route path='/clients' component={Clients} />
        <Route path='/analytics' component={Analytics} />
        <Route path='/settings' component={Settings} />
      </Switch>
      {props.createReqIsOpen && <CreateReq />}
      {props.editReqIsOpen && <EditReq isReady={props.reqIsReady} error={props.reqError} closeEditReq={props.closeEditReq} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isReady: state.app.isReady,
    reqIsReady: state.editReq.isReady,
    reqError: state.editReq.error,
    error: state.app.error,
    data: state.app.data,
    createReqIsOpen: state.main.createReqIsOpen,
    editReqIsOpen: state.main.editReqIsOpen,
  };
};

export default connect(mapStateToProps, { fetchAll, openCreateReq, openEditReq, closeEditReq, fetchReq })(Main);
