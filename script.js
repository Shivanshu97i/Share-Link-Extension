function fetchData() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		const url = tabs[0].url;
	const apiurl = "https://www.qrtag.net/api/qr.png?url=" + url;
	document.getElementById("qrcode").src = apiurl;
	
	})

	}
fetchData();
