import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './RadioInput.css'

export default class CurrencyInput extends Component {
  static propTypes = {
    onFieldChange: PropTypes.func,
    defaultValue: PropTypes.number,
  }

	constructor(props) {
		super(props);

		this.state = {
			hasFocus: false,
			value: props.defaultValue
		}
	}

	handleChange(e) {
		const value = parseInt(e.target.value);
		this.setState({value});
		this.props.onFieldChange(this.props.fieldId, value);
	}

	render() {

		return (
			<div onChange={this.handleChange.bind(this)}>
        		<input type="radio" value="12" checked={this.state.value === 12} name="interestPeriod"/> Annual
       			<input type="radio" value="3" checked={this.state.value === 3} name="interestPeriod"/> Quarterly
        		<input type="radio" value="1" checked={this.state.value === 1} name="interestPeriod"/> Monthly
      		</div>
		)
	}
}
