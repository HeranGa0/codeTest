function exchangeRate() {
    let date = document.getElementsByName("input")[0].value;
    let array = date.split('/');
    let month = array[0];
    let day = array[1];
    let year = array[2];
    let dateSuffix = year+"-"+month+"-"+day;
    let url = "https://api.exchangeratesapi.io/"+dateSuffix;
    console.log(url);
    let request = new XMLHttpRequest();
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', url, true);
    request.onload = function () {
        let data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            let rates = data["rates"];
            let mxn = rates["MXN"];
            let usd = rates["USD"];
            document.getElementsByName("output")[0].innerHTML = mxn/usd;
        } else {
            console.log('error')
        }
    }
    request.send();
}