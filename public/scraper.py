from bs4 import BeautifulSoup
import requests
import re

num_articles = 20

def getTitle(url):
    # Getting the webpage, creating a Response object.
    response = requests.get(url)

    # Extracting the source code of the page.
    data = response.text

    # Passing the source code to BeautifulSoup to create a BeautifulSoup object for it.
    soup = BeautifulSoup(data, 'lxml')

    # Extracting all the <a> tags into a list.
    if (soup.find('title') is not None):
        return soup.find('title').text

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

# CNN
cnnUrl = "https://www.cnn.com/specials/politics/2020-election-coverage"
cnnLinks = scrapeLinks(cnnUrl, "politics")
cnnLinks = ["https://www.cnn.com" + link for link in cnnLinks]
f = open("cnnLinks.txt", "w")

i = 0
everyOther = 0
for link in cnnLinks:
    if (re.search('\d{4}[/.-]\d{2}[/.-]\d{2}', link)) and i < num_articles and everyOther%2 ==0:
        f.write(getTitle(link) + ",, " + link + "\n")
        i += 1
    everyOther += 1
f.close()
