document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('button').addEventListener('click', onclick);

    function onclick(){
        chrome.tabs.query({currentWindow: true, active: true}, 
        function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, 'hi', receiveRes)
        })
    }

    function receiveRes(res){
        const div = document.createElement('div')
        div.textContent = `${res.count} bears`
        document.body.appendChild(div)
    }
  })