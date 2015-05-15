var leftId, rightId, clips;
var currentAudio, currentAudioSide;

$(function () {
	initializeJournal();
	
	$('.left').click(function() {
		//var entry = oldEntries[Math.floor(Math.random()*oldEntries.length)];
		var entry = getJournalEntry('old');
		if (entry.vertical == 'no') {
			$(this).children('.contentYear').html(entry.year);
			$(this).children('.title').html(entry.title);
			$(this).children('.content').html(getContent(entry));
			$(this).children('.content').css("width","auto");	
			stopAudioSameside('left');
		} else {
			$(this).children('.contentYear').html("");
			$(this).children('.title').html("");
			$(this).children('.content').html(getVerticalContent(entry));
			$(this).children('.content').css("width","100%");	
			playAudio('left', entry.soundId);
		}
		leftId = entry.id;
	});

	$('.right').click(function() {
		//var entry = newEntries[Math.floor(Math.random()*newEntries.length)];
		var entry = getJournalEntry('new');
		if (entry.vertical == 'no') {
			$(this).children('.contentYear').html(entry.year);
			$(this).children('.title').html(entry.title);
			$(this).children('.content').html(getContent(entry));
			$(this).children('.content').css("width","auto");	
			stopAudioSameside('right');
		} else {
			$(this).children('.contentYear').html("");
			$(this).children('.title').html("");
			$(this).children('.content').html(getVerticalContent(entry));
			$(this).children('.content').css("width","100%");
			playAudio('right', entry.soundId);
		}
		rightId = entry.id;
	});
});

function playAudio(side, soundId) {
	stopAudio();
	currentAudio = $("#" + soundId)[0];
	currentAudio.play();
	currentAudioSide = side;
}	

function stopAudioSameside(side) { //stop the current audio
	if (side == currentAudioSide && side != null) {
		stopAudio();
	}
}

function stopAudio() {
	if (currentAudio != null) {
		currentAudio.pause();
		currentAudio.currentTime = 0;
		currentAudio = null;
	}	
}

function initializeJournal() {
	clearTitle('both');
	clearContent('both');
	$(".left > .content").html("<div class='year'>1999</div>");
	$(".right > .content").html("<div class='year'>2014-2015</div>");
	clips = [];
	currentAudioId = null;
	currentAudioSide = null;
}

function getContent(entry) {
	var html = "";
	html += "<img class='photo' src='img/" + entry.image + "'/><br/>";
	html += "<p>" + entry.journal + "</p>";
	return html;
}

function getVerticalContent(entry) {
	var html = "";
	html += "<img class='vphoto' src='img/" + entry.image + "' title='" + entry.year + ": " + entry.title + "'/><br/>";
	//html += "<p>" + entry.journal + "</p>";
	return html;
}

function clearTitle(side) {
	if (side == "left") {
		$(".left > .title").html('');
	} else if (side == "right") {
		$(".right > .title").html('');
	} else if (side == "both") {
		$(".left > .title").html('');
		$(".right > .title").html('');
	}
}

function clearContent(side) {
	if (side == "left") {
		$(".left > .content").html('');
	} else if (side == "right") {
		$(".right > .content").html('');
	} else if (side == "both") {
		$(".left > .content").html('');
		$(".right > .content").html('');
	}
}
