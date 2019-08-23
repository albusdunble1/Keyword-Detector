keywords = ['lol', 'haha', 'lmao', '?', 'why', 'what', 'how', 'when', 'where']

setInterval(function(){ 
    for (i = 0; i < keywords.length; i++){
        $(`.text-fragment:contains(${keywords[i]})`).css({
            "font-size": "2.5em"
        });
    }
 }, 100);

