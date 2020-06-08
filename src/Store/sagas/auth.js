import {put} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

export function* logoutSaga(action){
	yield console.log('ok from auth saga');
	yield localStorage.removeItem('token');
	yield put({
		type:actionTypes.AUTH_LOGOUT
	})
	 yield console.log('ok from auth saga below');
}