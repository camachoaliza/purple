from bs4 import BeautifulSoup
import requests

urls = ["https://www.cnn.com/specials/politics/2020-election-coverage"]

def scrapeLinks(url, keyword):
    # Getting the webpage, creating a Response object.
    response = requests.get(url)

    # Extracting the source code of the page.
    data = response.text

    # Passing the source code to BeautifulSoup to create a BeautifulSoup object for it.
    soup = BeautifulSoup(data, 'lxml')

    # Extracting all the <a> tags into a list.
    tags = soup.find_all('a')

    links = []
    # Extracting URLs from the attribute href in the <a> tags.
    for tag in tags:
        href = tag.get('href')
        if (keyword in href):
            links.append(href)

    return links

i = 0
cnnLinks = []
for url in urls:
    if (i == 0):
        cnnLinks = scrapeLinks(urls[0], "politics")
        cnnLinks = ["https://www.cnn.com" + link for link in cnnLinks]
    i+=1

print (cnnLinks)
f = open("cnnLinks.txt", "w")
for link in cnnLinks:
    f.write(link + "\n")
f.close()
