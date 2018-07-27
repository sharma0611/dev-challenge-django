import { combineReducers } from 'redux';
import { hasErrored, isLoading, monthlyData, formData} from './calculator';

export default combineReducers({
 monthlyData,
 hasErrored,
 isLoading,
 formData
});