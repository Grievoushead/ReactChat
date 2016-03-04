import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/chat.jsx';
import { Provider } from 'react-redux';
import AppStore from './store/app_store';

// Provider will inject store inside each components context
ReactDOM.render(
  <Provider store={AppStore}>
    <Chat/>
  </Provider>,
  document.getElementById('chat__container'));
