const rss2json_api = 'rgocpeud5uvoylffbwmszslyptrxidyzvwvxohjr'

$(document).ready(function() {



$.each(config['rssurl'],function(listIndex, listElement){
    console.log('Looping through RSS Category:', listIndex)
    $('body').append(`<div class="cardContainer"><h1 class="rssCard" id="title_${listIndex}">${listIndex}</h1><div class="rssCard" id="card_${listIndex}"><ul class="rssList">content_${listIndex}</ul></div></div>`)
    var newfeed = ''

    $.each(listElement, function (index, value) {
        console.log('Looping through RSS URL:', value)
        $.getJSON('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(value) + '&api_key=' + rss2json_api + '&order_by=pubDate', function(data) {  
            console.log('getJSON success for:', value)
            newfeed = newfeed + parseFeed(data, value)
            $(`#card_${listIndex} > ul.rssList`).html(newfeed);
            if(newfeed == '') {$(`#card_${listIndex} > ul.rssList`).html('Nothing new here right now<br>')}
        });
    });
});





});



function parseFeed(data, url) { // https://stackoverflow.com/a/7067582/3016570
    let newsPublisher = data['feed']['title']
    console.log('Parsing feed of:', newsPublisher)
    let newfeed = ''
    $.each(data['items'], function(index, value) {
        item = {
            title: value['title'],
            link: value['link'],
            description: value['description'],
            pubDate: value['pubDate'],
            author: value['author']
        }

        if (itemValid(item)) {
        newfeed += `<li><div class='itemTitle'><a href='${item['link']}' target='_blank'>${item['title']}</a></div><div class='itemPublisher'>${newsPublisher}</div><div class='itemContent'>${item['description'].slice(0,config['maxDescLen'])}</div></li>`; 
        }
    });
    return newfeed 
};

function itemValid(item) { // Checks to see if item should be included in feed
    /*var pubDay = item['pubDate'].slice(5,-15).split(' ')[0];
    var pubMonth = months.indexOf(item['pubDate'].slice(5,-15).split(' ')[1])+1;
    if (pubMonth < 10) {pubMonth = '0' + pubMonth}
    var pubYear = item['pubDate'].slice(5,-15).split(' ')[2];
    selectedDateTimestamp = pubYear + '-' + pubMonth + '-' + pubDay*/
    timediff = new Date($.now()).getTime() - new Date(item['pubDate']).getTime(); // Get timediff between now and when this article was published
    termExcluded = config['excludeTerms'].some(function(v) { return item['title'].indexOf(v) >= 0; }) // True if title contains any of the terms to exclude - https://stackoverflow.com/a/5582621/3016570
    termIncluded = config['includeTerms'].some(function(v) { return item['title'].indexOf(v) >= 0; }) // True if title contains any of the terms to include
    boolval = !(timediff > config['maxPublishTime'] || (termExcluded && !termIncluded)) // Check all conditions

    return boolval
}
