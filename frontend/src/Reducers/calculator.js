export function hasErrored(state=false, action) {
	switch (action.type) {
		case 'HAS_ERRORED':
			return action.hasErrored;
		default:
			return state;
	}
}

export function isLoading(state=false, action) {
	switch (action.type) {
		case 'IS_LOADING':
			return action.isLoading;
		default:
			return state;
	}
}

export function monthlyData(state=[], action) {
	switch (action.type) {
		case 'CALC_SUCCESS':
			return action.monthlydata;
		default:
			return state;
	}
}

export function formData(state={}, action) {
	switch (action.type) {
		case 'UPDATE_FORM':
			return action.formData;
		default:
			return state;
	}
}
