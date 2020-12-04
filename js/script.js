$('body').on('click', '.password-control', function () {
	if ($('#password-input').attr('type') == 'password') {
		$(this).addClass('view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});
let price = document.querySelector('.price-one').textContent; // или просто задать price числом
console.log(price)
let num = document.querySelector('#num').value;

let calcPrice = () => {
	return price * num;
}

let start = () => {
	num = 1
	document.querySelector('#num').value = num;
	document.querySelector('.out-price').innerHTML = calcPrice();
}
start();

let change = () => {
	num = document.querySelector('#num').value;
	document.querySelector('.out-price').innerHTML = calcPrice();
}

let plus = () => {
	num++;
	document.querySelector('#num').value = num;
	document.querySelector('.out-price').innerHTML = calcPrice();
}
let minus = () => {
	if (num != 0) {
		num--;
		document.querySelector('#num').value = num;
		document.querySelector('.out-price').innerHTML = calcPrice();
	}
}

document.querySelector('.product-plus').addEventListener('click', plus);
document.querySelector('.product-minus').addEventListener('click', minus);
document.querySelector('#num').addEventListener('change', change);