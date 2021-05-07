import {combineReducers} from 'redux';
import filmes from './filmes/reducer';
import cinemas from './cinemas/reducer';
import sessoes from './sessoes/reducer';

export default combineReducers({
  filmes,
  cinemas,
  sessoes
});
