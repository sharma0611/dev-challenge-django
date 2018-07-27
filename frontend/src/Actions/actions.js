// update form action

export function updateForm(formData) {
	return {
		type: 'UPDATE_FORM',
		formData
	};
}

// error action

export function calcHasErrored(bool) {
	console.log(bool);
	return {
		type: 'HAS_ERRORED',
		hasErrored: bool
	};
}

// loading action

export function calcIsLoading(bool) {
	return {
		type: 'IS_LOADING',
		isLoading: bool
	};
}

// update with monthly data 

export function calcFetchSuccess(monthlydata) {
	return {
		type: 'CALC_SUCCESS',
		monthlydata
	};
}


