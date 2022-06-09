const config = {
    'maxPublishTime': 1*24*60, // In minutes
    'maxDescLen': 200, // Max number of characters
    'excludeTerms': ['NEET', 'monkeypox', 'covid', 'COVID', 'corona', 'Moosewala', 'Nupur Sharma', 'Moose Wala', 'iTunes', 'iPhone', 'iPad', 'smartwatch', 'iOS', 'Watch', 'macOS', 'watchOS', 'The Wire', 'Scroll.in'], // Exclude any titles with these terms. Case-sensitive
    'includeTerms': [], // Include any titles with these terms. Overrides exclude terms. Case-sensitive
    'rssurl': {'Scitech': ['https://www.wired.com/feed/tag/ai/latest/rss', 'https://www.wired.com/feed/category/science/latest/rss', 'https://www.wired.com/feed/category/security/latest/rss', 'https://www.newscientist.com/subject/physics/feed/', 'https://www.newscientist.com/subject/technology/feed/', 'https://www.newscientist.com/subject/space/feed/'],
    'Gadgets': ['https://www.xda-developers.com/feed/', 'https://www.wired.com/feed/category/gear/latest/rss', 'https://www.notebookcheck.net/RSS-Feed-Notebook-Reviews.8156.0.html', 'https://www.notebookcheck.net/News.152.100.html',],    
    'Health': ['https://www.newscientist.com/subject/health/feed/',],
    'Longform': ['https://www.newscientist.com/section/features/feed/', 'https://www.wired.com/feed/category/ideas/latest/rss', 'https://www.wired.com/feed/tag/wired-guide/latest/rss', 'https://www.wired.com/feed/category/backchannel/latest/rss', 'https://www.economist.com/graphic-detail/rss.xml', 'https://www.economist.com/the-economist-explains/rss.xml'],
    'Nature': ['https://www.newscientist.com/subject/earth/feed/', 'https://www.newscientist.com/subject/life/feed/', 'https://www.newscientist.com/subject/humans/feed/', 'https://www.economist.com/science-and-technology/rss.xml'],
    'Business': ['https://www.wired.com/feed/category/business/latest/rss', 'https://www.economist.com/finance-and-economics/rss.xml', ],
    'Foss/Self-hosting': ['https://noted.lol/rss/', 'https://console.substack.com/feed', 'https://rss.beehiiv.com/feeds/iiTciQgHPG.xml'],
    'News': ['https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en', 'https://indianexpress.com/print/front-page/feed/', 'https://news.google.com/rss/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNRGx1YlY4U0JXVnVMVWRDR2dKSlRpZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen', 'https://www.indiatoday.in/rss/home', ]
    },
};
