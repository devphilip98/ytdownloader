let Btn = document.getElementById('btn');
let URLinput = document.querySelector('.URL-input');
let select = document.querySelector('.opt');
let serverURL = 'http://localhost:4000';

document.getElementById('urlInput').focus();

Btn.addEventListener('click', () => {
	if (!URLinput.value) {
		alert('Please enter YouTube URL');
	}
	else if((!URLinput.value.includes('youtube')) && (!URLinput.value.includes('youtu.be')) ){
		alert('Please enter YouTube URL only');

	} else {
		if (select.value == 'mp3') {
			redirectMp3(URLinput.value);
		} else if (select.value == 'mp4') {
			redirectMp4(URLinput.value);
		}
	}
});

function redirectMp3(query) {
	window.location.href = `${serverURL}/downloadmp3?url=${query}`;
}

function redirectMp4(query) {
	window.location.href = `${serverURL}/downloadmp4?url=${query}`;
}