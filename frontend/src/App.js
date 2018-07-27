import React, { Component } from "react"
import InputGraphSection from './Components/InputGraphSection'
import "./App.css"

import { connect } from 'react-redux';
import { updateFieldandData } from './Actions/thunks'


class App extends Component {

	constructor(props) {
		super(props);
		this.onFormChange = this.onFormChange.bind(this);
	}
	
	onFormChange(fieldId, fieldValue) {
		const { formData } = this.props;
		this.props.updateForm(formData, fieldId, fieldValue);
	}

	render() {
	    const {monthlyData, hasErrored, formData } = this.props;
	    var data = monthlyData;

	    if (hasErrored) {
	    	// show flat line on error
	    	data = [
              {
                month: 1,
                amount: 0
              },
              {
                month: 2,
                amount: 0
              },
              {
                month: 3,
                amount: 0
              },
              {
                month: 4,
                amount: 0
              }
            ];
        }

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Finimize dev challenge</h1>
				</header>
                    {
					 	<InputGraphSection 
					 	{...{data}} 
					 	{...{formData}} 
					 	onFormChange={this.onFormChange}
					 	/>
                    }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        monthlyData: state.monthlyData,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        formData: state.formData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateForm: (query, fieldId, fieldValue) => dispatch(updateFieldandData(query, fieldId, fieldValue))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

