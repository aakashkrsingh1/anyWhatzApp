var input = document.querySelectorAll(".box .header .input input")[0];

var btn = document.querySelectorAll(".box .body .row .col-3 button");


for(var i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', function(){
        
		var num1 = input.value;
		var num2 = this.childNodes[0].nodeValue;

		num = num1+num2

		input.value = num;
	});
}

function reset(){
	input.value="";
}

function textWhatsApp(){ 
	var phone = document.getElementById("myNumber").value; 
	if (phone != null) 
	{ 
	window.location.href = "https://api.whatsapp.com/send?phone=" + phone; 
	}
	else
	alert("Invalid Number/ Not on WhatsApp/Reload");
	 }
	 function contactAkash(){
	   window.location.href="https://t.me/madarauchiha1105";
	 }