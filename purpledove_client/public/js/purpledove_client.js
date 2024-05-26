$(document).ready(function(){
	var image_name = "/assets/purpledove_client/images/logo.svg";
	$('.navbar-home').html('<img class="erpnext-icon" src="' + image_name  +  '"/>');
});

$(document).ready(function(){
	$('.slide-step.active').css('color', '#023f24');
});

function helpMenu (){
	var dropDownMenu = document.getElementsByClassName("dropdown-menu");
	// dropDownMenu[1].getElementsByTagName("a")[0].setAttribute("href","https://purpledovemis.tawk.help/");
	// dropDownMenu[1].getElementsByTagName("a")[1].setAttribute("href","https://community.officeplus.com.ng");
	// dropDownMenu[1].getElementsByTagName("a")[2].setAttribute("href","https://support.officeplus.com.ng");
	// dropDownMenu[1].getElementsByTagName("a")[3].setAttribute("href","https://officeplus.com.ng");
}


window.onload = function(){
	helpMenu();
}


$(document).ready(function(){
	var image_name = "/assets/purpledoveclient/images/logo.svg";
	$('.app-logo').html('<img class="app-logo" src="assets/purpledoveclient/images/logo.svg"/>');
});

$(document).ready(function(){
	$('.slide-step.active').css('color', 'purple');
});

function helpMenu (){
	var dropDownMenu = document.getElementsByClassName("dropdown-menu");
	dropDownMenu[1].getElementsByTagName("a")[0].setAttribute("href","https://purpledovemis.tawk.help/");
	dropDownMenu[1].getElementsByTagName("a")[1].setAttribute("href","");
	dropDownMenu[1].getElementsByTagName("a")[2].setAttribute("href","");
	dropDownMenu[1].getElementsByTagName("a")[3].setAttribute("href","");
}


window.onload = function(){
	helpMenu();
}


