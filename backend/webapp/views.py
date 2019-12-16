from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return render(request, 'webapp/index.html', {})


@csrf_exempt
def test_api(request):
    import django
    return JsonResponse({'django': django.__version__})
