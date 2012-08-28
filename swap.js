function swapEmoticons() {
	imgs = document.body.getElementsByTagName('img');
	for (var i = 0; i < imgs.length; ++i) {
  		var item = imgs[i];
  		//console.log('item.src='+item.src);
  		if ((item.src.indexOf('i.somethingawful.com/forumsystem/emoticons/') > -1 || item.src.indexOf('http://fi.somethingawful.com/images/smilies/emot-v.gif') > -1) && item.src.indexOf('@2x') == -1 ) {
  			
  			var height = item.offsetHeight;
  			var width = item.offsetWidth;
  			
  			//console.log('found ' + item.src + '; ' + width + 'x' + height);
  			
  			item.setAttribute('height', height);
  			item.setAttribute('width', width);
  			
			doesFileExist(item);
  		}
	}
}

function doesFileExist(img) {
	//test if file exists
	var segments = img.src.split('/');
	var filename = segments[segments.length - 1];
	
	var filenameSegments = filename.split('.');
	filenameSegments[filenameSegments.length - 2] = filenameSegments[filenameSegments.length-2] + '@2x';
	
	var retinaFilename = filenameSegments.join('.')
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", chrome.extension.getURL('/emoticons/' + retinaFilename), true);
	xhr.onreadystatechange = function() {
		if (xhr.status==200) {
			console.log('swapping ' + filename);
			img.src = chrome.extension.getURL('/emoticons/'+retinaFilename);
		}
	};
	xhr.send();
}

var imgs;
swapEmoticons();