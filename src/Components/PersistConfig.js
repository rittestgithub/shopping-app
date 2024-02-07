import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; 


import rootReducer from '../reducers/index';

const PersistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(PersistConfig, rootReducer);

export default persistedReducer;
