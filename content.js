keywords = ['lol', 'haha', 'lmao', '?', 'why', 'what', 'how', 'when', 'where']

setInterval(function(){ 
    for (i = 0; i < keywords.length; i++){
        $(`.text-token:contains(${keywords[i]})`).css({
            "font-size": "2.5em",
            "font-weight": "600",
            "animation": "color-change 2s infinite"
        });
    }
    
    for (i = 0; i < keywords.length; i++){
        $(`.seventv-text-fragment:contains(${keywords[i]})`).css({
            "font-size": "2.5em",
            "font-weight": "600",
            "animation": "color-change 2s infinite"
        });
    }
 }, 100);

//  setInterval(function(){ 
//     for (i = 0; i < keywords.length; i++){
//         $(`.text-fragment:contains(${keywords[i]})`).css({
//             "color": "red"
//         });
//     }
//  }, 500);


//  setInterval(function(){ 
//     for (i = 0; i < keywords.length; i++){
//         $(`.text-fragment:contains(${keywords[i]})`).css({
//             "color": "yellow"
//         });
//     }
//  }, 600);

