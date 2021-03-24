const url = window.location.search;
const urlParams = new URLSearchParams(url)

const username = urlParams.get('username')
console.log(username);

const password = urlParams.get('password')
console.log(password);

window.onload = loginLoad;
function loginLoad(){
	let form = document.getElementById('myLogin');
	form.onsubmit = checkLogin;
}

function checkLogin(){

	let id = document.getElementById('username').value;
	let pass = document.getElementById('password').value;

	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	if (username != id){
		alert("ไม่ตรงกัน")
	}

	else if (pass != password) {
		alert("ไม่ตรงกัน")
	}

	else {
		alert('ตรงกัน')
	}

	return false;
}

			