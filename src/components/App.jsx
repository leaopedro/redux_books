import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import Main from './Main';
import './../style/main.less';

const App = ({ store }) => (
  <Provider store={store}>
    <Main />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
