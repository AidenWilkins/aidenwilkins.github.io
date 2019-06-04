function ChangePage(pageUrl) {
  	window.location.assign(pageUrl);
}

var price_ = 0;

function AddToCart(item, price){
	price_ += price;
	document.getElementById('totalPrice').innerHTML = "Cart $" + price_;
	//window.alert(item + " Has Been Added to Cart");
	TimedAlert(item + " Has Been Added to Cart", "2000", 775, 100);
}

function SetPosition(left, right, top, buttom, name){
	document.getElementById(name).style.left = left;
	document.getElementById(name).style.right = right;
	document.getElementById(name).style.top = top;
	document.getElementById(name).style.bottom = buttom; 
}

function TimedAlert(msg, duration, x_Pos, y_Pos)
{
	var styler = document.createElement("div");
	styler.setAttribute("style","border: solid 5px Silver;width:auto;height:100px;background-color:#444;color:Silver");
	styler.setAttribute("class", "Dabsolute");
	styler.style.left = x_Pos + 'px';
	styler.style.top = y_Pos + 'px';
	styler.innerHTML = "<h1>" + msg + "</h1>";
	setTimeout(function() { styler.parentNode.removeChild(styler); }, duration);
	document.body.appendChild(styler);
}

function ShowNumber(event) {
	var el = document.getElementById('number');
	el.innerHTML = "&nbsp 705-496-8773";
	el.style.width = 'auto';
}

function HideNumber(event) {
	var el = document.getElementById('number');
	el.innerHTML = "";
	el.style.width = '50px';
}

function OnChanged() {
  	var charity = document.forms[0];
  	var txt = "";
  	for(var i = 0; i < charity.length; i++){
  		if(charity[i].checked){
  			if(charity[i].value == "SA"){
  				txt = txt + "The Salvation Army is a Christian organization that gives hope and support to vulnerable people in 400 communities across Canada and in 131 countries. The Salvation Army exists to share the love of Jesus Christ, meet human needs and be a transforming influence in the communities of our world.";
  			}
  			else if(charity[i].value == "CCSS"){
  				txt = txt + "Info for Catulpa Community Support Services:  We are a social service agency working in partnership with people and families with special and unique needs. We dream of a future where all people are recognized and valued as contributing members of their community.";
  			}
  			else{
  				txt = txt + "The YMCA is a charity that helps Canadians lead healthier lives, every day, in every way. Through our many programs, including Health & Fitness, Aquatics, Camps, Child Care and Employment Services, we are helping people at all ages and stages in their journey to better health.";
  			}
  		}
  	}
  	document.getElementById('charity').innerHTML = txt;
}

/*function DownloadFromFTPServer(fileName) {

}*/

function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
	      var contents = e.target.result;
        alert( "Got the file.n" 
              +"name: " + f.name + "n"
              +"type: " + f.type + "n"
              +"size: " + f.size + " bytesn"
              + "starts with: " + contents.substr(1, contents.indexOf("n"))
        );  
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
  }
