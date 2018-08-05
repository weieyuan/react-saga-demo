import {
	combineReducers
} from 'redux'

const initSagaTestState = {
	a: 0,
	b: 0,
	c: 0,
	d: 0
}

function sagaTest(state = initSagaTestState, action) {
	switch (action.type) {
		case 'add':
			return { ...state,
				a: state.a + 1
			}
		case 'sub':
			return { ...state,
				a: state.a - 1
			}
		default:
			return state
	}
}

export default combineReducers ({
	sagaTest
})