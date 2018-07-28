# Finimize dev challenge

##  Testing
* Testing the Django API

```sh
python manage.py migrate && python manage.py test
```

This creates a temporary in-memory database for unit testing with Django REST & runs the tests described in `interest_calculator/tests.py`

* Testing React Components

```sh
yarn test
```

This will run Jest + Enzyme tests found at `frontend/.../Components/__tests__`

## Change Log / Notes

### Front End

* Added Redux + Thunk for state management + API calls
* Added reducers, actions, thunks
* App.js is the only connected component to redux
* App passes down callback to child components so on form value change, we call a thunk to dispatch appropriate actions to update values + call API and get new graph data
* Added radio component that contains Annual, Quarterly, Monthly options
* Added basic tests for radio component 
* No UI changes other than radio component
* Next Steps: Should split radio component into map function + one reusable component and no references to "Annually, Monthly, etc." for abstraction + reusability 

### Back End

* Replaced Django API with Django REST API to support validation with serializer and return well-informed errors out of the box
* Added basic logic to calculate and return monthly data
* Added tests 
* Next Steps: For production purposes, we should use CORS headers between django server and react server. Since this is designed to be a POST request, we should always have CSRF token in case this API is ever changed to allow updates to server state. 


## Python & Django setup

* Install `python3` via brew
* Clone the repo
* cd into repo
* Install `virtualenv` using `pip3` (think yarn)

```sh
sudo pip3 install virtualenv
```

* Create a virtualenv for the project

```sh
virtualenv -p python3 venv
```

If you're having trouble completing this step, try upgrading virtualenv first `pip3 install --upgrade virtualenv`

* Activate the virtualenv

```sh
source venv/bin/activate
```

* Install dependencies in the new virtualenv

```
pip3 install -r requirements.txt
```

```
python3 manage.py runserver
```

* Server should be running at http://localhost:8000


 ## Client setup

 * cd into `frontend` and run `yarn install`

 * Run `yarn start`. 

The webapp should now be running at http://localhost:3000 🚀


## The challenge

Create a web-app that shows how much you can expect to make from your savings
over time.

The app must satisfy the following Acceptance Criteria (ACs):

* It should allow the user to vary the initial savings amount, monthly deposit and interest rate through the UI
* It should display how much the user's initial savings amount will be worth
  over the next 50 years, to a monthly precision. This should assume that the monthly amount is paid in each month, and the value rises with the interest rate supplied.
* It should allow the user to select how often interest is paid - either 'Monthly', 'Quarterly' or 'Annually'
* All calculations must take place server-side, and all monthly projection data should be returned via an endpoint
* The calculations must be triggered onChange of any input, to give live feedback on the input data. The performance (try the slider) should be reasonable.
* You can use any tech stack on the client you like to manage app state and server communication (e.g. Redux with Thunk/Saga/other API client, Relay/Apollo/GraphQL etc.)

### Our Guidance

The challenge should not take any more than 2-4 hours. You do not need to complete the challenge in one go.

Although the API might be returning relatively straightforward content, please try and write the API code as if you were building something more complex. We would like to gain an idea of how you would go about structuring API code.

Feel free to make any changes to the UI you see fit, although please don't prioritise styling! Something basic will do just fine.

Do you test drive your code? This is something we value - any indicator of BDD/TDD would make us smile.

When you are finished, you should send us a link to the codebase, preferably via git (e.g. github) showing multiple commits, so we can see its evolution.
