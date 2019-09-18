function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
		  c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	} 
	}
	return "false";
}

function checkCookie() {
	var darkmode = getCookie("darkmode");
	if (darkmode == "true") {
		$("#darkmode").prop("checked", true);
		$("#top").css("background-color", "#ffffff");
	} else if (darkmode == "false") {
		$("#darkmode").prop("checked", false);
		$("#top").css("background-color", "#2e2e2e");   
	}
}
	
function setDarkmode() {
	if (document.getElementById("darkmode").checked == true) {
		document.cookie = "darkmode=true; expires=Wed, 1 Jan 2030 00:00:00 UTC;";
		checkCookie();
	} else if (document.getElementById("darkmode").checked == false) {
		document.cookie = "darkmode=false; expires=Wed, 1 Jan 2030 00:00:00 UTC;";
		checkCookie();
	}
}

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'elements.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 

function cardifyElements() {
	loadJSON(function(elements) {
		var elementsJSON = JSON.parse(elements);
		console.log(elements);
	 });
}
