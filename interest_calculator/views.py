from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json

@require_POST
@csrf_exempt
def calculate(request):
    params = json.loads(request.body)
    monthly_deposit = params.get('monthlyDeposit', None)
    initial_deposit = params.get('initialDeposit', None)
    interest_rate = params.get('interestRate', None) 
    interest_period = params.get('interestPeriod', None) 
    if interest_rate:
        interest_rate = 1 + float(interest_rate) / 100
    result = []

    curr_balance = initial_deposit
    for curr_month in range(50*12):
        if curr_month % interest_period == 0 and curr_month != 0: # interest applied at the start of the month
            curr_balance = curr_balance * interest_rate

        month_num = curr_month + 1
        curr_result = {'month' : month_num,
                'amount': round(curr_balance, 2)}

        result.append(curr_result)
        curr_balance += monthly_deposit #deposit made at the end of the month

    if monthly_deposit is None or interest_rate is None or initial_deposit is None or interest_period is None:
        return HttpResponseBadRequest('Required parameters are not provided')

    return JsonResponse({'result': result})
