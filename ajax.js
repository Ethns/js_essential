//AJAX: retrieve poeple JSON from backend server
var xhttp_req = new XMLHttpRequest();
xhttp_req.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var output = xhttp_req.responseText;
        var people = JSON.parse(output);
        // people.forEach( p => {
        //     output += '<li>' + p.name + '</li>';              
        // });
        document.getElementById('people').innerHTML = output;
    }
}
xhttp_req.open("GET", "people.json", true);
xhttp_req.send();