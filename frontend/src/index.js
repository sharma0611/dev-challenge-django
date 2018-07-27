import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './Store/store'

const formData = {'initialDeposit': 1,
                  'monthlyDeposit': 1,
                  'interestRate': 4}

const initialState = {
	'monthlyData' : [
              {
                month: 1,
                amount: 500
              },
              {
                month: 2,
                amount: 700
              },
              {
                month: 3,
                amount: 1000
              },
              {
                month: 4,
                amount: 1500
              }
            ],
  'hasErrored': false,
  'isLoading': false,
  formData
};

const store = configureStore(initialState);

console.log(store)
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();


