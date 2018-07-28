from django.http import JsonResponse, HttpResponseBadRequest
import json
from rest_framework.response import Response
from rest_framework import serializers, views


class CalculateSerializer(serializers.Serializer):
    """
    Serializer to provide validation for Calculate API inputs
    """
    monthlyDeposit = serializers.DecimalField(max_digits=15, decimal_places=2, min_value=0)
    initialDeposit = serializers.DecimalField(max_digits=15, decimal_places=2, min_value=0)
    interestRate = serializers.DecimalField(max_digits=15, decimal_places=2, min_value=0)
    accepted_periods = ((1, "Monthly"),
                        (3, "Quarterly"),
                        (12, "Annually"))
    interestPeriod = serializers.ChoiceField(choices=accepted_periods)

class CalculateAPI(views.APIView):
    """ 
    Class based API view for Calculate to provide POST method
    """
    def post(self, request):
        # Validate the incoming input (provided through query parameters)
        params = json.loads(request.body)
        serializer = CalculateSerializer(data=params)
        if serializer.is_valid():

            # Get the model input
            data = serializer.validated_data

            monthly_deposit = data["monthlyDeposit"]
            initial_deposit = data["initialDeposit"]
            interest_rate = data["interestRate"]
            interest_period = data["interestPeriod"]
            
            # Perform the calculation
            result = calculate_monthly_balance(initial_deposit, monthly_deposit, interest_rate, interest_period)

            # Return 
            return Response({
                "result": result
            })

        else:
            return HttpResponseBadRequest(serializer.errors)


# helper fn to calculate monthly account balance for 50 years
def calculate_monthly_balance(initial_deposit, monthly_deposit, interest_rate, interest_period):
    result = []
    curr_balance = float(initial_deposit)
    monthly_deposit = float(monthly_deposit)
    interest_rate = float(interest_rate)
    interest_rate = 1 + float(interest_rate) / 100
    for curr_month in range(50*12):
        if curr_month % interest_period == 0 and curr_month != 0: # interest applied at the start of the month
            curr_balance = curr_balance * interest_rate

        month_num = curr_month + 1
        curr_result = {'month' : month_num,
                'amount': round(curr_balance, 2)}

        result.append(curr_result)
        curr_balance += monthly_deposit #deposit made at the end of the month

    return result

