import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from '../reducers/index';

const PersistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(PersistConfig, rootReducer);

export default persistedReducer;
