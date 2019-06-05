document.getElementById("openFile").addEventListener('change', function() {
	var fr = new FileReader();
	fr.onload = function() {
		document.getElementById("content").textContent = this.result;
	}
	alert(this.files[0].name);
	fr.readAsText(this.files[0]);
})