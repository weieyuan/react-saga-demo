import {
	takeEvery,
	take,
	select,
	all
} from 'redux-saga/effects'

function* listenEvery() {
	yield takeEvery('add', getState)
	yield takeEvery('sub', getState)
}

function* getState() {
	const state = yield select()
	console.log('state is: ')
	console.log(state)
}

export default function* rootSaga() {
	yield all([
		listenEvery()
	])
}