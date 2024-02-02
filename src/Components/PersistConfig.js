import { persistReducer } from 'redux-persist';
<<<<<<< HEAD
import storage from 'redux-persist/lib/storage'; 
=======
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
>>>>>>> origin/main
import rootReducer from '../reducers/index';

const PersistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(PersistConfig, rootReducer);

export default persistedReducer;
