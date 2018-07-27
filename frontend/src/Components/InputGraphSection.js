import React, { Component } from "react"
import CurrencyInput from "./CurrencyInput"
import SliderInput from "./SliderInput"
import DisplayGraph from "./DisplayGraph"
import RadioInput from "./RadioInput"
import "./InputGraphSection.css"
import PropTypes from 'prop-types';


export default class InputGraphSection extends Component {
  static propTypes = {
    onFormChange: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(fieldId, fieldValue) {
    this.props.onFormChange(fieldId, fieldValue);
  }

  render() {
    const { data, formData } = this.props;
    const { initialDeposit, monthlyDeposit, interestRate, interestPeriod } = formData;

    return (
      <div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput fieldId='initialDeposit' defaultValue={initialDeposit} onFieldChange={this.onFieldChange} />

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput fieldId='monthlyDeposit' defaultValue={monthlyDeposit} onFieldChange={this.onFieldChange} />

          <p className="input-label">
            How much interest will you earn per period?
          </p>
          <SliderInput fieldId='interestRate' defaultValue={interestRate} onFieldChange={this.onFieldChange}/>
          <p className="input-label">
            How often is the interest rate applied?
          </p>
          <RadioInput fieldId='interestPeriod' defaultValue={interestPeriod} onFieldChange={this.onFieldChange}/>

        </div>
        <div className="financial-display">
          {/*We have included some sample data here, you will need to replace this
            with your own. Feel free to change the data structure if you wish.*/}
          <DisplayGraph {...{data}} />
        </div>
      </div>
    )
  }
}


