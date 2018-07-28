from rest_framework import status
from rest_framework.test import APITestCase, APIRequestFactory, force_authenticate, APIClient
from interest_calculator.views import CalculateAPI
import json

#client = APIClient()
#client.force_authenticate(user=None)

class CalculateTestCase(APITestCase):

    factory = APIRequestFactory()
    view = CalculateAPI.as_view()

    def test_empty_data(self):
        """ 
        Test for post with no data
        """
        post_data = {}
        request = CalculateTestCase.factory.post('/calculate/', json.dumps(post_data), content_type='application/json')
        response = CalculateTestCase.view(request)
        self.assertTrue(status.is_client_error(response.status_code))

    def test_real_data(self):
        """ 
        Test for post with acceptable values
        """
        post_data = {'monthlyDeposit': 1, 'initialDeposit': 1, 'interestRate': 2, 'interestPeriod': 12}
        request = CalculateTestCase.factory.post('/calculate/', json.dumps(post_data), content_type='application/json')
        response = CalculateTestCase.view(request)
        self.assertTrue(status.is_success(response.status_code))

    def test_response_length(self):
        """ 
        Test to ensure return data has exactly 50 * 12 months of data
        """
        post_data = {'monthlyDeposit': 1, 'initialDeposit': 1, 'interestRate': 2, 'interestPeriod': 12}
        request = CalculateTestCase.factory.post('/calculate/', json.dumps(post_data), content_type='application/json')
        response = CalculateTestCase.view(request)
        self.assertTrue(status.is_success(response.status_code))
        # if valid, we can render for content
        response.render()
        return_data = json.loads(response.content)
        monthly_data = return_data['result']
        self.assertTrue(len(monthly_data) == 50*12)

    def test_invalid_data(self):
        """ 
        Test posting invalid values
        """
        post_data = {'monthlyDeposit': -1, 'initialDeposit': 1, 'interestRate': 4, 'interestPeriod': 3}
        request = CalculateTestCase.factory.post('/calculate/', json.dumps(post_data), content_type='application/json')
        response = CalculateTestCase.view(request)
        self.assertTrue(status.is_client_error(response.status_code))

