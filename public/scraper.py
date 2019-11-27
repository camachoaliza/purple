from bs4 import BeautifulSoup
import requests
import re
from requests.exceptions import ConnectionError

num_articles = 5

def getTitle(url):
    try:
        # Getting the webpage, creating a Response object.
        response = requests.get(url)

        # Extracting the source code of the page.
        data = response.text

        # Passing the source code to BeautifulSoup to create a BeautifulSoup object for it.
        soup = BeautifulSoup(data, 'lxml')

        # Extracting all the <a> tags into a list.
        if (soup.find('title') is not None):
            return soup.find('title').text.replace('\n','')
    except ConnectionError:
        # print ('Failed to open: ' + url)
        return ""

def scrapeLinks(url, keyword, selector):
    # Getting the webpage, creating a Response object.
    response = requests.get(url)

    # Extracting the source code of the page.
    data = response.text

    # Passing the source code to BeautifulSoup to create a BeautifulSoup object for it.
    soup = BeautifulSoup(data, 'lxml')

    # Extracting all the <a> tags into a list.
    tags = soup.select(selector)

    links = set()
    # Extracting URLs from the attribute href in the <a> tags.
    for tag in tags:
        href = tag.get('href')
        if (keyword in href):
            links.add(href)

    return list(links)

def writeLinks(f, links):
    i = 0
    for link in links:
        try:
            if (i < num_articles):
                title = getTitle(link)
                if (title != ""):
                    f.write(title + ",, " + link + "\n")
                    i += 1
        except:
            print ("CAUGHT ERROR")
    f.close()

# CNN
cnnUrl = "https://www.cnn.com/specials/politics/2020-election-coverage"
cnnLinks = scrapeLinks(cnnUrl, "politics", "a")
cnnLinks = ["https://www.cnn.com" + link for link in cnnLinks]
f = open("cnnLinks.txt", "w")
writeLinks(f, cnnLinks)

# New York Times
nytUrl = "https://www.nytimes.com/news-event/2020-election"
nytLinks = scrapeLinks(nytUrl, "politics", "a")
nytLinks = ["https://www.nytimes.com" + link for link in nytLinks]
f = open("nytLinks.txt", "w")
writeLinks(f, nytLinks)

# Fox
foxURL = "https://www.foxnews.com/category/politics/2020-presidential-election"
foxLinks = scrapeLinks(foxURL, "", "article a")
foxLinks = ["https://www.foxnews.com" + link for link in foxLinks]
f = open("foxLinks.txt", "w")
writeLinks(f, foxLinks)
