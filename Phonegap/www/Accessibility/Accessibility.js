/*
 * Based on
 * One line Accessibility Module by Andy Barratt
 * For more information and instructions on usage, see http://blog.andybarratt.co.uk/?p=426
 */
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.7.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


function changeStyle(ID) {
	// create cookie to store body style ID in
	var cookieName = 'bodyStyleID=';
	var cookieVal = ID;
	var date = new Date();
	date.setFullYear(date.getFullYear() + 1);
	var cookieExpires = ';expires=' + date.toGMTString();
	document.cookie = cookieName + cookieVal + cookieExpires + ';' + 'path=/;';
	// set body's ID to match the chosen colour scheme.
	document.body.id = ID;
}

// -----------------------------------------------------------------------------------------

function changeFontSize(percentage) {
	// create cookie to store font size in
	localStorage.fontSize = percentage;
	
	// set body's fontsize to the specified percentage.
	setFontSize('body', percentage);
	setFontSize('button', percentage);
	setFontSize('h1', percentage);
	setFontSize('h4', percentage);
	setFontSize('p', percentage);
}

function setFontSize(element, percentage) {
	var p = document.getElementsByTagName(element);
	for (i = 0; i < p.length; i++) {
		p[i].style.fontSize = percentage;
	}
}

// ------------------------------------------------------------------------------------------

function changeFont(font) {
	//store the font in local storage
	localStorage.font = font;
	
	//set the body's font to the specified font
	setFont('body', font);
	setFont('button', font);
	setFont('h1', font);
	setFont('h4', font);
	setFont('p', font);
}

function setFont(element, font) {
	var p = document.getElementsByTagName(element);
	for(i = 0; i <  p.length; i++) {
		p[i].style.fontFamily = font;
	}
}
// ------------------------------------------------------------------------------------------

function restoreStyle(){
	
	if (localStorage.fontSize != undefined){
		changeFontSize(localStorage.fontSize);
	}
	
	if (localStorage.font != undefined){
		changeFont(localStorage.font);
	}
}

$(document).ready(function(){restoreStyle()});
