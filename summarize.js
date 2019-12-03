let but = document.getElementById("summary");

but.addEventListener('click', test);

function test(){

    let num = document.getElementById("numLines").value;

    browser.tabs.query({currentWindow: true, active: true}, function(tabs){

    let url = tabs[0].url;
    var data = "key=9d04304f130505f4fa89b9c9d510e397&url=" + url + "&sentences=" + num;
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        let val = JSON.parse(this.responseText);
        let element = document.createElement('p')
        element.innerHTML = val["summary"];
        document.body.appendChild(element);
      }
    });

    xhr.open("POST", "https://api.meaningcloud.com/summarization-1.0");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
});
}
