from bs4 import BeautifulSoup
import urllib.request


def naverwebtoonCrawling(genre):
    # 에피소드 상위 20개
    print('---------------{} top rank 20-----------------'.format(genre))
    # 별점순으로 정렬되어있는 url 입력
    episode_url = 'https://comic.naver.com/webtoon/genre?view=list&order=StarScore&genre={}'.format(
        genre)
    html = urllib.request.urlopen(episode_url)
    # BeuatifulSoup을 사용하여 html 정보를 가져온다.
    soupEpisode = BeautifulSoup(html, 'html.parser')
    # # 우리가 가져오고 싶은 정보는 tbody의 td태그 중 하나이다.
    tag_tbody = soupEpisode.find('tbody')
    idx = 1
    for td in tag_tbody.find_all('td', class_='subject'):
        if idx == 21:
            break
        title = td.find('strong')
        print('{}. {}'.format(idx, title.text))
        idx += 1


def main():
    print('-----------Naver Webtoon Crawling--------- ')
    naverwebtoonCrawling('episode')
    naverwebtoonCrawling('omnibus')
    naverwebtoonCrawling('story')


if __name__ == '__main__':
    main()
