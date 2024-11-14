let mybtn=document.getElementById("btn");
let fname=document.getElementById("f-name");
let lname=document.getElementById("l-name");
let email=document.getElementById("mail");
let number=document.getElementById("num");

mybtn.addEventListener("click", function(event) {
    event.preventDefault();

	console.log("First Name:", fname.value);
    console.log("Last Name:", lname.value);
    console.log("Phone Number:", number.value);
    console.log("Email:", email.value);

	alert(`Full Name:${fname.value}\nLast Name:${lname.value}\n
	Phone Number:${number.value}\nEmail ID:${email.value}`)
	
});