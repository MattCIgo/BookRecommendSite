from django.http import JsonResponse

# first endpoint
def temp_endpoint1(request):
    #test
    testDict = {
        1: 'Hi',
        2: 'hi',
        3: 'hello'
    }

    return JsonResponse(testDict)

# second endpoint
def temp_endpoint2(request):
    #test
    Dict = {
        1: 'bye',
        2: 'buy',
        3: 'cya'
    }

    return JsonResponse(Dict)