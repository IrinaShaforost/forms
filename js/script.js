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
$(document).ready(function () {
	$('.goods').on('click', function (evt) {
		var elem = evt.target;
		var container = evt.currentTarget;
		var input = container.getElementsByClassName('counter')[0];
		var sum = container.getElementsByClassName('sum')[0];
		var count = parseInt(input.getAttribute('data-count'), 10);
		var price = parseInt(input.getAttribute('data-price'), 10);

		if (elem.classList.contains('down')) {
			count = count == 1 ? count : (count - 1);
		} else if (elem.classList.contains('up')) {
			count += 1;
		}
		console.log(count)
		input.value = count + '';
		sum.innerHTML = price * count;
		input.setAttribute('data-count', count);
	});
});