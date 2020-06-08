import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {logoutSaga} from './auth';


export function* watchAuth(){
	yield console.log('ok from index saga');
	yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT,logoutSaga);
}