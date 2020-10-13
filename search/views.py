from django.shortcuts import render, get_object_or_404
from .models import Result


def article(request, article_id):
    result = get_object_or_404(Result, pk=article_id)
    return render(request, 'article/index.html', {'result': result})


def search(request):
    def find_nearest(content: str, keyword: str, first_exist: int) -> int:
        output = 0
        for i in range(first_exist + 1, -1, -1):
            if content[i] == keyword:
                output = i + 1
                break
        return output

    result = None
    keyword = request.GET.get('keyword')
    if keyword is not '':
        title_result = set(Result.objects.filter(title__contains=keyword))
        content_result = set(Result.objects.filter(content__contains=keyword))
        result = title_result | content_result
        for element in result:
            element.content = element.content.replace('<br>', ' ')
            first_exist_position = element.content.find(keyword)
            if first_exist_position == -1:
                first_exist_position += 1
            find_list = [' ', '。', '！']
            previous_punct_position = []
            for ele in find_list:
                previous_punct_position.append(find_nearest(element.content, ele, first_exist_position))
            start_position = max(previous_punct_position)
            element.content = element.content[start_position:start_position + 50]
    return render(request, 'search/index.html', {'result': result, 'keyword': keyword})


def homepage(request):
    return render(request, 'homepage/index.html')
