import React, {Component} from 'react'
import {dispatch} from '../store/store'
import action from '../store/action'

export default class SagaTest extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<p>点击如下按钮，查看控制台的打印</p>
				<button onClick={() => dispatch(action('add'))}>add</button>
				<button onClick={() => dispatch(action('sub'))}>sub</button>
			</div>
		)
	}
}