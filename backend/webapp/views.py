from django.http import JsonResponse
from django.shortcuts import render
from django.template.response import TemplateResponse
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return TemplateResponse(request, ['webapp/index.html', 'webapp/default.html'])
    # return render(request, 'webapp/index.html', {})


@csrf_exempt
def test_api(request):
    import django
    return JsonResponse({'django': django.__version__})
