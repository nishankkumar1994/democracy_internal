$(document).ready(function() {
	
});

function isiPhone(){
    return (
        //Detect iPhone
        (navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPad") != -1) ||
        //Detect iPod
        (navigator.platform.indexOf("iPod") != -1)
    );
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^[0-9]+$/;
    return re.test(phone);
}
