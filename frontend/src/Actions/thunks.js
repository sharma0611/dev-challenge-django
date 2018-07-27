import request from "axios"
import { calcIsLoading, calcFetchSuccess, calcHasErrored, updateForm} from './actions'
 // action creator for API call


export function fetchMonthlyData(queryData) {
	return (dispatch) => {
		dispatch(calcIsLoading(true));
		request.post("/calculate/", queryData)
		.then((response) => {
                if (response.status < 200 || response.status > 299) {
                    throw Error(response.statusText);
                };
                dispatch(calcIsLoading(false));
                const { data } = response;
                const { result } = data;
                return result;
            })
            .then((monthlydata) => dispatch(calcFetchSuccess(monthlydata)))
            .catch(() => dispatch(calcHasErrored(true)));
	};
}

// action creator for updating store + API call

export function updateFieldandData(queryData, fieldId, fieldValue) {
	return (dispatch) => {
		if (!isNaN(fieldValue)) {
		dispatch(calcHasErrored(false));
		const newquerydata = { ...queryData, [fieldId]: fieldValue };
		dispatch(fetchMonthlyData(newquerydata));
		dispatch(updateForm(newquerydata));
	} else {
		dispatch(calcHasErrored(true));
	}
	};
}
