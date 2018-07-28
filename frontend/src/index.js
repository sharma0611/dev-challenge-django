import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './Store/store'

const formData = {'initialDeposit': 1,
                  'monthlyDeposit': 1,
                  'interestRate': 0.25,
                  'interestPeriod': 12}

const initialState = {
	'monthlyData' : [
              {
                month: 1,
                amount: 0
              },
              {
                month: 510,
                amount: 600
              }
            ],
  'hasErrored': false,
  'isLoading': false,
  formData
};

const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();


