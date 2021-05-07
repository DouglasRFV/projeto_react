import {all, fork} from 'redux-saga/effects';
import filmes from './filmes/sagas';
import cinemas from './cinemas/sagas';

export default function* () {
  yield all([
    fork(filmes),
    fork(cinemas),
  ]);
}
