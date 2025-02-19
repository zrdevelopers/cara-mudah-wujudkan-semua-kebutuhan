// reducer.js
import { combineReducers } from 'redux';

import { aboutUsReducer } from '@/redux/reducer/about-us/reducer';

const rootReducer = combineReducers({
  aboutUs: aboutUsReducer
});

export default rootReducer;
