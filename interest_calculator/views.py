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
    if interest_rate:
        interest_rate = 1 + float(interest_rate) / 100
    result = []

    apply_interest = 6 #every 6 mts
    curr_balance = initial_deposit
    for curr_month in range(50*12):
        if curr_month % apply_interest == 0 and curr_month != 0: # interest applied at the start of the month
            curr_balance = curr_balance * interest_rate

        month_num = curr_month + 1
        curr_result = {'month' : month_num,
                'amount': curr_balance}

        result.append(curr_result)
        curr_balance += monthly_deposit #deposit made at the end of the month

    #if savings_amount is None or interest_rate is None:
    #    return HttpResponseBadRequest('Required parameters are not provided')

    return JsonResponse({'result': result})
