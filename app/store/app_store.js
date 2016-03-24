import { createStore } from 'redux';
import AppReducer from './reducers/app_reducer';

const AppStore = createStore(AppReducer);

console.log('Initial store state');
console.log(AppStore.getState());

export default AppStore;
